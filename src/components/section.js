import {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import UseScrollPosition from '../hooks/use-scroll-position';

function calcBgBlur(screenPosYY) {
  const blur = Math.abs(7 + screenPosYY / 25) + 'px';
  // console.log("blur", blur);
  return blur;
}

function calcBgOpacity(screenPosYY) {
  const opacity =
    ((window.innerHeight - screenPosYY) / (window.innerHeight / 2)) * 50;
  // console.log("opacity", opacity);
  return opacity < 0 ? '0%' : opacity + '%';
}

function calcBgSize(screenPosYY) {
  const size =
    ((window.innerHeight - screenPosYY) / (window.innerHeight / 2)) * 50 + '%';
  // console.log("size", size);
  return size;
}

const SectionContainer = styled.div`
  position: relative;
  z-index: 10;
  margin: auto 100px;
  display: flex;
  height: 100vh;
  place-items: center;
  justify-content: space-around;

  @media (max-width: 940px) {
    flex-direction: column;
    justify-content: space-evenly;
  }

  > div:not(:last-child) {
    margin-right: 8px;
  }
`;

const BackgroundImage = styled.div.attrs((props) => ({
  style: {
    backgroundImage: `url(${props.url})`,
    filter: `opacity(${props.opacity})`,
    backgroundSize: 'cover',
    // filter: `blur(${props.blur}) opacity(${props.opacity})`,
    // backgroundSize: props.size,
  },
}))`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #34313c;
  background-position: center;
  background-repeat: no-repeat;
`;

function Section({url, ...rest}) {
  const elem = useRef();
  const [bgSize, setBgSize] = useState('');
  const [bgBlur, setBgBlur] = useState('');
  const [bgOpacity, setBgOpacity] = useState('');
  const scrollPos = UseScrollPosition();

  useEffect(() => {
    const sectionPosYY = elem.current.getBoundingClientRect().y;
    setBgSize(calcBgSize(sectionPosYY));
    setBgBlur(calcBgBlur(sectionPosYY));
    setBgOpacity(calcBgOpacity(sectionPosYY));
  }, [scrollPos]);

  return (
    <div>
      <BackgroundImage
        size={bgSize}
        blur={bgBlur}
        opacity={bgOpacity}
        url={url}
      />
      <SectionContainer ref={elem} {...rest} />
    </div>
  );
}

export default Section;
