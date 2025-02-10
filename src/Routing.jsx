import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { accordionIconURL, printerURL } from "./helpers/paths";
import PrinterAnimation from "./pages/SilverPoint/PrinterAnimation/PrinterAnimation";
import AccordionImagePositionChange from "./pages/SilverPoint/AccordionImagePositionChange/AccordionImagePositionChange";

const Routing = () => {

  return (
    <>
      <Routes>
        <Route path={printerURL} element={<PrinterAnimation />} />
        <Route path={accordionIconURL} element={<AccordionImagePositionChange />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default Routing;
