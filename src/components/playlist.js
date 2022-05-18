import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Fileplayer from 'react-player/lib/players/FilePlayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

import '../utils/range.scss';
import theme from '../utils/themeconstants';

const playlist = [
  {
    name: "You'd be so nice (Jazzband)",
    url: 'skyfour-2022-you-d-be-so-nice.mp3',
    type: 'audio/mp3',
  },
  {
    name: 'Chega de Saudade (Bossa)',
    url: 'skyfour-2022-chega-de-saudade.mp3',
    type: 'audio/mp3',
  },
  {
    name: 'Happy - Pharell Williams (Pop)',
    url: 'skyfour-2022-happy.mp3',
    type: 'audio/mp3',
  },
  {
    name: 'Don\'t Stop Now - Dua Lipa (Pop)',
    url: 'skyfour-2022-dont-start-now.mp3',
    type: 'audio/mp3',
  },
  {
    name: 'I wish (R&B)',
    url: 'skyfour-2022-I-wish.mp3',
    type: 'audio/mp3',
  },
  {
    name: 'Shape of You (Pop)',
    url: 'skyfour-2022-shape-of-you.mp3',
    type: 'audio/mp3',
  },
  {
    name: 'Everything (Jazz Trio)',
    url: 'skyfour-2022-everything.mp3',
    type: 'audio/mp3',
  },
  {
    name: 'All of Me (Duo, Hochzeitsballade)',
    url: 'skyfour-2022-all-of-me.mp3',
    type: 'audio/mp3',
  },
  {
    name: 'What a Difference a Day Made (Background Duo)',
    url: 'skyfour-2022-what-a-diffrence-a-day-made.mp3',
    type: 'audio/mp3',
  },
];

const Samples = () => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [loaded, setLoaded] = useState(0);
  const [url, setUrl] = useState(null);
  const [firstplay, setFirstplay] = useState(true);
  const reactPlayer = useRef(null);

  const handleSeekMouseUp = (e) => {
    setSeeking(true);
    reactPlayer.current.seekTo(parseFloat(e.target.value));
  };

  useEffect(() => {
    if (playing) {
      trackCustomEvent({
        category: 'audio',
      });
    }
  }, [playing]);

  const handleProgress = (progress) => {
    if (!seeking) {
      setLoaded(progress.loaded);
      setPlayed(progress.played);
    }
  };

  return (
    <Container>
      <Fileplayer
        ref={reactPlayer}
        playing={playing}
        volume={volume}
        width={0}
        height={0}
        controls={false}
        loop={false}
        onProgress={handleProgress}
        progressInterval={500}
        url={[{ src: url, type: 'audio/mp3' }]}
      />
      <Player>
        <div className="playbutton">
          <PlayPause
            onClick={() => {
              if (firstplay) {
                setFirstplay(false);
                setUrl(playlist[0].url);
                setPlaying(!playing);
              } else {
                setPlaying(!playing);
              }
            }}
            color="white"
            icon={playing ? faPause : faPlay}
          />
        </div>
        <Seeker>
          <input
            style={{ backgroundColor: 'transparent', outline: '0 !important' }}
            type="range"
            min={0}
            max={0.999999}
            step="any"
            value={played}
            onMouseDown={() => setSeeking(true)}
            onChange={(e) => setPlayed(parseFloat(e.target.value))}
            onMouseUp={handleSeekMouseUp}
          />
          <progress
            max={1}
            value={loaded}
          />
        </Seeker>
      </Player>
      <Playlist>
        {playlist.map((item) => (
          <li key={item.name}>
            <PlaylistItem
              type="button"
              onClick={() => {
                setLoaded(0);
                setPlayed(0);
                setUrl(item.url);
                setPlaying(true);
              }}
            >
              {url === item.url && (
                <PlayDot
                  onClick={() => setPlaying(!playing)}
                  color="rgba(255,255,255,0.8)"
                  icon={faCircle}
                />
              )}
              {item.name}
            </PlaylistItem>
          </li>
        ))}
      </Playlist>
    </Container>
  );
};

export default Samples;

const Container = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;
  margin: 1em;
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    margin: 0;
    padding: 0.5em;
  }
`;

const Player = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1em;
`;

const Playlist = styled.ul`
  list-style-type: none;
  margin: 0;
`;

const PlaylistItem = styled.button`
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  color: white;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
`;

const PlayPause = styled(FontAwesomeIcon)`
  cursor: pointer;
  font-size: 2em !important;
  margin-right: 1em;
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    font-size: 2em !important;
  }
`;

const PlayDot = styled(FontAwesomeIcon)`
  font-size: 1em;
  margin-right: 1em !important;
  @media only screen and (max-width: ${theme.dim.mobilebreakpoint}px) {
    font-size: 0.75em !important;
  }
`;

const Seeker = styled.div`
  width: 100%;
`;
