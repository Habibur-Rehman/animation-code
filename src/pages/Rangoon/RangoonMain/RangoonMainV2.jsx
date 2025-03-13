import "./rangoonMain.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { bottle01, bottle02 } from "../../../source";
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
          start: "107% 30%",
          end: "115% 70%",
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

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

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
          <div className="flex_container">
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
