// import React, { useEffect, useState } from "react";
// import HTMLFlipBook from "react-pageflip";
// import * as pdfjsLib from "pdfjs-dist";
// import "pdfjs-dist/web/pdf_viewer.css";
// import "./pdf.scss";

// // ✅ Use local worker to avoid CORS issues
// pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf/pdf.worker.min.js";

// const Pdf = () => {
//   const [pages, setPages] = useState([]);
//   const [bookSize, setBookSize] = useState({ width: 400, height: 600 });

//   // Auto resize flipbook based on viewport
//   useEffect(() => {
//     const updateSize = () => {
//       const w = window.innerWidth;
//       if (w < 500) setBookSize({ width: 280, height: 400 });
//       else if (w < 900) setBookSize({ width: 350, height: 500 });
//       else setBookSize({ width: 400, height: 600 });
//     };
//     updateSize();
//     window.addEventListener("resize", updateSize);
//     return () => window.removeEventListener("resize", updateSize);
//   }, []);

//   // Load PDF pages into images
//   useEffect(() => {
//     const loadPdf = async () => {
//       try {
//         const pdf = await pdfjsLib.getDocument("/pdf/sample.pdf").promise;
//         const pagesArray = [];

//         for (let i = 1; i <= pdf.numPages; i++) {
//           const page = await pdf.getPage(i);

//           // Scale to fit nicely
//           const scale = 1.5;
//           const viewport = page.getViewport({ scale });

//           const canvas = document.createElement("canvas");
//           const context = canvas.getContext("2d");

//           canvas.height = viewport.height;
//           canvas.width = viewport.width;

//           await page.render({ canvasContext: context, viewport }).promise;
//           pagesArray.push(canvas.toDataURL("image/png"));
//         }

//         setPages(pagesArray);
//       } catch (error) {
//         console.error("Error loading PDF:", error);
//       }
//     };

//     loadPdf();
//   }, []);

//   return (
//     <section className="pdf_sec1">
//       {pages.length > 0 ? (
//         <HTMLFlipBook
//           width={bookSize.width}
//           height={bookSize.height}
//           minWidth={280}
//           maxWidth={600}
//           maxHeight={800}
//           drawShadow
//           autoSize
//           style={{ margin: "0 auto" }}
//         >
//           {pages.map((img, i) => (
//             <div
//               key={i}
//               className="page"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 overflow: "hidden",
//                 background: "#fff",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <img
//                 src={img}
//                 alt={`Page ${i + 1}`}
//                 style={{
//                   maxWidth: "100%",
//                   maxHeight: "100%",
//                   objectFit: "contain",
//                 }}
//               />
//             </div>
//           ))}
//         </HTMLFlipBook>
//       ) : (
//         <p style={{ textAlign: "center" }}>Loading PDF...</p>
//       )}
//     </section>
//   );
// };

// export default Pdf;
