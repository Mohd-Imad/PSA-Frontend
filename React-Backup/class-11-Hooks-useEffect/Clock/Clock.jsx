import React from "react";

const Clock = ()=>{
    let [date, setDate] = React.useState(new Date().toLocaleDateString())
    let [time, setTime] = React.useState(new Date().toLocaleTimeString())
    React.useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        },1000)
    },[])    
    return <>
    <pre>Date : {JSON.stringify(date)}</pre>
    <pre>Digital Time : {JSON.stringify(time)}</pre>
    <div className="container">
        <div className="row">
            <div className="col-md-3">
                <div className="card">
                    <div className="card-header bg-danger text-white text-center">
                        <h3>Date and Time</h3>
                    </div>
                    <div className="card-body text-center">Date : <b>{date}</b></div>
                    <div className="card-body text-center">Time : <b>{time}</b></div>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default Clock