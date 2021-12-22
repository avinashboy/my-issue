import React from 'react'

function ListData() {
    return (
        <div className="scroll">
            <div className="border_box mt-3">
              <a className="nav-link" style={{fontSize: "22px"}}>short link</a>
              <div className="d-flex justify-content-between p-3">
                <span>Total click : 5</span>
                <span>date</span>
              </div>
            </div>
        </div>
    )
}

export default ListData
