import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { MoreAboutSection } from "./moreAboutSection";
import { ReviewsSection } from "./reviewsSection";
import { ServicesSection } from "./servicesSection";
import { TopSection } from "./topSection";
import { SocialIcon } from "react-social-icons";


import ImgMediaCard from './cards';
// import ImgMediaCards from './cards2';
import ImgMediaCard3 from './cards3';
import ImgMediaCard4 from './cards4';

import ImgMediaCard5 from './cards5';
// import ImgMediaCards from './cards2';
import ImgMediaCard6 from './cards6';
import ImgMediaCard7 from './cards7';

import ImgMediaCard8 from './place1';
import ImgMediaCard9 from './place2';
import ImgMediaCard10 from './place3';


import './cs.css'

import "./index.css"

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export function Homepage(props) {
  return (
    <PageContainer>
      {/* <SocialIcon className='SocialIcon' url="https://jaketrent.com" network="wechat" /> */}
      <TopSection />
      <ServicesSection />
      <Marginer direction="vertical" margin="2em" />
      {/* <ReviewsSection /> */}
      <h1>Checkout Some Intersting Workshops</h1>

      <div className="ca">
      <ImgMediaCard/>
      <ImgMediaCard3/>
      <ImgMediaCard4/>
      </div>

      <div className="ca">
      <ImgMediaCard5/>
      <ImgMediaCard6/>
      <ImgMediaCard7/>
      </div>

      <h1>Upcoming Placement Offers</h1>

      <div className="ca">
      <ImgMediaCard8/>
      <ImgMediaCard9/>
      <ImgMediaCard10/>
      </div>
      <MoreAboutSection />
      <Marginer direction="vertical" margin="8em" />
      <Footer />
    </PageContainer>
  );
}
