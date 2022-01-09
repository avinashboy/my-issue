import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { Short } from "../../context";
import moment from "moment";
Chart.register(ArcElement);

function Analytics({ id }) {
  console.log("id:", id);
  const { data } = useContext(Short);
  const filterInfo = data.linksInfo.filter((f) => {
    return f.id === id;
  })[0];
  console.log("filterInfo:", filterInfo);
  // const charData = []
  const charData = {
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
      },
    ],
    labels: ["Red", "Blue", "Yellow"],
  };
  // console.log(
  //   Object.values(
  //     filterInfo?.metadata.country ? filterInfo?.metadata.country : null
  //   )
  // );
  // const charData = {
  //   datasets: [
  //     {
  //       data: Object.values(filterInfo?.metadata.country),
  //       backgroundColor: Object.values(filterInfo?.metadata.country).map((e) =>
  //         randomColor()
  //       ),
  //     },
  //   ],
  //   labels: Object.keys(filterInfo?.metadata.country),
  // };

  const handleDelete = () => {
    const id = filterInfo?.id ? filterInfo?.id : undefined;
    console.log("id:", id);
    if (!id) return;
    console.log("okay delete");
  };

  return (
    <>
      <p className='font-weight-bold display-5 text-capitalize text-center'>
        analytics
      </p>
      <div className='d-flex justify-content-between'>
        <div>{filterInfo?.short ? filterInfo?.short : "None"}</div>
        <div>{moment(filterInfo?.metadata.created).format("L")}</div>
      </div>
      <div className='add_flex_prop'>
        <div className='doughutSize'>
          <p className='text-center lead display-6'>country</p>
          <Doughnut data={charData} />
        </div>
        <div className='doughutSize'>
          <p className='text-center lead display-6'>device</p>
          <Doughnut data={charData} />
        </div>
      </div>
      <p className='display-4'>Total clicks : {filterInfo?.metadata.count}</p>
      <div>
        <button className='btn btn-danger' onClick={handleDelete}>
          Delete link
        </button>
      </div>
    </>
  );
}

export default Analytics;
