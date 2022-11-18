import React from 'react'
import { useState } from 'react'

const SystemInfo = () => {
    let [info, setInfo] = useState({
        os : "",
        platform : "",
        browser : {}
    })

    const getSysInfo = (event)=>{

        setInfo({...info,os:event.view.clientInformation.userAgentData.platform, platform:event.view.clientInformation.platform, browser:event.view.clientInformation.userAgentData.brands[0] })
        console.log(event)
    }

  return (
    <>
      <div className="container mt-5">
        <div className="row">
            <div className="col-md-5">
                <div className="card">
                    <div className="card-header bg-dark text-white text-center">
                        <h1>Machine Info</h1>
                    </div>
                    <div className="card-body bg-">
                        <ul className="list-group">
                            <li className="list-group-item"><strong>OS Name : </strong>{info.os} </li>
                            <li className="list-group-item"><strong>Platform Name : </strong>{info.platform} </li>
                            <li className="list-group-item"><strong>Browser Name : </strong>{info.browser.brand}</li>
                            <li className="list-group-item"><strong>Browser Version : </strong>{info.browser.version}</li>
                        </ul>
                        <button onClick={getSysInfo} className='btn btn-warning mt-4'>Fetch Info</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default SystemInfo
