import BottleAnimation from "../Components/BottleAnimation/BottleAnimation";
import HorizontalScroll from "../Components/HorizontalScroll/HorizontalScroll";
import IcreamImages from "../Components/IcreamImages/IcreamImages";
import MapScroll from "../Components/MapScroll/MapScroll";
import ProgressSwiper from "../Components/ProgressSwiper/ProgressSwiper";
import ScrollNumber from "../Components/ScrollNumber/ScrollNumber";
import "./rangoonMain.scss";

const RangoonMain = () => {
  return (
    <>
      <div className="App rangoon_container">
        <HorizontalScroll />
        <BottleAnimation />
        <MapScroll />
        <ProgressSwiper />
        <IcreamImages />
        <ScrollNumber />
      </div>
    </>
  );
};

export default RangoonMain;
