import "./togglehead.scss";
import HeroEmojisGsap from "./HeroEmojisGsap";
import HeroEmojisV2 from "./HeroEmojisV2";
import CircularAnimation from "./CircularAnimation";
import CircularAnimationV2 from "./CircularAnimationV2";

export default function Togglehead() {
  return (
    <main>
      {/* <section className="orbit_motion_container">
        <CircularAnimation reverse={true} />
        <CircularAnimation reverse={false} />
      </section> */}
      <section className="orbit_motion_containerV2">
        <CircularAnimationV2 />
      </section>

      <section>
        <HeroEmojisGsap />
        {/* <HeroEmojisV2 /> */}
      </section>
    </main>
  );
}
