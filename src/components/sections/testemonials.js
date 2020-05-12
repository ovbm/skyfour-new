import React from 'react';
import { Container as GridContainer, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Section from '../section';

const Testemonials = () => {
  return (
    <Section>
      <GridContainer>
        <h2
          style={{
            width: '100%',
            margin: '0 auto 1.5em auto',
            textAlign: 'center',
          }}
        >
          Kunden-Feedback
        </h2>
        <Col md={6} offset={{md: 3}}>
          <CarouselProvider
            isIntrinsicHeight
            infinite
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={6}
            isPlaying
            interval={7000}
          >
            <Slider style={{ marginBottom: '1.5em' }}>
              <SSlide index={0}>
                <Testemonial>
                  Wir hatten am Samstag sozusagen die Party unseres Lebens und
                  eure Musik war grosse Klasse. Die Gäste waren begeistert.
                  Vielen Dank!
                </Testemonial>
                <Quelle>Silvia und Robert</Quelle>
              </SSlide>
              <SSlide index={1}>
                <Testemonial>
                  Wir hatten am Samstag sozusagen die Party unseres Lebens und
                  eure Musik war grosse Klasse. Die Gäste waren begeistert.
                  Vielen Dank!
                </Testemonial>
                <Quelle>Silvia und Robert</Quelle>
              </SSlide>
              <SSlide index={2}>
                <Testemonial>
                  Wir hatten am Samstag sozusagen die Party unseres Lebens und
                  eure Musik war grosse Klasse. Die Gäste waren begeistert.
                  Vielen Dank!
                </Testemonial>
                <Quelle>Silvia und Robert</Quelle>
              </SSlide>
              <SSlide index={3}>
                <Testemonial>
                  Wir hatten am Samstag sozusagen die Party unseres Lebens und
                  eure Musik war grosse Klasse. Die Gäste waren begeistert.
                  Vielen Dank!
                </Testemonial>
                <Quelle>Silvia und Robert</Quelle>
              </SSlide>
              <SSlide index={4}>
                <Testemonial>
                  Wir hatten am Samstag sozusagen die Party unseres Lebens und
                  eure Musik war grosse Klasse. Die Gäste waren begeistert.
                  Vielen Dank!
                </Testemonial>
                <Quelle>Silvia und Robert</Quelle>
              </SSlide>
              <SSlide index={5}>
                <Testemonial>
                  Wir hatten am Samstag sozusagen die Party unseres Lebens und
                  eure Musik war grosse Klasse. Die Gäste waren begeistert.
                  Vielen Dank!
                </Testemonial>
                <Quelle>Silvia und Robert</Quelle>
              </SSlide>
            </Slider>
            <SDotGroup />
          </CarouselProvider>
        </Col>
      </GridContainer>
    </Section>
  );
};

export default Testemonials;

const SSlide = styled(Slide)`
  height: 220px;
`;

const SDotGroup = styled(DotGroup)`
  display: flex;
  justify-content: center;
  .carousel__dot {
    width: 8px;
    height: 8px;
    padding: 0;
    margin: 0 6px;
    border-radius: 6px;
    border: none;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .carousel__dot--selected {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Testemonial = styled.p`
  font-style: italic;
  font-size: 1em;
  font-weight: 400;
  text-align: center;
`;

const Quelle = styled.p`
  font-size: 0.75em;
  font-weight: 400;
  text-align: center;
`;
