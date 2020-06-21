import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Dashboard(props) {
  const [accessToken, setAccessToken] = useState('')
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    setAccessToken(window.location.href.match(/(?<=access_token=).*?(?=&)/)[0])
  }, [accessToken])

  useEffect(() => {
    if (accessToken) {
      const config = {
        headers: {
          'Authorization': 'Bearer ' + accessToken
        }
      }
      async function getUserInfo() {
        const response = await axios.get('https://api.spotify.com/v1/me', config)
        setUserInfo(response.data)
      }

      try {
        getUserInfo(); 
      } catch(err) {
        console.log(err)
      }
    }
  }, [accessToken])

  return (
    <>
      <h1>Dashboard - {userInfo.display_name || 'Please return to home and login'}</h1>
      <Link to="/home" >Home</Link>
    </>
  )
}
