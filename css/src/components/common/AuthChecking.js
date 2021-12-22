import React, {useContext} from 'react'
import { Short } from "../../context";
import  { Navigate as Redirect, useNavigate } from 'react-router-dom'


function AuthChecking() {
    const {data } = useContext(Short);
    if(!data.authToken) {
        console.log("okay")
        return <Redirect to='/login'  />
    }
    return ""
}

export default AuthChecking
