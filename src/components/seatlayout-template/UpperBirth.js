import React from 'react'

function UpperBirth(props) {
    return (
        <div id="upper">
            <div>
                <div className="_11ZK ZUCx">Upper</div>
            </div>
            <div className="seats_row">
                {
                    props.rows.map(r => (
                        <div className="col-xs-12" key={r}>
                           {
                                (props.seats[parseInt(r)] || []).map(seat => (
                                    <div className = {seat.css_1} data-hover="hover_text" data-seat={JSON.stringify(seat)} key={seat.name}>
                                        <div className={seat.css_2}>
                                            {seat.name}
                                            <span className={seat.span_1}></span>
                                            <span className={seat.span_2}></span>
                                            <span className={seat.span_2}></span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default UpperBirth
