import React from 'react'

function Analytics() {
    return (
        <>
           <p className="font-weight-bold display-5 text-capitalize text-center">analytics</p>
            <div className="d-flex justify-content-between p-3">
              <span>country  doughnut chart</span>
              <span>device  doughnut chart</span>
            </div>
            <p className="display-4">Total clicks : 5</p>
            <div>
              <button className="btn btn-danger">Delete link</button>
            </div> 
        </>
    )
}

export default Analytics
