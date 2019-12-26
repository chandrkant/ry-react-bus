import React,{useState,useEffect} from "react"
import './bus-list.css'
import BusListContTab from "./BusListContTab";
function ListItem(props) {
  const [busItem, setBusItem ] = useState({})
  const [items, setItems ] = useState([])
  const busList =  async() => {
    const data = await fetch('https://food1.railyatri.in//redbus/get-available-trips.json?source=1005922&destination=1005692&doj=31-12-2019&device_type_id=6&is_new_reduce_basefare=1&user_id=-1577326896')
    const busData =  await data.json()
    await props.setBusItem(busData)
    await setItems(busData.availableTrips)

  }
  useEffect(()=>{
    busList();
  },[])
return(
    <div id="dxt-bus-list-comp">
        {
            items.map(item => (
                <div className="col-xs-12 no-pad marg-top-25 bus-list-card" key={item.id}>
                    <div className="clearfix"></div>

                        <div className='bus-list-cont'>
                            <ul className="col-xs-12 no-pad pad-top-5 pad-bot-5">
                                <li className="bus-list-cont_list list-col1">
                                    <h2>{item.travels}</h2>
                                    <div className="marg-top-15 bus-list-cont_list seat-list">
                                      {
                                        item.bus_tags.map((tag) => (
                                            <span key={`${tag}-${item.id}`}>{tag}</span>
                                        ))
                                      }
                                    </div>
                                </li>
                                <li className="text center bus-list-cont_list list-col2">
                                    <p className="black-txt no-marg">
                                        {item.departureTime}
                                    </p>
                                    <p className="fs9 text-right l-grey no-marg">
                                        {item.durationTime}
                                    </p>
                                    <p className="l-grey">
                                        {item.arrivalTime}
                                    </p>
                                </li>
                                <li className="bus-list-cont_list list-col4">
                                    <p className="d-grey">{item.boardingTimes[0].bpName} </p>
                                    <p className="fs10 l-grey" > {item.boardingTimes.length} more Boarding Points</p>
                                </li>
                                <li className="text-right bus-list-cont_list list-col5">
                                    {
                                        item.fareDetails.map(fare => (
                                            <p key={fare.baseFare}>
                                                <span className="l-grey bus-orgprice">
                                                <span className="strikethrough">₹{
                                                    fare.baseFare
                                                }</span></span>
                                                <span>₹{
                                                    fare.baseFare-item.auto_apply_coupon.max_discount-item.ry_cashback_amount
                                                }</span>
                                            </p>
                                        ))
                                    }

                                </li>
                            </ul>
                            <div className="clearfix"></div>
                            <div className="row">
                              <BusListContTab item={item}/>

                            </div>
                        </div>


                </div>
            ))

        }
    </div>

)
}
export default ListItem