import React, { useState, useContext } from 'react';
import TokenContext from '../../contexts/access-token';
import axios from 'axios'
import { Button } from 'rebass'
import {Tiles} from '@rebass/layout';
import AlbumCover from './AlbumCover'

export default function Albums(props) {
  const [albums, setAlbums] = useState([])
  const { accessToken } = useContext(TokenContext)

  const getAlbums = async () => {
    const albums = await axios.get('https://api.spotify.com	/v1/albums', {
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    })
    setAlbums(albums.data.items)
  }
  
  return (
    <>
    <Button variant='outline' onClick={getAlbums} mr={2}>Get Top Albums</Button>
    <Tiles columns={[2, 4, 6]}>
      {albums.map(album => {
        return <AlbumCover key={album.id} title={album.name} image={null} />
      })}
    </Tiles>
    </>
  )
}