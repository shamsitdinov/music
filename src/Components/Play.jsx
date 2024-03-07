import React, { useRef, useState } from "react";
import { GiMusicalNotes, GiPreviousButton } from "react-icons/gi";
import { GiPlayButton } from "react-icons/gi";
import { GiNextButton } from "react-icons/gi";
import styled from "styled-components";
import { GiPauseButton } from "react-icons/gi";

const Play = ({ songs, playing, setPlaying, currentSong }) => {
  const songRef = useRef();
  const [current, setCurrent] = useState();
  const [duration, setDuration] = useState();
  const playSongHandler = () => {
    if (playing) {
      songRef.current.play();
      setPlaying(!playing);
    } else {
      songRef.current.pause();
      setPlaying(!playing);
    }
  };

  const timeUpdate = (e) => {
    setCurrent(e.target.currentTime);
    setDuration(e.target.duration);
  };
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <PlayerContainer>
      <audio
        onLoadedMetadata={timeUpdate}
        onTimeUpdate={timeUpdate}
        ref={songRef}
        src={currentSong.audio}
      />
      <div className="duration">
        <span>{getTime(current)}</span>
        <input type="range" min="0" max={duration} value={current} />
        <span>{getTime(duration)} </span>
      </div>
      <div className="icons">
        <GiPreviousButton className="icon" />
        <span>
          {playing ? (
            <GiPlayButton onClick={playSongHandler} className="ico">
              <audio controls ref={songRef} src={currentSong.audio} />
            </GiPlayButton>
          ) : (
            <GiPauseButton onClick={playSongHandler} className="ico" />
          )}
        </span>
        <GiNextButton className="icon" />
      </div>
      <h1>Relax Time</h1>
    </PlayerContainer>
  );
};
const PlayerContainer = styled.div`
  .icons {
    font-size: 40px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon {
    cursor: pointer;
  }
  .ico {
    cursor: pointer;
    font-size: 60px;
    margin: 0 10px;
  }
  h1 {
    text-align: center;
    color: red;
    letter-spacing: 10px;
    text-transform: uppercase;
  }
`;
export default Play;
