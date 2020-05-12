import React, { useState, useRef, useEffect } from 'react';
import { Container as GridContainer } from 'react-grid-system';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

import '../utils/range.scss';

const playlist = [
  {
    name: "You'd be so nice (Jazz)",
    url: 'Youd-be-so-nice.mp3',
    type: 'audio/mp3',
  },
  {
    name: 'Chega de Saudade (Bossa)',
    url: 'Chega-De-Saudade.mp3',
    type: 'audio/mp3',
  },
  {
    name: 'Happy - Pharell Williams (Pop)',
    url: 'Happy.mp3',
    type: 'audio/mp3',
  },
  {
    name: 'Cheap Thrills - Sia (Pop)',
    url: 'Cheap-Thrills.mp3',
    type: 'audio/mp3',
  },
  {
    name: 'I wish (R&B)',
    url: 'I-wish.mp3',
    type: 'audio/mp3',
  },
  {
    name: 'Shape of You (Pop)',
    url: 'Shape-of-you.mp3',
    type: 'audio/mp3',
  },
  {
    name: 'Golden (R&B)',
    url: 'Golden.mp3',
    type: 'audio/mp3',
  },
  {
    name: 'Call me Maybe (Pop)',
    url: '01-Call-me-maybe.mp3',
    type: 'audio/mp3',
  },
  {
    name: 'Everything (Jazz Trio)',
    url: 'Everything.mp3',
    type: 'audio/mp3',
  },
  {
    name: 'Endless Stars (Duo)',
    url: 'Endless-Stars.mp3',
    type: 'audio/mp3',
  },
];

const Samples = () => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [url, setUrl] = useState(playlist[0].url);

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

  return (
    <Container>
      <ReactPlayer
        ref={reactPlayer}
        playing={playing}
        volume={volume}
        width={0}
        height={0}
        controls={false}
        loop={false}
        config={{
          file: {
            forceAudio: true,
          },
        }}
        url={[{ src: url, type: 'audio/mp3' }]}
      />
      <Player>
        <div className="playbutton">
          <PlayPause
            onClick={() => setPlaying(!playing)}
            size="2x"
            color="white"
            icon={playing ? faPause : faPlay}
          />
        </div>
        <Seeker>
          {/* <Progress
            percent={played * 100}
            strokeColor="white"
            showInfo={false}
          /> */}
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
        </Seeker>
      </Player>
      <Playlist>
        {playlist.map((item) => (
          <li key={item.name}>
            {url === item.url && (
              <PlayPause
                onClick={() => setPlaying(!playing)}
                size="xs"
                color="rgba(255,255,255,0.8)"
                icon={faCircle}
              />
            )}
            <PlaylistItem
              type="button"
              onClick={() => {
                setUrl(item.url);
                setPlayed(0);
                setPlaying(true);
              }}
            >
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
  border-radius: 2em;
  margin: 1em;
  backdrop-filter: blur(20px) brightness(80%);
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
`;

const PlayPause = styled(FontAwesomeIcon)`
  cursor: pointer;
  font-size: 4em;
  margin-right: 1em;
`;

const Seeker = styled.div`
  width: 100%;
`;
