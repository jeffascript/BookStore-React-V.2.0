import React, { Component } from 'react';
import SliderControl from "./SliderControl"
import Slide from "./Slide"


class Slider extends Component {
    // constructor(props) {
    //   super(props)
      
    //   this.state = { current: 0 }
    //    this.handlePreviousClick = this.handlePreviousClick.bind(this)
    //    this.handleNextClick = this.handleNextClick.bind(this)
    //    this.handleSlideClick = this.handleSlideClick.bind(this)
    // }
    
 state = { current: 0 ,

    slides: [
        {
          index: 0,
          headline: 'New Fashion Apparel',
          button: 'Shop now',
          src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
        },
        {
          index: 1,
          headline: 'In The Wilderness',
          button: 'Book travel',
          src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
        },
        {
          index: 2,
          headline: 'For Your Current Mood',
          button: 'Listen',
          src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
        },
        {
          index: 3,
          headline: 'Focus On The Writing',
          button: 'Get Focused',
          src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
        }
      ],
      heading: "Example Slider"

}



    handlePreviousClick() {
      const previous = this.state.current - 1
          
      this.setState({ 
        current: (previous < 0) 
          ? this.state.slides.length - 1
          : previous
      })
    }
    
    handleNextClick() {
      const next = this.state.current + 1;
      
      this.setState({ 
        current: (next === this.state.slides.length) 
          ? 0
          : next
      })
    }
    
    handleSlideClick(index) {
      if (this.state.current !== index) {
        this.setState({
          current: index
        })
      }
    }
  
    render() {
      const { current, direction } = this.state
      const { slides, heading } = this.state 
      const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`
      const wrapperTransform = {
        'transform': `translateX(-${current * (100 / slides.length)}%)`
      }
      
      return (
        <div className='slider' aria-labelledby={headingId}>
          <ul className="slider__wrapper" style={wrapperTransform}>
            <h3 id={headingId} class="visuallyhidden">{heading}</h3>
            
            {slides.map(slide => {
              return (
                <Slide
                  key={slide.index}
                  slide={slide}
                  current={current}
                  handleSlideClick={this.handleSlideClick}
                />
              )
            })}
          </ul>
          
          <div className="slider__controls">
            <SliderControl 
              type="previous"
              title="Go to previous slide"
              handleClick={this.handlePreviousClick}
            />
            
            <SliderControl 
              type="next"
              title="Go to next slide"
              handleClick={this.handleNextClick}
            />
          </div>
        </div>
      )
    }
  }

  export default Slider;