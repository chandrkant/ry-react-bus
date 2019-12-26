import React from 'react'

export default function SeatLayout(props) {
    return (
        <div>
            <div className="col-xs-12 no-pad pad-bot-15">
                <div className="col-xs-7 no-padlt bus-seat-block">
                 {props.seat}
                </div>
            </div>
        </div>
    )
}
