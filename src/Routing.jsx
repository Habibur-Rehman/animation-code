import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { accordionIconURL, printerURL, printerV2URL } from "./helpers/paths";
import PrinterAnimation from "./pages/SilverPoint/PrinterAnimation/PrinterAnimation";
import AccordionImagePositionChange from "./pages/SilverPoint/AccordionImagePositionChange/AccordionImagePositionChange";
import PrinterAnimationV2 from "./pages/SilverPoint/PrinterAnimation/PrinterAnimationV2";

const Routing = () => {

  return (
    <>
      <Routes>
        <Route path={printerURL} element={<PrinterAnimation />} />
        <Route path={printerV2URL} element={<PrinterAnimationV2 />} />
        <Route path={accordionIconURL} element={<AccordionImagePositionChange />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default Routing;
