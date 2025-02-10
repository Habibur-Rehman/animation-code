import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { homeURL, printerURL } from "./helpers/paths";
import PrinterAnimation from "./pages/PrinterAnimation/PrinterAnimation";

const Routing = () => {

  return (
    <>
      <Routes>
        <Route path={printerURL} element={<PrinterAnimation />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default Routing;
