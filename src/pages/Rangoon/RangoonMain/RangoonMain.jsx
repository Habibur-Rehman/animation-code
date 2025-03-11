import HorizontalScroll from "../Components/HorizontalScroll/HorizontalScroll";
import MapScroll from "../Components/MapScroll/MapScroll";
import ProgressSwiper from "../Components/ProgressSwiper/ProgressSwiper";
import ScrollNumber from "../Components/ScrollNumber/ScrollNumber";
import "./rangoonMain.scss";

const RangoonMain = () => {
  return (
    <>
      <div className="App">
        <ProgressSwiper />
        <MapScroll />
        <HorizontalScroll />
        <ScrollNumber />
      </div>
    </>
  );
};

export default RangoonMain;
