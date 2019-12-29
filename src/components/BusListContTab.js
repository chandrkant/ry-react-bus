import React, { useState,useRef } from 'react'
import Amenities from './Amenities'
import SeatLayout from './SeatLayout'

export default function BusListContTab(props) {
    const [amenity, setAmenity] = useState([]);
    const childRef = useRef();
    const getAmenities = async (id, pid) => {
        const amenData = await fetch(`https://food1.railyatri.in/get-bus-amenities.json?trip_id=${id}&provider_id=${pid}`)
        const jsonAmenData = await amenData.json();
        setAmenity(jsonAmenData.amenities);

    }

    
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
                    <a href={`#seat-selct-${props.item.id}`} role="tab" data-toggle="tab" className="bus-seats" onClick={() => childRef.current.getSeatLayout(props.item.id, props.item.operator_id)}>Select Seats</a>
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
                    <div className="col-xs-12 no-pad pad-bot-15">
                        <SeatLayout  ref={childRef} />
                    </div>
                    
                </div>

            </div>
        </div>
    )
}
