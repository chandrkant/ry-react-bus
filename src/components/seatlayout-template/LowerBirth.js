import React from 'react'

function LowerBirth(props) {
    let dynClassL =(seat) => {
        let json_data = {};
        let lady = "";
        if(seat.length ==='1'){
            if(seat.available==='false'){
                if(seat.width==='2'){
                    lady = seat.ladiesSeat==='false' ? "_HSH_2_ IlqM" : "_HSH_2_ pXg8";
                    json_data ={css_1: "_3AF7 tt-default hover-tt-top", css_2: `${lady}`,span_1: "_no_hd_",span_2: "_no_hd_",span_3: "_19QY _1Zjt"}
                }else{
                    lady = seat.ladiesSeat==='false' ? "_HSH_2_ IlqM" : "_HSH_2_ pXg8";
                    json_data ={css_1:"_3AF7 tt-default hover-tt-top" ,css_2: `${lady}`,span_1: "_2CpW _1Zjt",span_2: "U6x5 _1Zjt",span_3: "_19QY _1Zjt"}
                }
            }else{
                if(seat.width==='2'){
                    lady = seat.ladiesSeat==='false' ? "_HSH_2_" : "_HSH_2_ _39aI";
                    json_data ={css_1: "_3AF7 tt-default hover-tt-top", css_2: `${lady}`,span_1: "_no_hd_",span_2: "_no_hd_",span_3: "_19QY _1Zjt"}
                }else{
                    lady = seat.ladiesSeat==='false' ? "_HSH_" : "_HSH_ _39aI";
                    json_data ={css_1:"_3AF7 tt-default hover-tt-top" ,css_2: `${lady}`,span_1: "_2CpW _1Zjt",span_2: "U6x5 _1Zjt",span_3: "_19QY _1Zjt"}
                }
            }
        }else{
            if(seat.available==='false'){
                lady = seat.ladiesSeat==='false' ? "_HSH_sl IlqM" : "_HSH_sl pXg8";
                json_data ={css_1:"_3AF7 tt-default hover-tt-top" ,css_2: `${lady}`,span_1: "_no_hd_",span_2: "_no_hd_",span_3: "_19QY _1Zjt"}
                
            }else{
                lady = seat.ladiesSeat==='false' ? "_HSH_sl" : "_HSH_sl _39aI";
                json_data ={css_1:"_3AF7 tt-default hover-tt-top" ,css_2: `${lady}`,span_1: "_2CpW _1Zjt",span_2: "U6x5 _1Zjt",span_3: "_19QY _1Zjt"}
                
            }
        }
        let newObj = {...seat,...json_data}
        return newObj
    }
    return (
        <div id="lower">
            <div className="_21yR"></div>
            <div>
                <div className="_11ZK ZUCx">Lower</div>
            </div>
            <div className="seats_row">
                {
                    props.rows.map(r => (
                        <div className="col-xs-12" key={r}>
                            {
                                props.seats.filter(itm => itm.row === r).map(seat => (
                                    <div className = {dynClassL(seat).css_1} data-hover="hover_text" data-seat={JSON.stringify(seat)} key={seat.name}>
                                        <div className={dynClassL(seat).css_2}>
                                            {/* {seat.name} */}
                                            <span className={dynClassL(seat).span_1}></span>
                                            <span className={dynClassL(seat).span_2}></span>
                                            <span className={dynClassL(seat).span_2}></span>
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

export default LowerBirth
