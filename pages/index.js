import Head from 'next/head'
import "./style.css"
import Link from 'next/link'
import Card from '../components/Card'
import withData from '../lib/withData'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import {GraphQLClient} from 'graphql-request'



const Home = ({data:{loading,error,cards}}) => {
  if (error) return <h1>Error</h1>
  return(
  <div className="container">

    
      <Head>
        <title>LiSPEAKER</title>
        <link rel="icon" href="" />
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
      </Head>
      
      <main>
        <div className="navbar">
            <div className="navele"><Link a href='/circle'><a>Circle</a></Link></div>
            <div className="navele naveleyes">Theme</div>
        </div>
        <div className="cardscontainer bgwidth">
            <div className="newpreset">
              <div className="incardtitle">New Preset</div>
              <div className="icon"><i className="fa fa-cog"></i></div>
            </div>
            
            {
              loading ? <div>QWER</div>:
                cards.map(cards=>(
                  <Card title={cards.title} desc={cards.desc} state={cards.state} bg={cards.bg.url}/>
                ))
            }
                        
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
}

const cards = gql`
    query Myquery {
        cards(orderBy:createdAt_DESC ) {
          title
          desc
          state
          bg {
            url
          }
        }
    }`

export default withData(graphql(cards)(Home))

