import React, { useState, forwardRef, useImperativeHandle } from 'react'
import axois from 'axios'
import './dxtSeatLayout.scss'
import LowerBirth from './seatlayout-template/LowerBirth';
import UpperBirth from './seatlayout-template/UpperBirth'
const SeatLayout = forwardRef((props, ref) => {
    const [lowerSeats, setlowerSeats] = useState([]);
    const [upperSeats, setUpperSeats] = useState([]);
    const [seats, setSeats] = useState([]);
    const [tripDetails, setTripDetails] = useState({});
    const [lowerrows, setLowerrows] = useState([]);
    const [upperrows, setUpperrows] = useState([]);

    useImperativeHandle(ref, () => ({
        getSeatLayout(id, op_id) {
            axois.get(`https://food1.railyatri.in/redbus/get-trip-details?trip_id=${id}&no_of_passengers=1&operator_id=${op_id}&v_code=176&device_type_id=4&provider_id=5&is_new_reduce_basefare=1&request_src=mweb&user_id=598`).then((res) => {
                const data = res.data;
                setSeats(data.trip_details.seats);
                setTripDetails(data.trip_details)
                parseSeatData(data.trip_details.seats)
            })
        }
    }))

    const parseSeatData = (seats) => {
        let lower = seats.filter(item => item.zIndex === "0")
        let upper = seats.filter(item => item.zIndex === "1")
        setlowerSeats(fillMissRowOrCol(lower))
        setUpperSeats(fillMissRowOrCol(upper))
        let mxrL = getMaxbyKey(lower, 'row');
        let mxrU = getMaxbyKey(upper, 'row');
        let fillArrayByMisL = [...Array(mxrL + 1)].map((_, i) => `${i++}`)
        setLowerrows(fillArrayByMisL)
        let fillArrayByMisU = [...Array(mxrU + 1)].map((_, i) => `${i++}`)
        setUpperrows(fillArrayByMisU)
    }

    const getMaxbyKey = (data, key) => Math.max(...data.map(item => item[key]))
    const getMinbyKey = (data, key) => Math.min(...data.map(item => item[key]))
    const uniqueArrayByKey = (array, key) => [...new Set(array.map(item => item[key]))]

    const fillMissRowOrCol = (array) => {
        let mxr = getMaxbyKey(array, 'row');
        let unAr = uniqueArrayByKey(array, 'row')
        let fillArrayByMis = [...Array(mxr + 1)].map((_, i) => `${i++}`)
        let row = {}
        // fillArrayByMis.map(v => {
        //     if (unAr.indexOf(v) === -1) {
        //         array.push({ row: v, column: "-1", zIndex: "0", length: "1", css_1: "_NO_SEAT_", css_2: "_HSH_", span_1: "_2CpW _1Zjt", span_2: "U6x5 _1Zjt", hover_text: "" })
        //     }
        // })
        // setLowerrows(fillArrayByMis)
        unAr = unAr.sort()
        unAr.map(r => {
            let cRow = array.filter(itm => itm.row === r)
            let unArCl = uniqueArrayByKey(cRow, 'column')
            row[r] = []
            if (cRow.length === 0) {
                row[r].push({ row: r, column: "-1", zIndex: "0", length: "1", css_1: "_NO_SEAT_", css_2: "_HSH_", span_1: "_2CpW _1Zjt", span_2: "U6x5 _1Zjt", hover_text: "" })
            } else {
                let el = 1;
                let minCl = getMinbyKey(cRow, 'column');
                let maxCl = getMaxbyKey(cRow, 'column');
                let columArray = [...Array(parseInt(minCl) + 1)].map((_, i) => i === 0 ? `${el * (-1)}` : `${-1}`)
                let newColArray = [...columArray, ...unArCl].sort();
                let isLgSeat = array.filter(seat => seat.length === "2")
                let altrArray = [];
                for (var i = parseInt(minCl); i <= parseInt(maxCl); i++) {
                    altrArray.push(`${i}`);
                }
                let tmp = []
                if (altrArray.length > newColArray && isLgSeat.length === 0) {
                    tmp = altrArray.filter(itm => !newColArray.includes(itm))
                    tmp.map(i => newColArray.splice(i, 0, -1))
                }
                newColArray.map(col => {
                    if(col<0){
                        if(col>-2){
                            row[r].push({column: "-1", zIndex: "0", length: "1",css_1: "_NO_SEAT_",css_2: "_HSH_",span_1: "_2CpW _1Zjt",span_2: "U6x5 _1Zjt",hover_text: ""})
                        }else{
                            row[r].push({column: "-1", zIndex: "0", length: "1",css_1: "_NO_SEAT_",css_2: "_HSH_sl", span_1: "_no_hd_", span_2: "_no_hd_", hover_text: ""})
                        }
                    }else{
                        let cCSdata = cRow.filter(item => item.column===col)[0]
                        row[r].push(dynClass(cCSdata))
                    }

                })
            }

        })

        console.log('====================================');
        console.log(row);
        console.log('====================================');
        return row
    }
    const dynClass = (seat) => {
        let json_data = {};
        let lady = "";
        if (seat.length === '1') {
            if (seat.available === 'false') {
                if (seat.width === '2') {
                    lady = seat.ladiesSeat === 'false' ? "_HSH_2_ IlqM" : "_HSH_2_ pXg8";
                    json_data = { css_1: "_3AF7 tt-default hover-tt-top", css_2: `${lady}`, span_1: "_no_hd_", span_2: "_no_hd_", span_3: "_19QY _1Zjt" }
                } else {
                    lady = seat.ladiesSeat === 'false' ? "_HSH_2_ IlqM" : "_HSH_2_ pXg8";
                    json_data = { css_1: "_3AF7 tt-default hover-tt-top", css_2: `${lady}`, span_1: "_2CpW _1Zjt", span_2: "U6x5 _1Zjt", span_3: "_19QY _1Zjt" }
                }
            } else {
                if (seat.width === '2') {
                    lady = seat.ladiesSeat === 'false' ? "_HSH_2_" : "_HSH_2_ _39aI";
                    json_data = { css_1: "_3AF7 tt-default hover-tt-top", css_2: `${lady}`, span_1: "_no_hd_", span_2: "_no_hd_", span_3: "_19QY _1Zjt" }
                } else {
                    lady = seat.ladiesSeat === 'false' ? "_HSH_" : "_HSH_ _39aI";
                    json_data = { css_1: "_3AF7 tt-default hover-tt-top", css_2: `${lady}`, span_1: "_2CpW _1Zjt", span_2: "U6x5 _1Zjt", span_3: "_19QY _1Zjt" }
                }
            }
        } else {
            if (seat.available === 'false') {
                lady = seat.ladiesSeat === 'false' ? "_HSH_sl IlqM" : "_HSH_sl pXg8";
                json_data = { css_1: "_3AF7 tt-default hover-tt-top", css_2: `${lady}`, span_1: "_no_hd_", span_2: "_no_hd_", span_3: "_19QY _1Zjt" }

            } else {
                lady = seat.ladiesSeat === 'false' ? "_HSH_sl" : "_HSH_sl _39aI";
                json_data = { css_1: "_3AF7 tt-default hover-tt-top", css_2: `${lady}`, span_1: "_2CpW _1Zjt", span_2: "U6x5 _1Zjt", span_3: "_19QY _1Zjt" }

            }
        }
        let newObj = { ...seat, ...json_data }
        return newObj
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

                    <LowerBirth seats={lowerSeats} rows={lowerrows} />

                    <UpperBirth seats={upperSeats} rows={upperrows} />

                </div>
            </div>
        </div>
    )

})

export default SeatLayout;

