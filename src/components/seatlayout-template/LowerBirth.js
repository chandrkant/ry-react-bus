import React from 'react'

function LowerBirth(props) {

    return (
        <div>
            <div class="col-xs-12">
                <div class="<%=seat['css_1']%>" data-hover="<%=seat['hover_text']%>" data-seat="<%=seat.to_json%>" onclick="setSeat(<%=seat.to_json%>,this)">
                    <div class="<%=seat['css_2']%>">
                        <span class="<%=seat['span_1']%>"></span>
                        <span class="<%=seat['span_2']%>"></span>
                        <span class="<%=seat['span_3']%>"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LowerBirth
