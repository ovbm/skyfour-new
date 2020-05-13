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
        <Col md={6} offset={{ md: 3 }}>
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
                  Das Fest war ein voller Erfolg und Skyfour haben das einfach
                  super toll gemacht! Wir haben rundum Komplimente wegen der
                  Band erhalten, denn nicht nur der Gesang und die Musik waren
                  wunderschön, sondern auch die Bandmitglieder mega symphatisch.
                  Nochmals ein riesengrosses Dankeschön.
                </Testemonial>
                <Quelle>Leda und Andrea</Quelle>
              </SSlide>
              <SSlide index={2}>
                <Testemonial>
                  Wir möchten Euch ein grosses Kompliment machen und uns bei
                  euch herzlich für die musikalische Begleitung unserer Hochzeit
                  bedanken. Ihr wart eine grosse Bereicherung für unseren
                  wichtigen Tag und habt sowohl bei der Zeremonie als auch beim
                  Festen für die passende Stimmung gesorgt! Ihr wart die Krönung
                  unserer Party!
                </Testemonial>
                <Quelle>Monika und Quan</Quelle>
              </SSlide>
              <SSlide index={3}>
                <Testemonial>
                  Wir möchten uns nochmals ganz herzlich bei Skyfour bedanken.
                  Eure Musik hat unser Fest zu dem gemacht was es war. Es war
                  einfach wunderschön!
                </Testemonial>
                <Quelle>Katherine und Silvio</Quelle>
              </SSlide>
              <SSlide index={4}>
                <Testemonial>
                  Unser Tag war absolut der Hammer. Von A-Z, Also auch S wie
                  Skyfour. Die Musik war toll, genau so wie wir es uns
                  vorgestellt hatten: Eine coole Jazz Band die im Hintergrund
                  Atmosphäre macht. Wir werden euch gerne weiterempfehlen.
                </Testemonial>
                <Quelle>Jeannine und Mike</Quelle>
              </SSlide>
              <SSlide index={5}>
                <Testemonial>
                  Wir möchten euch ganz herzlich danken. Ihr habt ganz viel zur
                  ausgelassenen und tollen Stimmung beigetragen. Eure Musik
                  erreichte unsere Herzen total. Und nicht nur unsere.....wir
                  bekamen viele schöne Feedbacks von unseren Gästen. Die Band
                  war einfach der HAMMER. Schön seit ihr dabei gewesen.
                </Testemonial>
                <Quelle>Diana und Philip</Quelle>
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
