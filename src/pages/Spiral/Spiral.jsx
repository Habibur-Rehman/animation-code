import "./spiral.scss";
import SpiralCards from "../../components/SpiralCards/SpiralCards";
import Gallery3D from "./Gallery3D";
import Gallery3DV2 from "./Gallery3DV2";

const Spiral = ()=> {
    return (
        <>
        {/* <section className="spiral_sec1">
            <SpiralCards />
        </section> */}

        <section className="spiral_sec2">
            <Gallery3D />
        </section>
        <section className="spiral_sec2 spiral_sec3">
            <Gallery3DV2 />
        </section>
        </>
    )
}

export default Spiral;