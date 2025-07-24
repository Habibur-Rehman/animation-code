import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { accordionIconURL, archinzaURL, excelEntertainmentURL, homeURL, mapURL, playlistURL, printerURL, printerV2URL, rangoonBottleURL, rangoonHoverURL, rangoonURL, reactPlayerURL, silverPointURL, videoDemoURL } from "./helpers/paths";
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

const Routing = () => {

  return (
    <>
      <Routes>
        <Route path={homeURL} element={<HomePage />} />
        <Route path={printerURL} element={<PrinterAnimation />} />
        <Route path={printerV2URL} element={<PrinterAnimationV2 />} />
        <Route path={accordionIconURL} element={<AccordionImagePositionChange />} />
        <Route path={mapURL} element={<MapAnimation />} />
        <Route path={silverPointURL} element={<SilverPointMain />} />
        <Route path={rangoonURL} element={<RangoonMain />} />
        <Route path={rangoonBottleURL} element={<RangoonMainV2 />} />
        <Route path={rangoonHoverURL} element={<RangoonHover />} />
        <Route path={archinzaURL} element={<Archinza />} />
        <Route path={videoDemoURL} element={<VideoDemo />} />
        <Route path={playlistURL} element={<Rat />} />
        <Route path={reactPlayerURL} element={<ReactPlayerPages />} />
        <Route path={excelEntertainmentURL} element={<ExcelEntertainment />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default Routing;
