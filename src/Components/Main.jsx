import { m, useTime, useTransform } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const Main = ({ songs,currentSong }) => {
  const time = useTime();
  const rotate = useTransform(time, [0, 10000], [0, 360], { clamp: false });

  return (
    <MainContainer>
      <motion.img style={{ rotate }} src={currentSong.cover} alt="" srcset="" />
      <h4>{currentSong.artist}</h4>
      <p>{currentSong.name}</p>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  text-align: center;
  color: white;
  img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
  }
  p {
    margin: 15px 0;
  }
`;

export default Main;
