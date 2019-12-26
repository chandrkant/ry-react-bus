import React,{useState} from 'react'
import Amenities from './Amenities'
import $ from 'jquery'
export default function BusListContTab(props) {
    const [amenity, setAmenity ] = useState([]);
    const [seat, setSeat ] = useState('')

    const getAmenities =async(id,pid) =>{
        const amenData = await fetch(`https://food1.railyatri.in/get-bus-amenities.json?trip_id=${id}&provider_id=${pid}`)
        const jsonAmenData = await amenData.json();
        setAmenity(jsonAmenData.amenities);         

    }
    const getSeatLayout = async(id,op_id) => {
        const setLayout = await fetch(`https://www.railyatri.in/bus-seat-layout?trip_id=${id}&no_of_passengers=1&operator_id=${op_id}&v_code=176&device_type_id=6&provider_id=5&is_new_reduce_basefare=1&user_id=-1577091648`)
        await setLayout.text().then(function (text) {
            $(`#dext-seat-layout-${id}`).html(text);
        })
         
    }
    return (
        <div className="col-xs-12 no-pad bus-list-cont_tab">
            {props.item.rating && <span className="ry-scr font-xs"><span> {props.item.rating} </span><span>RY Score</span></span> }
            <ul role="tablist" className="nav nav-tabs">
                <li role="presentation">
                    <a href={`#bus-ament-${props.item.id}`}  role="tab" data-toggle="tab" onClick={() => getAmenities(props.item.id,props.item.provider_id)}>Amenities</a>
                </li>
                <li role="presentation">
                    <a href={`#loc-point-${props.item.id}`}  role="tab" data-toggle="tab">Boarding/Dropping points</a>
                </li>
                <li role="presentation">
                    <a href={`#cnxl-bus-${props.item.id}`}  role="tab" data-toggle="tab">Cancellation Policy</a>
                </li>
                <li role="presentation">
                    <a href={`#seat-selct-${props.item.id}`}  role="tab" data-toggle="tab" className="bus-seats" onClick={()=>getSeatLayout(props.item.id,props.item.operator_id)}>Select Seats</a>
                </li>
            </ul>
            <div className="clearfix"></div>
            <div className="col-xs-12 bgclr-wht tab-content">
                <div role="tabpanel" id={`bus-ament-${props.item.id}`} className="tab-pane amen-selct">
                    <Amenities amenity ={amenity} tripId = {props.item.id}/>
                </div>
                <div role="tabpanel" id={`loc-point-${props.item.id}`} className="tab-pane amen-selct">
                    sdfsdfsdf

                </div>
                <div role="tabpanel" id={`cnxl-bus-${props.item.id}`} className="tab-pane amen-selct">
                    dsadsad

                </div>
                <div role="tabpanel" id={`seat-selct-${props.item.id}`} className="tab-pane amen-selct">
                   
                    <div className="col-xs-12 no-pad pad-bot-15">
                        <div id={`dext-seat-layout-${props.item.id}`} className="col-xs-7 no-padlt bus-seat-block">
                           
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
