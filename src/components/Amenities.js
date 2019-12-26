import React from 'react'

export default function Amenities(props) {
    return (
        <div className="">
            <h4 className="marg-top-35 black-txt">Amenities</h4>
            <div className="col-xs-12 no-pad amen-list-scrl">
            {
                props.amenity.map((item,idx) => (
                <div className={idx%2===0 ? "col-xs-5 no-padlt amen-list" : "col-xs-5 col-xs-offset-1 no-padlt amen-list"} key={`${item.amenities_name}+${props.tripId}`}>
                    <div className="col-xs-2 no-padlt">
                        <p className="no-marg black-txt">
                            <img src={item.amenities_img_url} alt="" width="25px" height="25px"
                            />
                        </p>
                    </div>
                    <div className="col-xs-10 no-padlt">
                        <p className="no-marg black-txt">
                        {item.amenities_name}
                        </p>
                    </div>
                </div>
                ))
            }

            </div>
        </div >
    )
}
