import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { Flex, Text, Box } from 'rebass'
import TokenContext from '../contexts/access-token';
import Tracks from './tracks';

export default function Dashboard(props) {
  const [userInfo, setUserInfo] = useState({})
  const {accessToken, setAccessToken} = useContext(TokenContext)

  useEffect(() => {
    setAccessToken(window.location.href.match(/(?<=access_token=).*?(?=&)/)[0])
  }, [accessToken, setAccessToken])

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
      } catch (err) {
        console.log(err)
      }
    }
  }, [accessToken])

  return (
    <>
      <Flex
        sx={{
          p: 2,
          color: 'text',
          bg: 'background',
        }}
        alignItems='center'>
        <Text sx={{p: 2, color: 'text', fontWeight: 'heading'}}>Dashboard</Text>
        <Box mx='auto' />
        <Link to="/home">
        <Text sx={{p: 2, color: 'text', fontWeight: 'heading','&:hover': {
            color: 'secondary'
          }}}>{userInfo.display_name || 'Please return to home and login'}</Text>
        </Link>
      </Flex>
      <Tracks/>
    </>
  )
}
