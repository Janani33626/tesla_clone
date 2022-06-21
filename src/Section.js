import React from "react";
import styled from "styled-components";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";

function Section(props) {
  return (
    <Wrap bg={props.bgImage}>
      <ModelName>
        <h1>{props.title}</h1>
        <p> {props.tagline}</p>
      </ModelName>

      <CTA>
        <ButtonGroup>
          <Fade left>
            <LeftBtn> {props.leftBtn}</LeftBtn>
          </Fade>
          <Fade right>
            {props.rightBtn && <RightBtn> {props.rightBtn}</RightBtn>}
          </Fade>
        </ButtonGroup>
        {props.arrow && <Arrow src="teslaimages/down.svg_.png"></Arrow>}
      </CTA>
    </Wrap>
  );
}

const Wrap = styled.section`
  height: 100vh;
  background-image: url(teslaimages/${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;
const ModelName = styled.div`
  padding-top: 15vh;

  h1 {
    font-size: 3rem;
  }
`;
const CTA = styled.div``;
const ButtonGroup = styled.div`
  padding-bottom: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LeftBtn = styled.button`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: #fff;
  border: none;
  border-radius: 100px;
  font-size: 12px;
  opacity: 0.85;
  text-transform: uppercase;
  cursor: pointer;
  margin: 8px;
`;
const RightBtn = styled(LeftBtn)`
  background-color: #fff;
  color: #000;
`;
const Arrow = styled.img`
  height: 40px;
  animation: bounce infinite 2s;
`;

export default Section;
