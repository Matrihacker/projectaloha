import Head from 'next/head'
import "./style.css"
import Link from 'next/link'
import Sgst from '../components/suggest'
import Circlering from '../components/circletest'

const Circle = ({value}) => (
    <div className="container">
  
      
        <Head>
          <title>LiSPEAKER</title>
          <link rel="icon" href="" />
          <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
        </Head>
        
        <main>
        <div className="navbar">
            <div className="navele naveleyes">Circle</div>
            <div className="navele"><Link a href='/index'><a>Theme</a></Link></div>
        </div>
        <div className='bgwidth'>
                <Circlering></Circlering>
                
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
  
  export default Circle