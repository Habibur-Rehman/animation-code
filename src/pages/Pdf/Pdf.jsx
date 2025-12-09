import React, { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
import { samplePdf } from "../../source";
import "./pdf.scss";

// ✅ Use built worker (works with CRA/Webpack)
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Pdf = () => {
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 600) setScale(0.8);
      else if (width < 900) setScale(0.9);
      else setScale(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="pdf_sec1">
      <Document
        file={samplePdf}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        onLoadError={(error) => console.error("PDF load error:", error)}
      >
        {numPages && (
          <HTMLFlipBook
            className="flip-book"
            width={400}
            height={600}
            minWidth={300}
            maxWidth={600}
            minHeight={400}
            maxHeight={800}
            drawShadow
            useMouseEvents
            autoSize
          >
            {Array.from({ length: numPages }, (_, i) => (
              <div className="page" key={i}>
                <Page
                  pageNumber={i + 1}
                  scale={scale}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
              </div>
            ))}
          </HTMLFlipBook>
        )}
      </Document>
    </section>
  );
};

export default Pdf;
