

// import React, { useState } from "react";
// import HTMLFlipBook from "react-pageflip";
// import { Document, Page, pdfjs } from "react-pdf";
// import { samplePdf } from "../../source";
// import "./pdf.scss";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

// const PdfV2 = () => {
//   const [numPages, setNumPages] = useState(null);

//   return (
//     <>
//       <section className="pdf_sec1">
//         <Document
//           file={samplePdf}
//           onLoadSuccess={({ numPages }) => setNumPages(numPages)}
//         >
//           <HTMLFlipBook width={400} height={600}>
//             {Array.from(new Array(numPages), (el, index) => (
//               <div className="page" key={`page_${index + 1}`}>
//                 <Page pageNumber={index + 1} />
//               </div>
//             ))}
//           </HTMLFlipBook>
//         </Document>
//       </section>
//     </>
//   );
// };

// export default PdfV2;
