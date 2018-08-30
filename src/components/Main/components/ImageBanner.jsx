require('./ImageBanner.scss');
import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

const textStyle = {
  fontFamily: 'Quicksand',
  fontSize: '48px',
  fontWeight: 'normal',
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'center',
  color: '#ffffff',
  margin: '0',
  padding: '0',
  position: 'relative',
  zIndex: '99'
};

const ImageBunner = () => {
  return (
    <ParallaxBanner
      className="image-banner"
      layers={[
        {
          image: 'https://image.ibb.co/bsnnN8/main_banner_03.png',
          amount: 0.14,
          slowerScrollRate: false
        }
      ]}
      style={{ height: '768px' }}
    >
      <p style={textStyle}>Your brilliant ideas in perfect balance</p>
      <p style={textStyle}>with our experience.</p>
    </ParallaxBanner>
  );
};

export default ImageBunner;
