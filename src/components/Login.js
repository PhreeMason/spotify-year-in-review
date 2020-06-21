import React from 'react';
import { Box, Heading, Text, Button} from 'rebass';

const client_id = process.env.REACT_APP_CLIENT_ID;
const redirect_uri = 'http://localhost:3000/dashboard';
const scopes = [
  'user-read-private',
  'user-read-email',
  'user-top-read',
  'user-read-playback-position',
  'user-read-recently-played',
  'user-library-read',
  'user-read-playback-state',
  'user-read-currently-playing',
  'playlist-read-collaborative',
].join(' ');

const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirect_uri)}`

export default function (props) {

  const login = async () => {
    window.location.assign(url)
  }

  return (
    <>
      <Box
        sx={{
          p: 4,
          color: 'text',
          bg: 'background',
          fontFamily: 'body',
          fontWeight: 'body',
          lineHeight: 'body',
        }}>
        <Heading variant='display'>Login</Heading>
        <Text mb={4}>You need to grant access from spotify to use this app</Text>
        <Button mr={3} onClick={login}>
          Login with Spotify
        </Button>
      </Box>
    </>
  )
}
