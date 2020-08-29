import Head from 'next/head'
import "./style.css"
import Link from 'next/link'
import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import styled from 'styled-components'
import Hue from '../components/Scrollbar_color'
import Brightness from '../components/Scrollbar_color2'




const Edit = () => (

    <div className="container">
      
      
        <Head>
          <title>LiSPEAKER</title>
          <link rel="icon" href="" />
          <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
        </Head>
        
        <main className="speco">
        <div className="navbar">
            
            <div className="navele naveleyes">Lights</div>
            <div className="navele"><Link a href='/index'><a>Sounds</a></Link></div>
            <div className="back"><Link a href='/index'><a>􀆉</a></Link></div>
        </div>
        <div className="spot"></div>
        <div className="spot2"></div>
        <div className='bgwidth'>
            
            <div className="editingcard">
                <div className="titile_edit">LiSPEAKER 15</div>
                <div className="carcon_edit">
                    <div className="states">Done</div>
                </div>
                <div className="ctn1">Add / Delete Light</div>
                <div className="icon_edit"><a>􀅼</a></div>
                <div className="icon2_edit"><a>􀅽</a></div>
                <div className="ctn2">Color Temperature</div>
                <Hue/>
                {/* <div className="colorselect"></div> 
                <div className="colorbar"></div>*/}
                <div className="ctn3">Color Brightness</div>
                <Brightness/>
                {/* <div className="brtnsbar"></div>
                <div className="brtnsselect"></div> */}
                
                
           
            </div>
        </div>
        
        
      </main>
  
        <footer>
  
        </footer>
  
      <style jsx>{`
        
      `}</style>
  
      <style jsx global>{`
        
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
      `}</style>
    </div>
  )
  
  export default Edit