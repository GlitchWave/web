import React from 'react';
import  VideoCover  from 'react-video-cover';

class VideoBanner extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            containerStyles: {
                width: '100%',
                height: '453.22px',
                overflow: 'hidden'
            },
            videoOptions: {
                src: this.props.staticLinks.videoLink,
                ref: videoRef => {
                    this.videoRef = videoRef;
                    this.setState({videoRef: videoRef});
                  },
                muted: true
            }
        }

        this.startVideo = this.startVideo.bind(this);
        this.pauseVideo = this.pauseVideo.bind(this);
    }

    startVideo() {
        this.videoRef.play();
    }

    pauseVideo() {
        this.videoRef.pause();
    }

    componentDidMount() {
        this.startVideo();
    }

    componentWillUnmount() {
        this.pauseVideo();
    }

    render() {
        return (
            <div style={this.state.containerStyles} >
                <VideoCover videoOptions={this.state.videoOptions} />
            </div>
        )
    }

}

export default VideoBanner;