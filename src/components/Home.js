import React, { useContext, useEffect, useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AuthChecking from "./common/AuthChecking";
import Analytics from "./home/Analytics";
import CreateLink from "./home/CreateLink";
import ListData from "./home/ListData";
import { Short } from "../context";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [getId,setGetId] = useState("")
  console.log('getId:', getId)

  const { data, setData } = useContext(Short);

  const showUp = (message, isError = false) => {
    if (isError) {
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const getListLink = async ()=>{
    const headers = { Authorization: `Bearer ${data.authToken}` };
    await axios
      .get(`${data.appURL}short`, { headers })
      .then((res) => {
        console.log('res:', res)
        setData({...data, linksInfo:res.data})
      })
      .catch((err) => {
        showUp("something went wrong");
      });
  }

  // const memoAnalytics = useMemo(()=>{return <Analytics />}, [getId])

  useEffect(()=>{
    getListLink()
  },[])


  return (
    <>
    <ToastContainer/>
      <AuthChecking />
      <Container fluid className='mt-5'>
        <Row className='d-flex justify-content-center'>
          <Col className='showme justify-content-md-center' xs lg='2'>
            <h3>Create link</h3>
          </Col>
          <CreateLink getListLink={getListLink} />
        </Row>
        <Container className='mt-5 show_list_link mb-5 '>
          <div className='showme scroll show_list_link_info flex-inner p-2'>
            <ListData setGetId={setGetId}/>
          </div>
          <div className='showme flex-inner p-2'>
            <Analytics id={getId}/>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default Home;
