import Link from 'next/link'
const Card = (props) => (
    <div className="themes" style={{backgroundImage: 'url('+props.bg+')'}}>
      <div className="carcon">
        <div className="editicon">􀎰</div>
        <div className="states">{props.state}</div>
      </div>
      <div className="themedes">
        <div className="incardtitle">{props.title}</div>
        <div className="destxt">{props.desc}</div>
        <div className="icon"><Link href='/edit'>􀈎</Link></div>
      </div>
    </div>
    )

export default Card    