import React, { useState, useContext } from 'react';
import TokenContext from '../../contexts/access-token';
import axios from 'axios'
import { Button } from 'rebass'
import {Tiles} from '@rebass/layout';
import TrackCover from './TrackCover'

export default function Tracks(props) {
  const [tracks, setTracks] = useState([])
  const { accessToken } = useContext(TokenContext)

  const getTracks = async () => {
    const tracks = await axios.get('https://api.spotify.com/v1/me/top/tracks', {
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    })
    setTracks(tracks.data.items)
  }
  
  return (
    <>
    <Button variant='outline' onClick={getTracks} mr={2}>Get Top Tracks</Button>
    <Tiles columns={[2, 4, 6]}>
      {tracks.map(track => {
        return <TrackCover key={track.id} title={track.name} image={track.album.images[1]} artists={track.artists} />
      })}
    </Tiles>
    </>
  )
}