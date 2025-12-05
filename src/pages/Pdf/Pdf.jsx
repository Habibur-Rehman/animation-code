import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
import { samplePdf } from "../../source";
import "./pdf.scss";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Pdf = () => {
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1);

  // ✅ Dynamically scale PDF pages based on viewport width
  React.useEffect(() => {
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
      >
        <HTMLFlipBook
          className="flip-book"
          width={400}
          height={600}
          // size="stretch"        // 👈 makes the book adapt its size
          minWidth={300}
          maxWidth={600}
          minHeight={400}
          maxHeight={800}
          drawShadow={true}
          useMouseEvents={true}
          autoSize={true}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <div className="page" key={`page_${index + 1}`}>
              <Page
                pageNumber={index + 1}
                scale={scale}         // ✅ ensures full content fits
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            </div>
          ))}
        </HTMLFlipBook>
      </Document>
    </section>
  );
};

export default Pdf;
