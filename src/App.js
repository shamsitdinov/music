import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Components/Navbar";
import chillHop from "./data";
import Main from "./Components/Main";
import Play from "./Components/Play";
import styled from "styled-components";
import { ScaleLoader } from "react-spinners";
import Songs from "./Components/Songs";
import { Global } from "./Components/GlobalStyle";
import { IoIosCloseCircle } from "react-icons/io";
import { GiMusicalNotes } from "react-icons/gi";
const App = () => {
  const [songs, setSongs] = useState([]);
  const [disablet, setDisablet] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [loading, setLoading] = useState(true);
  const [currentSong, setCurentSong] = useState(chillHop[3]);
  const songRef = useRef();
  const override: CSSProperties = {
    margin: "150px 0",
  };

  setTimeout(() => {
    setLoading(false);
  }, 5000);
  useEffect(() => {
    setSongs(chillHop);
  }, []);

  const hideInput = () => {
    setDisablet(!disablet);
  };

  const playSongHandle = () => {
    if (playing) {
      songRef.current.play();
      setPlaying(!playing);
    } else {
      songRef.current.pause();
      setPlaying(!playing);
    }
  };

  return (
    <>
      <Container>
        <Global>
          <div className="btn" onClick={hideInput}>
            {disablet ? (
              <div className="num">
                <h6 className="hidee">
                  hide <GiMusicalNotes />
                </h6>
                <span>
                  <IoIosCloseCircle className="close" />
                </span>
              </div>
            ) : (
              <h6 className="hide">
                show <GiMusicalNotes />
              </h6>
            )}
          </div>
          <Navbar hideInput={hideInput} disablet={disablet} />
          <div className="text">
            {loading ? (
              <ScaleLoader size={150} cssOverride={override} color="#36d7b7" />
            ) : (
              <div>
                <Main songs={songs} currentSong={currentSong} />
                <Songs
                  setCurentSong={setCurentSong}
                  playSongHandle={playSongHandle}
                  // handleClik={handleClik}
                  currentSong={currentSong}
                  hideInput={hideInput}
                  songs={songs}
                  disablet={disablet}
                />
                <Play
                  currentSong={currentSong}
                  songs={songs}
                  playing={playing}
                  setPlaying={setPlaying}
                />
              </div>
            )}
          </div>
        </Global>
      </Container>
    </>
  );
};

const Container = styled.div`
  color: white;
  text-align: center;
  min-height: 100vh;
  background-color: #111;
  .close {
    right: 0;
    top: 0;
    color: red;
    font-size: 40px;
    position: absolute;
    z-index: 1;
  }
  .close {
    display: none;
  }
  .btn {
    margin: -10px 50% auto;
    text-align: center;
    width: 100px;
  }
  .hide {
    margin: 10px;
    color: white;
    padding: 15px 25px;
    border-radius: 5px;
    background-color: #4b4848;
  }
  .hidee {
    margin: 10px;
    color: white;
    padding: 15px 25px;
    border-radius: 5px;
    background-color: blue;
  }
  .text {
    border-radius: 50px;
    background: #ffffff;
    box-shadow: inset 20px 20px 60px #d9d9d9, inset -20px -20px 60px #ffffff;
    border-radius: 10px;
    height: 600px;
    width: 40%;
    margin: -50px auto;
    background-color: #1e1d1d;
  }

  @media screen and (max-width: 580px) {
    .show {
      width: 500px;
      height: 100vh;
      background-color: red;
      img {
        width: 100px;
        height: 100px;
      }
    }
    .text {
      width: 100%;
    }
    .shows {
      min-width: 400px;
      height: 100vh;
      background-color: beige;
      img {
        width: 100px;
        height: 100px;
      }
    }
    .close {
      display: block;
    }
    .hidee {
      display: none;
    }
  }

  @media screen and (min-width: 580px) {
    .show {
      width: 225px;
      height: 100vh;
      background-color: green;
      img {
        width: 100px;
        height: 100px;
      }
      .info {
        font-size: 10px;
        width: 10px;
      }
    }
    .text {
      width: 50%;
    }
    .close {
      display: none;
    }
    .shows {
      min-width: 225px;
      height: 100vh;
      background-color: green;
    }
  }

  @media screen and (min-width: 1080px) {
    .show {
      width: 400px;
      height: 100vh;
      background-color: yellow;
    }
    .text {
      width: 50%;
    }
    .close {
      display: none;
    }
    .shows {
      min-width: 400px;
      height: 100vh;
      background-color: green;
    }
  }
`;

export default App;
