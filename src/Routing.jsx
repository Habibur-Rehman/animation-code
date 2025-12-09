import React, { Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  accordionIconURL,
  archinzaURL,
  excelEntertainmentURL,
  flipBookURL,
  homeURL,
  mapURL,
  pdfURL,
  playlistURL,
  printerURL,
  printerV2URL,
  rangoonBottleURL,
  rangoonHoverURL,
  rangoonURL,
  reactPlayerURL,
  silverPointURL,
  tractorURL,
  videoDemoURL,
} from "./helpers/paths";
import PrinterAnimation from "./pages/SilverPoint/PrinterAnimation/PrinterAnimation";
import AccordionImagePositionChange from "./pages/SilverPoint/AccordionImagePositionChange/AccordionImagePositionChange";
import PrinterAnimationV2 from "./pages/SilverPoint/PrinterAnimation/PrinterAnimationV2";
import HomePage from "./pages/HomePage/HomePage";
import MapAnimation from "./components/MapAnimation/MapAnimation";
import RangoonMain from "./pages/Rangoon/RangoonMain/RangoonMain";
import RangoonMainV2 from "./pages/Rangoon/RangoonMain/RangoonMainV2";
import Archinza from "./pages/Archinza/Archinza/Archinza";
import SilverPointMain from "./pages/SilverPoint/SilverPointMain/SilverPointMain";
import RangoonHover from "./pages/Rangoon/RangoonHover/RangoonHover";
import VideoDemo from "./pages/SilverPoint/VideoDemo/VideoDemo";
import Rat from "./pages/Rat/Rat";
import ReactPlayerPages from "./pages/ReactPlayerPages/ReactPlayerPages";
import ExcelEntertainment from "./pages/ExcelEntertainment/ExcelEntertainment";
import Loader from "./components/Loader/Loader";
import ExcelEntertainmentWithLoader from "./pages/ExcelEntertainment/ExcelEntertainmentWithLoader";
import TractorAnim from "./pages/Pfeda/TractorAnim/TractorAnim";
import Pdf from "./pages/Pdf/Pdf";
import FlipBook from "./pages/Pdf/FlipBook";
import PdfV2 from "./pages/Pdf/Pdf-v2";


// const ExcelEntertainment = lazy(() =>
//   import("./pages/ExcelEntertainment/ExcelEntertainment")
// );

// const delayFor = (duration) => {
//   return new Promise((resolve) => setTimeout(resolve, duration));
// };

// const ExcelEntertainment = lazy(() =>
//   Promise.all([
//     import("./pages/ExcelEntertainment/ExcelEntertainment"),
//     delayFor(2000), // Force 2s delay
//     // delayFor(0), // Force 2s delay
//   ]).then(([moduleExports]) => moduleExports)
// );

const Routing = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // match with animation duration

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {/* <Suspense fallback={<Loader />}> */}
      <Routes>
        <Route path={homeURL} element={<HomePage />} />
        <Route path={printerURL} element={<PrinterAnimation />} />
        <Route path={printerV2URL} element={<PrinterAnimationV2 />} />
        <Route
          path={accordionIconURL}
          element={<AccordionImagePositionChange />}
        />
        <Route path={mapURL} element={<MapAnimation />} />
        <Route path={silverPointURL} element={<SilverPointMain />} />
        <Route path={rangoonURL} element={<RangoonMain />} />
        <Route path={rangoonBottleURL} element={<RangoonMainV2 />} />
        <Route path={rangoonHoverURL} element={<RangoonHover />} />
        <Route path={archinzaURL} element={<Archinza />} />
        <Route path={videoDemoURL} element={<VideoDemo />} />
        <Route path={playlistURL} element={<Rat />} />
        <Route path={reactPlayerURL} element={<ReactPlayerPages />} />
        <Route path={pdfURL} element={<Pdf />} />
        {/* <Route path={pdfURL} element={<PdfV2 />} /> */}
        <Route path={flipBookURL} element={<FlipBook />} />
        {/* <Route
            path={excelEntertainmentURL}
            element={<ExcelEntertainment />}
          /> */}
        <Route
          path={excelEntertainmentURL}
          element={<ExcelEntertainmentWithLoader />}
        />
        <Route path={tractorURL} element={<TractorAnim />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* </Suspense> */}
    </>
  );
};

export default Routing;
