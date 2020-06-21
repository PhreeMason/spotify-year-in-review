import React from 'react';

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
      <h1>Login</h1>
      <div>
        <button onClick={login}>login</button>
      </div>
    </>
  )
}
