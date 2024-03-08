import React, { useRef } from "react";
import { GiMusicalNotes } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";
import styled from "styled-components";
import { motion } from "framer-motion";
const Songs = ({
  songs,
  setCurentSong,
  disablet,
  playSongHandle,
  // hideInput,
  handleclik,
}) => {
  const songRef = useRef();
  // const choosSong = () => {
  //   playSongHandle();
  //   setCurentSong(song);
  // };

  return (
    <>
      <Div>
        <div className={!disablet ? "shows" : "show"}>
          {songs.map((song, index) => (
            <div className="box" key={index}>
              <img src={song.cover} alt="" />
              <div className="info">
                <h2>{song.artist} </h2>
                <p>{song.name} </p>
              </div>
            </div>
          ))}
        </div>
      </Div>
    </>
  );
};

const Div = styled.div`
  .show {
    height: 100vh;
    gap: 5%;
    position: absolute;
    left: 0px;
    transition: all 1s linear;
    opacity: 1;
    overflow: auto;
    top: 0;
    flex-direction: column;
  }
  .text {
    width: 100vh;
  }
  .shows {
    gap: 5%;
    position: absolute;
    left: -200px;
    transition: all 1s linear;
    opacity: 0;
    overflow: auto;
    top: 0;
    flex-direction: column;
    height: 100vh;
  }
  img {
    border-radius: 50%;
    width: 150px;
  }
  .info {
    width: 200px;
  }
  .box {
    overflow: auto;
    padding: 10px 20px;
    display: flex;
    width: 100%;
    background-color: grey;
    margin: 10px 0;
  }
  .select {
    background-color: green;
    color: red;
  }

  ::-webkit-scrollbar-track {
    background-color: gray;
  }
  ::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 20px;
  }
  ::-webkit-scrollbar {
    width: 6px;
  }
`;

const Box = styled.div`
  background-color: red;
`;
export default Songs;
