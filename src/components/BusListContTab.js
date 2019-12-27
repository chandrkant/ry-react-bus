import React, { useState } from 'react'
import Amenities from './Amenities'
import SeatLayout from './SeatLayout'

export default function BusListContTab(props) {
    const [amenity, setAmenity] = useState([]);
    const [seatData, setSeatData] = useState({});
    const getAmenities = async (id, pid) => {
        const amenData = await fetch(`https://food1.railyatri.in/get-bus-amenities.json?trip_id=${id}&provider_id=${pid}`)
        const jsonAmenData = await amenData.json();
        setAmenity(jsonAmenData.amenities);

    }
    const getSeatLayout = async (id, op_id) => {
        const setLayout = await fetch(`https://food1.railyatri.in/redbus/get-trip-details?trip_id=${id}&no_of_passengers=1&operator_id=${op_id}&v_code=176&device_type_id=4&provider_id=5&is_new_reduce_basefare=1&request_src=mweb&user_id=598`)
        await setLayout.json().then(function (data) {
            // $(`#dext-seat-layout-${id}`).html(text);
            debugger
            let lower = props.seats.filter(item => item.zIndex==="0")
            let upper = props.seats.filter(item => item.zIndex==="1")
            // setSeatData(data.trip_details);
        })

    }
    const getMaxRow = data=> data.map(item => item.row).sort()
    const uniqueArray = array=>[[...new Set(array)]]
    
    return (
        <div className="col-xs-12 no-pad bus-list-cont_tab">
            {props.item.rating && <span className="ry-scr font-xs"><span> {props.item.rating} </span><span>RY Score</span></span>}
            <ul role="tablist" className="nav nav-tabs">
                <li role="presentation">
                    <a href={`#bus-ament-${props.item.id}`} role="tab" data-toggle="tab" onClick={() => getAmenities(props.item.id, props.item.provider_id)}>Amenities</a>
                </li>
                <li role="presentation">
                    <a href={`#loc-point-${props.item.id}`} role="tab" data-toggle="tab">Boarding/Dropping points</a>
                </li>
                <li role="presentation">
                    <a href={`#cnxl-bus-${props.item.id}`} role="tab" data-toggle="tab">Cancellation Policy</a>
                </li>
                <li role="presentation">
                    <a href={`#seat-selct-${props.item.id}`} role="tab" data-toggle="tab" className="bus-seats" onClick={() => getSeatLayout(props.item.id, props.item.operator_id)}>Select Seats</a>
                </li>
            </ul>
            <div className="clearfix"></div>
            <div className="col-xs-12 bgclr-wht tab-content">
                <div role="tabpanel" id={`bus-ament-${props.item.id}`} className="tab-pane amen-selct">
                    <Amenities amenity={amenity} tripId={props.item.id} />
                </div>
                <div role="tabpanel" id={`loc-point-${props.item.id}`} className="tab-pane amen-selct">
                    sdfsdfsdf

                </div>

                <div role="tabpanel" id={`cnxl-bus-${props.item.id}`} className="tab-pane amen-selct">
                    dsadsad

                </div>

                <div role="tabpanel" id={`seat-selct-${props.item.id}`} className="tab-pane amen-selct">
                    <SeatLayout seatData = {seatData} />
                </div>

            </div>
        </div>
    )
}
