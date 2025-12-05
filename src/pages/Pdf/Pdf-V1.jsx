import { pdfjs, Document, Page } from "react-pdf";
import { useState } from "react";
import { motion } from "framer-motion";
import { samplePdf } from "../../source";
import "./FlipBook.css";

// PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const FlipBook = () => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState(1); // 1 = next, -1 = prev

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToNextPage = () => {
    if (pageNumber < numPages && !isFlipping) {
      setFlipDirection(1);
      setIsFlipping(true);
      setTimeout(() => {
        setPageNumber((prev) => prev + 2);
        setIsFlipping(false);
      }, 600); // match animation duration
    }
  };

  const goToPrevPage = () => {
    if (pageNumber > 1 && !isFlipping) {
      setFlipDirection(-1);
      setIsFlipping(true);
      setTimeout(() => {
        setPageNumber((prev) => prev - 2);
        setIsFlipping(false);
      }, 600);
    }
  };

  return (
    <div className="flipbook-container">
      <Document file={samplePdf} onLoadSuccess={onDocumentLoadSuccess}>
        <div className="flipbook-spread">
          {/* Left Page */}
          <div className="flipbook-page">
            {pageNumber <= numPages && (
              <Page
                pageNumber={pageNumber}
                width={300}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            )}
          </div>

          {/* Right Page */}
          {pageNumber + 1 <= numPages && (
            <div className="flipbook-page right-page">
              <Page
                pageNumber={pageNumber + 1}
                width={300}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </div>
          )}

          {/* Flipping Page (on top) */}
          {isFlipping && (
            <motion.div
              className={`flipbook-page flipping-page`}
              style={{ width: 300 }}
              initial={{ rotateY: 0 }}
              animate={{ rotateY: flipDirection * 180 }}
              transition={{ duration: 0.6 }}
            >
              <Page
                pageNumber={flipDirection === 1 ? pageNumber + 1 : pageNumber - 1}
                width={300}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </motion.div>
          )}
        </div>
      </Document>

      <div className="flipbook-controls">
        <button onClick={goToPrevPage} disabled={pageNumber <= 1 || isFlipping}>
          Previous
        </button>
        <span>
          Page {pageNumber} of {numPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={pageNumber >= numPages - 1 || isFlipping}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FlipBook;
