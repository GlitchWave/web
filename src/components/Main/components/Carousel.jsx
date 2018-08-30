/*import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel = (props) => {
    let slidesToRender;

    if(props.type === 'IMAGES') {
        slidesToRender = props.sourceObjects.map((obj, i) => {
            return (
                <Slide index={i} key={i} ><img src={obj.src}/></Slide>
            );
        });

        return (
            <div className="CarouselMain" style={{width: '500px', height: '250px', backgroundColor: 'red'}}>
                <CarouselProvider
                  naturalSlideWidth={100}
                  naturalSlideHeight={125}
                  totalSlides={3}
                  >
                    <Slider style={{height: '250px'}} >
                        {slidesToRender}
                    </Slider>
                    <ButtonBack>Back</ButtonBack>
                    <ButtonNext>Next</ButtonNext>
                </CarouselProvider>
            </div>
        );
    } else if (props.type === 'TEXT') {
        slidesToRender = props.sourceObjects.map((obj, i) => {
            return (
                <Slide index={i} key={i} >{obj.text}</Slide>
            )
        });
        
        return (
            <div className="CarouselMain" style={{width: '500px', height: '250px', backgroundColor: 'red'}}>
                <CarouselProvider
                  naturalSlideWidth={100}
                  naturalSlideHeight={125}
                  totalSlides={3}
                  >
                    <Slider style={{height: '250px'}} >
                        {slidesToRender}
                    </Slider>
                    <ButtonBack>Back</ButtonBack>
                    <ButtonNext>Next</ButtonNext>
                </CarouselProvider>
            </div>
        );
    } else {
        return (
            <div>
                ! Property 'type' of props is not correct. !
            </div>
        )
    }
}

export default Carousel;*/
