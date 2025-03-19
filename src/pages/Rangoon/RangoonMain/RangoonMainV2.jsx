import "./rangoonMain.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  bottle01,
  bottle02,
  coconoutleaf,
  fanta,
  leaf2,
  orange,
} from "../../../source";
import { useEffect, useRef } from "react";
import { useWindowSize } from "react-use";

gsap.registerPlugin(ScrollTrigger);

const RangoonMainV2 = () => {
  const containerRef = useRef(null);
  const greenBottleRef = useRef(null);
  // const [isFixed, setIsFixed] = useState(true);
  const { width } = useWindowSize();

  useEffect(() => {
    // const container = containerRef.current;
    // const greenBottle = greenBottleRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flex_1",
        start: "26% 95%",
        end: "110% 50%",
        // start: "65% 95%",
        // end: "220% 50%",
        // markers: true,
        scrub: true,
        // onEnter: () => setIsFixed(false), // Move bottle inside
        // onLeaveBack: () => setIsFixed(true), // Reset bottle position when scrolling back up
      },
    });

    // gsap.utils.toArray(".desc").forEach((desc) => {
    //   tl.to(desc, {
    //     y: -300,
    //     scrub: 1,
    //     duration: 5,
    //     scrollTrigger: {
    //       trigger: desc,
    //       start: "97% 40%",
    //       end: "108% 70%",
    //       scrub: 5,
    //       // markers: true,
    //       pinSpacing: false,
    //       pinSpacer: false,
    //     },
    //   });
    // });

    tl.fromTo(
      ".bottle_green",
      {
        rotate: 20,
        scrub: 5,
        duration: 5,
        ease: "power2.out",
      },
      {
        rotate: 0,
        scrub: 5,
        duration: 5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".first",
          start: "27% 30%",
          end: "48% 70%",
          scrub: true,
          // markers: true,
        },
      }
    );

    tl.to(".bottle_green", {
      scale: 1,
      scrub: 5,
      scrollTrigger: {
        trigger: ".second",
        start: "90% 30%",
        end: "108% 70%",
        scrub: true,
        // markers: true,
      },
    });

    tl.to(
      ".bottle_green",
      {
        position: "absolute",
        // top: "61.8%",
        top: "auto",
        bottom: "0",
        left: "50%",
        // scale: 1,
        scrub: 5,
        scrollTrigger: {
          trigger: ".second",
          start: "113.95% 30%",
          end: "123% 70%",
          // start: `${width > 1366 ? "107% 30%" : "107% 30%"}`,
          // end: `${width > 1366 ? "116% 70%" : "115% 70%"}`,
          scrub: true,
          // markers: true,
        },
      },
      "placed"
    );
    tl.to(
      ".bottle_scroll_wrapper",
      {
        position: "relative",
      },
      "placed"
    );

    gsap.utils.toArray(".bottle_img").forEach((img, index) => {
      tl.to(img, {
        scrub: 5,
        y: index * 40,
        stagger: 2, // delay
        // delay: index * 0.2,
        scrollTrigger: {
          trigger: ".bottle_container_1",
          start: "60% 30%",
          end: "180% 70%",
          scrub: 3,
          // markers: true,
        },
      });
    });

    tl.to([".third", ".fourth"], {
      y: 200,
      scrub: 1,
      duration: 3,
      scrollTrigger: {
        trigger: ".third_fourth",
        start: "-1% 40%",
        end: "10% 70%",
        scrub: 1,
        // markers: true,
      },
    });

    // gsap.utils.toArray(".float").forEach((float, index) => {
      // note stagger doesn't work on loop
      tl.to(".float", {
        y: -200,
        // y: index * -70,
        scrub: 2,
        // stagger: 0.5,
        stagger: {
          duration: 5,
          each: 0.1,
          from: "center",
          ease: "power2.out",
          // yoyo: true, // Animates forward, then reverses
          // repeat: -1, // Repeats immediately, not waiting for the other staggered animations to finish
        },
        // delay: 0.5,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".bottlecont2",
          start: "40% 50%",
          end: "180% 70%",
          scrub: 2,
          // markers: true,
        },
      });
    // });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  // useEffect(() => {
  //   const elements = document.querySelectorAll("[data-speed]");

  //   gsap.to(elements, {
  //     y: (i, el) =>
  //       (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window),
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger:".bottlecont2",
  //       start: "10% 30%",
  //       end: "150% 60%",
  //       invalidateOnRefresh: true,
  //       scrub: 1,
  //       markers: true,
  //     },
  //   });

  //   return () => ScrollTrigger.killAll(); // Cleanup
  // }, []);

  return (
    <>
      <div className="App rangoon_container">
        <div className="my_container">
          <div className="flex_container flex_1">
            <p className="desc first">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              quo mollitia beatae, quidem quis fugit temporibus consequuntur,
              architecto, aut veniam dolor laudantium obcaecati libero iusto.
              Distinctio, sint. Quisquam, asperiores est? Id, labore! Architecto
              id odit doloribus dolor at! Aliquam, doloribus itaque corrupti
              eaque asperiores tempore accusamus sapiente facilis minus veniam
              facere unde maxime possimus, est laborum. Eaque adipisci placeat
              unde atque dolorum ipsa voluptatibus nulla officiis error libero
              nobis magni possimus tenetur quaerat nihil facere, itaque odio!
              Nihil asperiores, neque vero, ipsa itaque minus placeat voluptas
              laboriosam obcaecati perferendis omnis, exercitationem illum
              voluptate ratione! Quas, ea laudantium sunt eum quidem libero
              laboriosam. Earum neque natus, illum explicabo fugit iusto quam.
              Error voluptate, molestias mollitia voluptatem alias quod rem nam
              aperiam eius quisquam, magnam ullam ex laborum iure porro eveniet,
              quaerat molestiae! Fugit blanditiis, quos pariatur consectetur
              eaque quaerat hic dolores, odio accusantium eum corrupti
              exercitationem nihil tempora assumenda corporis accusamus esse
              iste ea maxime repellat! Eos a, blanditiis rem ipsa modi adipisci,
              quaerat nisi, quam deleniti nemo delectus? Id explicabo dicta ex
              in earum porro asperiores nostrum eos? Unde, non. Aspernatur illum
              animi illo excepturi velit, dolorem tempora iusto eos, fugit quam
              enim nisi? Sunt omnis aspernatur nostrum suscipit sequi hic veniam
              asperiores debitis non veritatis obcaecati officia deleniti odio
              nisi qui illo doloremque, officiis vitae, sed rerum! Ipsa maxime
              nemo explicabo officia animi, corporis tenetur. Repellendus et
              sequi ullam nemo nulla aliquid eaque dolorem dolore! Atque,
              numquam dolores qui aliquid quasi ipsa repudiandae? Voluptas, odit
              officia. Aliquid iure amet consequuntur vel quasi corporis ullam
              illum mollitia labore cum, suscipit incidunt, modi quae error
              voluptate architecto id ex fuga! Aut enim dolores sed quibusdam.
              Minima qui assumenda veniam rem officia iusto distinctio. Vel
              inventore cum quos dolorum sit tenetur amet, necessitatibus
              quaerat excepturi nam aliquid culpa libero dolore numquam et rem
              veritatis quia, accusamus, optio ducimus eum quo quibusdam.
              Distinctio quibusdam blanditiis, officia quas minus sed in.
              Voluptatibus nobis voluptatem reprehenderit sed, voluptatum unde
              necessitatibus ut maiores eaque nam et temporibus facere. Libero
              tempore adipisci natus. Doloribus praesentium numquam consequuntur
              earum minus voluptatibus rerum beatae quasi velit at error aperiam
              sint, vel, provident nam laboriosam iste odio modi ullam nihil
              tempora recusandae natus est. Tempora officiis dolor mollitia
              illum ea enim praesentium excepturi culpa corrupti corporis,
              molestias sapiente a magni aliquid eos voluptatem quas nesciunt
              qui, harum reiciendis cumque voluptatum? Possimus earum ut
              mollitia magnam nulla ullam maiores eligendi corporis, itaque
              esse? Culpa consequuntur repellendus natus suscipit ducimus
              recusandae illo et dolores libero quae, eius deleniti optio
              aliquid nam aut vel cupiditate alias voluptatem aspernatur nemo
              rem itaque cum quaerat temporibus? Nisi laborum maxime perferendis
              ipsa debitis porro eveniet ipsam sapiente eius in aspernatur,
              fugiat perspiciatis quibusdam consectetur enim. Impedit sapiente
              unde officiis nulla. Doloribus, velit libero in quae molestiae
              error voluptate magni deserunt fugit iure? Tempore neque
              recusandae autem cumque quo quas? Numquam temporibus cupiditate,
              doloremque maiores vitae possimus magnam laboriosam. Eveniet
              dolorem consequatur eos aliquid nulla aspernatur cum voluptatem
              rem quasi deleniti accusamus architecto, alias commodi, quaerat
              cupiditate.
            </p>
            <p className="desc second">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              quo mollitia beatae, quidem quis fugit temporibus consequuntur,
              architecto, aut veniam dolor laudantium obcaecati libero iusto.
              Distinctio, sint. Quisquam, asperiores est? Id, labore! Architecto
              id odit doloribus dolor at! Aliquam, doloribus itaque corrupti
              eaque asperiores tempore accusamus sapiente facilis minus veniam
              facere unde maxime possimus, est laborum. Eaque adipisci placeat
              unde atque dolorum ipsa voluptatibus nulla officiis error libero
              nobis magni possimus tenetur quaerat nihil facere, itaque odio!
              Nihil asperiores, neque vero, ipsa itaque minus placeat voluptas
              laboriosam obcaecati perferendis omnis, exercitationem illum
              voluptate ratione! Quas, ea laudantium sunt eum quidem libero
              laboriosam. Earum neque natus, illum explicabo fugit iusto quam.
              Error voluptate, molestias mollitia voluptatem alias quod rem nam
              aperiam eius quisquam, magnam ullam ex laborum iure porro eveniet,
              quaerat molestiae! Fugit blanditiis, quos pariatur consectetur
              eaque quaerat hic dolores, odio accusantium eum corrupti
              exercitationem nihil tempora assumenda corporis accusamus esse
              iste ea maxime repellat! Eos a, blanditiis rem ipsa modi adipisci,
              quaerat nisi, quam deleniti nemo delectus? Id explicabo dicta ex
              in earum porro asperiores nostrum eos? Unde, non. Aspernatur illum
              animi illo excepturi velit, dolorem tempora iusto eos, fugit quam
              enim nisi? Sunt omnis aspernatur nostrum suscipit sequi hic veniam
              asperiores debitis non veritatis obcaecati officia deleniti odio
              nisi qui illo doloremque, officiis vitae, sed rerum! Ipsa maxime
              nemo explicabo officia animi, corporis tenetur. Repellendus et
              sequi ullam nemo nulla aliquid eaque dolorem dolore! Atque,
              numquam dolores qui aliquid quasi ipsa repudiandae? Voluptas, odit
              officia. Aliquid iure amet consequuntur vel quasi corporis ullam
              illum mollitia labore cum, suscipit incidunt, modi quae error
              voluptate architecto id ex fuga! Aut enim dolores sed quibusdam.
              Minima qui assumenda veniam rem officia iusto distinctio. Vel
              inventore cum quos dolorum sit tenetur amet, necessitatibus
              quaerat excepturi nam aliquid culpa libero dolore numquam et rem
              veritatis quia, accusamus, optio ducimus eum quo quibusdam.
              Distinctio quibusdam blanditiis, officia quas minus sed in.
              Voluptatibus nobis voluptatem reprehenderit sed, voluptatum unde
              necessitatibus ut maiores eaque nam et temporibus facere. Libero
              tempore adipisci natus. Doloribus praesentium numquam consequuntur
              earum minus voluptatibus rerum beatae quasi velit at error aperiam
              sint, vel, provident nam laboriosam iste odio modi ullam nihil
              tempora recusandae natus est. Tempora officiis dolor mollitia
              illum ea enim praesentium excepturi culpa corrupti corporis,
              molestias sapiente a magni aliquid eos voluptatem quas nesciunt
              qui, harum reiciendis cumque voluptatum? Possimus earum ut
              mollitia magnam nulla ullam maiores eligendi corporis, itaque
              esse? Culpa consequuntur repellendus natus suscipit ducimus
              recusandae illo et dolores libero quae, eius deleniti optio
              aliquid nam aut vel cupiditate alias voluptatem aspernatur nemo
              rem itaque cum quaerat temporibus? Nisi laborum maxime perferendis
              ipsa debitis porro eveniet ipsam sapiente eius in aspernatur,
              fugiat perspiciatis quibusdam consectetur enim. Impedit sapiente
              unde officiis nulla. Doloribus, velit libero in quae molestiae
              error voluptate magni deserunt fugit iure? Tempore neque
              recusandae autem cumque quo quas? Numquam temporibus cupiditate,
              doloremque maiores vitae possimus magnam laboriosam. Eveniet
              dolorem consequatur eos aliquid nulla aspernatur cum voluptatem
              rem quasi deleniti accusamus architecto, alias commodi, quaerat
              cupiditate.
            </p>
          </div>
        </div>

        <div className="bottlecont2">
          <div className="my_container">
            <img src={orange} alt="orange" className="float orange" />
            <img
              src={coconoutleaf}
              alt="orange"
              className="float coconout_leaf"
            />
            <img src={fanta} alt="fanta" className="float fanta" />
            <img src={leaf2} alt="leaf" className="float leaf2" />

            {/* <img src={orange} alt="orange" className="orange" data-speed="0.5" />
            <img src={coconoutleaf} alt="orange" className="coconout_leaf" data-speed="1.1" />
            <img src={fanta} alt="fanta" className="fanta" data-speed="1.1" />
            <img src={leaf2} alt="leaf" className="leaf2"data-speed="1.5" /> */}
          </div>
        </div>

        <div className="bottle_container_1" ref={containerRef}>
          <div className="my_container">
            <div className="bottle_wrapper">
              <img src={bottle01} alt="bottle" className="bottle_img" />
              <img src={bottle01} alt="bottle" className="bottle_img" />
              <div className="bottle_scroll_wrapper">
                <img
                  ref={greenBottleRef}
                  src={bottle02}
                  alt="green bottle"
                  className={`bottle_img bottle_green`}
                  // className={`bottle_img bottle_green ${
                  //   isFixed ? "fixed" : "inside"
                  // }`}
                />
                <img
                  src={bottle01}
                  alt="bottle"
                  className="bottle_img"
                  style={{ opacity: "0", maxWidth: "100%" }}
                />
              </div>
              <img src={bottle01} alt="bottle" className="bottle_img" />
              <img src={bottle01} alt="bottle" className="bottle_img" />
            </div>
          </div>
        </div>

        <div className="my_container">
          <div className="flex_container third_fourth">
            <p className="desc third">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              quo mollitia beatae, quidem quis fugit temporibus consequuntur,
              architecto, aut veniam dolor laudantium obcaecati libero iusto.
              Distinctio, sint. Quisquam, asperiores est? Id, labore! Architecto
              id odit doloribus dolor at! Aliquam, doloribus itaque corrupti
              eaque asperiores tempore accusamus sapiente facilis minus veniam
              facere unde maxime possimus, est laborum. Eaque adipisci placeat
              unde atque dolorum ipsa voluptatibus nulla officiis error libero
              nobis magni possimus tenetur quaerat nihil facere, itaque odio!
              Nihil asperiores, neque vero, ipsa itaque minus placeat voluptas
              laboriosam obcaecati perferendis omnis, exercitationem illum
              voluptate ratione! Quas, ea laudantium sunt eum quidem libero
              laboriosam. Earum neque natus, illum explicabo fugit iusto quam.
              Error voluptate, molestias mollitia voluptatem alias quod rem nam
              aperiam eius quisquam, magnam ullam ex laborum iure porro eveniet,
              quaerat molestiae! Fugit blanditiis, quos pariatur consectetur
              eaque quaerat hic dolores, odio accusantium eum corrupti
              exercitationem nihil tempora assumenda corporis accusamus esse
              iste ea maxime repellat! Eos a, blanditiis rem ipsa modi adipisci,
              quaerat nisi, quam deleniti nemo delectus? Id explicabo dicta ex
              in earum porro asperiores nostrum eos? Unde, non. Aspernatur illum
              animi illo excepturi velit, dolorem tempora iusto eos, fugit quam
              enim nisi? Sunt omnis aspernatur nostrum suscipit sequi hic veniam
              asperiores debitis non veritatis obcaecati officia deleniti odio
              nisi qui illo doloremque, officiis vitae, sed rerum! Ipsa maxime
              nemo explicabo officia animi, corporis tenetur. Repellendus et
              sequi ullam nemo nulla aliquid eaque dolorem dolore! Atque,
              numquam dolores qui aliquid quasi ipsa repudiandae? Voluptas, odit
              officia. Aliquid iure amet consequuntur vel quasi corporis ullam
              illum mollitia labore cum, suscipit incidunt, modi quae error
              voluptate architecto id ex fuga! Aut enim dolores sed quibusdam.
              Minima qui assumenda veniam rem officia iusto distinctio. Vel
              inventore cum quos dolorum sit tenetur amet, necessitatibus
              quaerat excepturi nam aliquid culpa libero dolore numquam et rem
              veritatis quia, accusamus, optio ducimus eum quo quibusdam.
              Distinctio quibusdam blanditiis, officia quas minus sed in.
              Voluptatibus nobis voluptatem reprehenderit sed, voluptatum unde
              necessitatibus ut maiores eaque nam et temporibus facere. Libero
              tempore adipisci natus. Doloribus praesentium numquam consequuntur
              earum minus voluptatibus rerum beatae quasi velit at error aperiam
              sint, vel, provident nam laboriosam iste odio modi ullam nihil
              tempora recusandae natus est. Tempora officiis dolor mollitia
              illum ea enim praesentium excepturi culpa corrupti corporis,
              molestias sapiente a magni aliquid eos voluptatem quas nesciunt
              qui, harum reiciendis cumque voluptatum? Possimus earum ut
              mollitia magnam nulla ullam maiores eligendi corporis, itaque
              esse? Culpa consequuntur repellendus natus suscipit ducimus
              recusandae illo et dolores libero quae, eius deleniti optio
              aliquid nam aut vel cupiditate alias voluptatem aspernatur nemo
              rem itaque cum quaerat temporibus? Nisi laborum maxime perferendis
              ipsa debitis porro eveniet ipsam sapiente eius in aspernatur,
              fugiat perspiciatis quibusdam consectetur enim. Impedit sapiente
              unde officiis nulla. Doloribus, velit libero in quae molestiae
              error voluptate magni deserunt fugit iure? Tempore neque
              recusandae autem cumque quo quas? Numquam temporibus cupiditate,
              doloremque maiores vitae possimus magnam laboriosam. Eveniet
              dolorem consequatur eos aliquid nulla aspernatur cum voluptatem
              rem quasi deleniti accusamus architecto, alias commodi, quaerat
              cupiditate.
            </p>
            <p className="desc fourth">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              quo mollitia beatae, quidem quis fugit temporibus consequuntur,
              architecto, aut veniam dolor laudantium obcaecati libero iusto.
              Distinctio, sint. Quisquam, asperiores est? Id, labore! Architecto
              id odit doloribus dolor at! Aliquam, doloribus itaque corrupti
              eaque asperiores tempore accusamus sapiente facilis minus veniam
              facere unde maxime possimus, est laborum. Eaque adipisci placeat
              unde atque dolorum ipsa voluptatibus nulla officiis error libero
              nobis magni possimus tenetur quaerat nihil facere, itaque odio!
              Nihil asperiores, neque vero, ipsa itaque minus placeat voluptas
              laboriosam obcaecati perferendis omnis, exercitationem illum
              voluptate ratione! Quas, ea laudantium sunt eum quidem libero
              laboriosam. Earum neque natus, illum explicabo fugit iusto quam.
              Error voluptate, molestias mollitia voluptatem alias quod rem nam
              aperiam eius quisquam, magnam ullam ex laborum iure porro eveniet,
              quaerat molestiae! Fugit blanditiis, quos pariatur consectetur
              eaque quaerat hic dolores, odio accusantium eum corrupti
              exercitationem nihil tempora assumenda corporis accusamus esse
              iste ea maxime repellat! Eos a, blanditiis rem ipsa modi adipisci,
              quaerat nisi, quam deleniti nemo delectus? Id explicabo dicta ex
              in earum porro asperiores nostrum eos? Unde, non. Aspernatur illum
              animi illo excepturi velit, dolorem tempora iusto eos, fugit quam
              enim nisi? Sunt omnis aspernatur nostrum suscipit sequi hic veniam
              asperiores debitis non veritatis obcaecati officia deleniti odio
              nisi qui illo doloremque, officiis vitae, sed rerum! Ipsa maxime
              nemo explicabo officia animi, corporis tenetur. Repellendus et
              sequi ullam nemo nulla aliquid eaque dolorem dolore! Atque,
              numquam dolores qui aliquid quasi ipsa repudiandae? Voluptas, odit
              officia. Aliquid iure amet consequuntur vel quasi corporis ullam
              illum mollitia labore cum, suscipit incidunt, modi quae error
              voluptate architecto id ex fuga! Aut enim dolores sed quibusdam.
              Minima qui assumenda veniam rem officia iusto distinctio. Vel
              inventore cum quos dolorum sit tenetur amet, necessitatibus
              quaerat excepturi nam aliquid culpa libero dolore numquam et rem
              veritatis quia, accusamus, optio ducimus eum quo quibusdam.
              Distinctio quibusdam blanditiis, officia quas minus sed in.
              Voluptatibus nobis voluptatem reprehenderit sed, voluptatum unde
              necessitatibus ut maiores eaque nam et temporibus facere. Libero
              tempore adipisci natus. Doloribus praesentium numquam consequuntur
              earum minus voluptatibus rerum beatae quasi velit at error aperiam
              sint, vel, provident nam laboriosam iste odio modi ullam nihil
              tempora recusandae natus est. Tempora officiis dolor mollitia
              illum ea enim praesentium excepturi culpa corrupti corporis,
              molestias sapiente a magni aliquid eos voluptatem quas nesciunt
              qui, harum reiciendis cumque voluptatum? Possimus earum ut
              mollitia magnam nulla ullam maiores eligendi corporis, itaque
              esse? Culpa consequuntur repellendus natus suscipit ducimus
              recusandae illo et dolores libero quae, eius deleniti optio
              aliquid nam aut vel cupiditate alias voluptatem aspernatur nemo
              rem itaque cum quaerat temporibus? Nisi laborum maxime perferendis
              ipsa debitis porro eveniet ipsam sapiente eius in aspernatur,
              fugiat perspiciatis quibusdam consectetur enim. Impedit sapiente
              unde officiis nulla. Doloribus, velit libero in quae molestiae
              error voluptate magni deserunt fugit iure? Tempore neque
              recusandae autem cumque quo quas? Numquam temporibus cupiditate,
              doloremque maiores vitae possimus magnam laboriosam. Eveniet
              dolorem consequatur eos aliquid nulla aspernatur cum voluptatem
              rem quasi deleniti accusamus architecto, alias commodi, quaerat
              cupiditate.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RangoonMainV2;
