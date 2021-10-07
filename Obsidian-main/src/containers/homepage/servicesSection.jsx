import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import ReactPlayer from 'react-player'
import { Marginer } from "../../components/marginer";
import { OurSerivce } from "../../components/ourService";
import { SectionTitle } from "../../components/sectionTitle";

import Service1Img from "../../assets/illustrations/web_development_.png";
import Service2Img from "../../assets/illustrations/mobile_phone.png";
import Service3Img from "../../assets/illustrations/bug_fixed.png";

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  color: white;
  background-color: #6930c3;
`;

export function ServicesSection(props) {
  return (
    <ServicesContainer name="servicesSection">
      <h1>Checkout Our Technical Fest</h1>
      <ReactPlayer controls url='https://www.youtube.com/watch?v=uVhktAJeJjs' playing={true} muted={true}/>
    </ServicesContainer>
  );
}
