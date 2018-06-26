import React from 'react';

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
    padding: '0'
}

const ImageBunner = (props) => {
    let sectionStyle = {display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${props.imageURL})`,
        width: '100%',
        height: '768px',
        backgroundSize: 'cover'
    }
    return (<section style={sectionStyle} >
                <p style={textStyle} >Lorem ipsum amet.</p>
                <p style={textStyle} >Lorem ipsum dolor sit amet.</p>
            </section>)
}

export default ImageBunner;