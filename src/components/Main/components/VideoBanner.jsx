require('babel-polyfill');

import React from 'react';
import VideoCover from 'react-video-cover';

class VideoBanner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      containerStyles: {
        width: '100%',
        height: '453.22px',
        overflow: 'hidden'
      },
      videoOptions: undefined,
      videoRef: undefined
    };

    this.startVideo = this.startVideo.bind(this);
    this.pauseVideo = this.pauseVideo.bind(this);
    this.initPlayer = this.initPlayer.bind(this);
  }

  async initPlayer(func) {
    const videoOptions = {
      src: this.props.staticLinks.videoLink,
      ref: videoRef => {
        this.setState({ videoRef: videoRef });
      },
      muted: true
    };
    await this.setState({ videoOptions: videoOptions });
    func();
  }

  startVideo() {
    this.state.videoRef.play();
  }

  pauseVideo() {
    this.state.videoRef.pause();
  }

  componentDidMount() {
    this.initPlayer(this.startVideo);
  }

  componentWillUnmount() {
    this.pauseVideo();
  }

  render() {
    return (
      <div style={this.state.containerStyles}>
        <VideoCover videoOptions={this.state.videoOptions} />
      </div>
    );
  }
}

export default VideoBanner;
