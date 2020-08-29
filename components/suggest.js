
import Link from 'next/link'
function refreshPage(){ 
    window.location.reload(); 
}
const Sgst = (props) => (
<div className="suggestionmodule">

                <a>Suggestion</a>
                <div className="timeadbt">
                    <div className="suggestedtime">{props.sgtime}Hrs</div>
                    <div className="adapticon" onClick={ refreshPage }>Adapt</div>
                </div>
                <div className="timesuggest">
                        <div>{props.strttime}:00</div>
                        <div>-</div>
                        <div >{props.edtime}:00</div>
                    </div>
            </div>
)

export default Sgst

