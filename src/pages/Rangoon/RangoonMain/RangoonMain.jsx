import HorizontalScroll from "../Components/HorizontalScroll/HorizontalScroll";
import ScrollNumber from "../Components/ScrollNumber/ScrollNumber";
import "./rangoonMain.scss";

const RangoonMain = () => {
  return (
    <>
      <div className="App">
        <ScrollNumber />
        <HorizontalScroll />
      </div>
    </>
  );
};

export default RangoonMain;
