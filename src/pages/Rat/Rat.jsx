import "./Rat.scss";
import Header from "../../components/Header/Header";

const Rat = () => {
  return (
    <>
      <Header />
      <section className="rat_playlist_sec1">
        <div className="yt_wrapper">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/videoseries?si=HRrcjKSV7VVDUPIh&amp;list=PLVkFiLwHlEIU5pTC6GxYzicF1jwTpmKeC"
            //   src="https://www.youtube.com/embed/jG9UINbKzLA?autoplay=1&mute=1&controls=1&loop=1&playlist=jG9UINbKzLA&si=V7GA5mFZGrcSLw8r"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            //   referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          {/* <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/videoseries?list=PLVkFiLwHlEIU5pTC6GxYzicF1jwTpmKeC"
            title="YouTube Playlist"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
        </div>
      </section>
    </>
  );
};

export default Rat;
