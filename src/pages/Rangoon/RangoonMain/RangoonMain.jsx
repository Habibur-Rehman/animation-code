import HorizontalScroll from "../Components/HorizontalScroll/HorizontalScroll";
import MapScroll from "../Components/MapScroll/MapScroll";
import ScrollNumber from "../Components/ScrollNumber/ScrollNumber";
import "./rangoonMain.scss";

const RangoonMain = () => {
  return (
    <>
      <div className="App">
        <MapScroll />
        <HorizontalScroll />
        <ScrollNumber />
      </div>
    </>
  );
};

export default RangoonMain;
