import React from "react";
import { GiMusicalNotes } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";
import styled from "styled-components";
const Navbar = ({ hideInput, disablet }) => {
  return (
    <Nav>
      <h1>Chill</h1>
      {/* <button onClick={hideInput}>
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
      </button> */}
    </Nav>
  );
};
const Nav = styled.nav`
  display: flex;
  color: white;
  height: 10vh;
  h1 {
    margin: 10px 30px;
    color: gold;
    letter-spacing: 20px;
    font-size: 35px;
  }
`;
export default Navbar;
