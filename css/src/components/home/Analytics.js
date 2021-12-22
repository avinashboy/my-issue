import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

function Analytics() {

  const charData = {
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ]
    }],
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
  };

    return (
        <>
           <p className="font-weight-bold display-5 text-capitalize text-center">analytics</p>
            <div className="">
              <div className='doughutSize text-center'>
              <p className='text-center lead display-6'>country</p>
                <Doughnut data={charData} />
                </div>
              <div className='doughutSize text-center'>
              <p className='text-center lead display-6'>device</p>
                <Doughnut data={charData} />
                </div>
            </div>
            <p className="display-4">Total clicks : 5</p>
            <div>
              <button className="btn btn-danger">Delete link</button>
            </div> 
        </>
    )
}

export default Analytics
