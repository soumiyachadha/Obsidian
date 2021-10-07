import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SectionTitle } from "../../components/sectionTitle";

import AboutImgUrl from "../../assets/illustrations/books.svg";

const MoreAboutContainer = styled(Element)`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;

  @media screen and (max-width: 480px) {
    max-width: 100%;
    flex-direction: column-reverse;
  }
`;

const AboutText = styled.p`
  font-size: 21px;
  color: #2f2f2f;
  font-weight: normal;
  line-height: 1.4;
`;

const AboutImg = styled.img`
  width: 550px;
  height: 450px;
  margin-left: 3rem;

  @media screen and (max-width: 480px) {
    width: 370px;
    height: 290px;
    margin-left: 0;
  }
`;

export function MoreAboutSection(props) {
  return (
    <MoreAboutContainer>
      <SectionTitle>More About Obsidian</SectionTitle>
      <AboutContainer>
        <AboutText>
        Obsidian is a college placement networking app that aims to provide an interactive space for students, where they are updated with new opportunities in their field, and all the stuff going around college! {<br />}
          {<br />} It's a place where they can meet like minded people to share their thoughts and views, and obtain knowledge about their topic of interest.{" "}
          {<br />}
          {<br />} The one stop solution to all queries related to placement opportunities, handled directly by the staff!
        </AboutText>
        <AboutImg src={AboutImgUrl} />
      </AboutContainer>
    </MoreAboutContainer>
  );
}
