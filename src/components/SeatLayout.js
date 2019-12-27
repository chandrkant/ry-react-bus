import React, {useState}  from 'react'
import './dxtSeatLayout.scss'
import LowerBirth from './seatlayout-template/LowerBirth';
import UpperBirth from './seatlayout-template/UpperBirth'
export default function SeatLayout(props) {
    const [seats, setSeats] = useState([]);
    const parseSeatData = ()=>{
        props.seats.map((item,idx) =>(
            seats.push({row: "#{r}", column: "-1", zIndex: "0", length: "1",css_1: "_NO_SEAT_",css_2: "_HSH_",span_1: "_2CpW _1Zjt",span_2: "U6x5 _1Zjt",hover_text: ""})
        ))
    }
    return (
        <div id="dxt-seat-layout-cmp">
            <div className="l-grey seat-cls">
                <span>Close</span>
                <span className="black-txt font-xs pad-lft-5">
                    <img alt="" width="10px" src="https://images.railyatri.in/ry_images_prod/cross-close-1562062396.png" />
                </span>
            </div>
            <div className="col-xs-12 no-pad pad-bot-15">
                <div className="col-xs-7 no-padlt bus-seat-block">
                    {/* <LowerBirth seats = {props.seats.filter(item =>(item.zIndex ="0"))}/> */}
                    {/* <UpperBirth seats = {props.seats.filter(item =>(item.zIndex ="1"))}/> */}
                </div>
            </div>
        </div>
    )
}
