// import { pdfjs, Document, Page } from "react-pdf";
// import { useState } from "react";
// import { samplePdf } from "../../source";
// import "./FlipBook.css";

// // Configure PDF.js worker
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

// const FlipBook = () => {
//   const [numPages, setNumPages] = useState(0);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [flipDirection, setFlipDirection] = useState(""); // "next" or "prev"

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//     setPageNumber(1);
//   };

//   const goToPrevPage = () => {
//     if (pageNumber > 1) {
//       setFlipDirection("prev");
//       setPageNumber((prev) => prev - 1);
//     }
//   };

//   const goToNextPage = () => {
//     if (pageNumber < numPages) {
//       setFlipDirection("next");
//       setPageNumber((prev) => prev + 1);
//     }
//   };

//   return (
//     <div className="flipbook-container">
//       <div className={`flipbook-page ${flipDirection}`}>
//         <Document file={samplePdf} onLoadSuccess={onDocumentLoadSuccess}>
//           <Page
//             pageNumber={pageNumber}
//             width={600}
//             renderTextLayer={false}
//             renderAnnotationLayer={false}
//           />
//         </Document>
//       </div>

//       <div className="flipbook-controls">
//         <button onClick={goToPrevPage} disabled={pageNumber <= 1}>
//           Previous
//         </button>
//         <span>
//           Page {pageNumber} of {numPages}
//         </span>
//         <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FlipBook;
