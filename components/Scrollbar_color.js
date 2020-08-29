import Link from 'next/link'
import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import Brightness from '../components/Scrollbar_color2'




class Hue extends Component {
    constructor (props, context) {
      super(props, context)
      this.state = {
        value: 180
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
      //const csscache= "background: linear-gradient(90deg, hsl(" +value +"100%, 50%), rgba(255,255,255,1) 100%)"
      
 
      return (
        <div>
        <div className='slider'>
          <Slider
            min={0}
            max={259}
            value={value}
            onChangeStart={this.handleChangeStart}
            onChange={this.handleChange}
            onChangeComplete={this.handleChangeComplete}
          />
          
      <style jsx global>{`
        .slider .rangeslider {
          background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(107,252,0,1) 32%, rgba(0,255,239,1) 65%, rgba(201,0,255,1) 100%);

        }
        .slider .rangeslider__fill {
          display: none;
        }
      `}</style>
        
        </div>
        <div>
         {/* <Brightness hue={csscache}/>  */}
        </div>
        </div>
      )
    }
  }

  export default Hue