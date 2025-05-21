import React, { useState } from "react";
import "./reactPlayer.scss";
import ReactPlayer from "react-player/youtube";

const YouTubeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="reactplayer_container">
        <button className="open-btn" onClick={() => setIsOpen(true)}>
          Watch Video
        </button>

        {isOpen && (
          <div className="modal-overlay" onClick={() => setIsOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=6yuryPyIra4&feature=youtu.be"
                //   url={[{ src: videoSrc, type: `video/${videoType}` }]}
                controls
                playing
                width="100%"
                height="100%"
                playsinline
                config={{
                  file: {
                    attributes: {
                      preload: "auto",
                    },
                  },
                }}
              />
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                ✖
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default YouTubeModal;
