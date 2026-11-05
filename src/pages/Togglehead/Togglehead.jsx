import "./togglehead.scss";
import HeroEmojisGsap from "./HeroEmojisGsap";
import HeroEmojisV2 from "./HeroEmojisV2";
import CircularAnimation from "./CircularAnimation";
import CircularAnimationV2 from "./CircularAnimationV2";
// import SectionStackV3 from "./SectionStackV3";
import SectionStackV4 from "./SectionStackV4";
import SectionStackV5 from "./SectionStackV5";

export default function Togglehead() {
  return (
    <main>
      {/* <section className="orbit_motion_container">
        <CircularAnimation reverse={true} />
        <CircularAnimation reverse={false} />
      </section> */}

      <section>
        <HeroEmojisGsap />
        {/* <HeroEmojisV2 /> */}
      </section>

      <section>
        {/* <SectionStackV4 /> */}
        <SectionStackV5 />
      </section>

      <section className="orbit_motion_containerV2">
        <CircularAnimationV2 />
      </section>
    </main>
  );
}
