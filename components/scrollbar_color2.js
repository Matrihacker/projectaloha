import Link from 'next/link'
import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class Brightness extends Component {
    constructor (props, context) {
      super(props, context)
      this.state = {
        value: 45
      }
    }
  
    handleChangeStart = () => {
      console.log('Change event started')
    };
  
    handleChange = value => {
      this.setState({
        value: value
      })
    };
  
    handleChangeComplete = () => {
      console.log('Change event completed')
    };
  
    render () {
      const { value } = this.state
      //const stylehue = "`.slider .rangeslider {"+this.props.hue+"}`"
      
      return (
        <div className='slider2' styles={this.props.hue}>
          <Slider
            min={0}
            max={259}
            value={value}
            onChangeStart={this.handleChangeStart}
            onChange={this.handleChange}
            onChangeComplete={this.handleChangeComplete}
          />
          
        <style jsx global>{

        `
        .slider2 .rangeslider{
          background: linear-gradient(90deg, rgba(63,194,255,1) 0%, rgba(255,255,255,1) 100%);

        }
        .slider2 .rangeslider__fill {
          display: none;
        }
      `}</style>

        </div>
        
      )
    }
  }

  export default Brightness