import React, { useEffect, useState } from "react";
import ExcelEntertainment from "./ExcelEntertainment";
import Loader from "../../components/Loader/Loader";

const ExcelEntertainmentWithLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Match your animation timing
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ExcelEntertainment />
      {isLoading && <Loader />}
    </>
  );
};

export default ExcelEntertainmentWithLoader;
