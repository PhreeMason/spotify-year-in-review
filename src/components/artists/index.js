import React, { useState, useContext } from 'react';
import TokenContext from '../../contexts/access-token';
import axios from 'axios'
import { Button } from 'rebass'
import { Tiles } from '@rebass/layout';
import ArtistCover from './ArtistCover'

export default function Artists(props) {
  const [artists, setArtists] = useState([])
  const { accessToken } = useContext(TokenContext)

  const getArtists = async () => {
    const artists = await axios.get('https://api.spotify.com/v1/me/top/artists', {
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    })
    setArtists(artists.data.items)
  }

  return (
    <>
      <Button variant='outline' onClick={getArtists} mr={2}>Get Top Artists</Button>
      <Tiles columns={[2, 4, 6]}>
        {artists.map(artist => {
          return <ArtistCover key={artist.id} image={artist.images[0].url} title={artist.name} />
        })}
      </Tiles>
    </>
  )
}