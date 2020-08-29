import {
    CircularInput,
    CircularTrack,
    CircularProgress,
    CircularThumb
} from 'react-circular-input'
import Sgst from '../components/suggest'
import "../pages/style.css"

function Circlering () {
    
    const [value, setValue] = React.useState(0.36)
    const range = [0, 24]

    return (
        <div>
        <div className="ringcenter">
            <div className="times">
                    <div className="bed">
                        <div className="indicator">Bedtime</div>
                        <div className="time">12:00</div>
                    </div>
                    <div className="wake">
                        <div className="indicator">Wake Up</div>
                        <div className="time">{Math.floor( value *100/4-1)}:00</div>
                    </div>
            </div>
            <div className="inmidle">
                <p className="hour">{Math.floor( value *100/4-1)}</p><p className="hr">Hrs</p>
            </div>
            <CircularInput value={value} onChange={setValue} className="circ">
                

                <CircularTrack />
                <CircularProgress fill="none"/>
                <CircularThumb fill="rgb(0, 107, 247)"/>

                
            </CircularInput>
        </div>

        <Sgst sgtime={"8"} strttime="0" edtime={Math.floor( value *100/4-1)}/>
        </div>
    )
        
   
}


export default Circlering