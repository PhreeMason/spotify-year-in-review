import React from 'react';
import { Image, Card, Text } from 'rebass';



export default function ArtistCover(props) {
  const artist = props
  return (
    <Card width={[256, 320]} mx='auto'>
      <Image src={artist.image}
        sx={{
          width: ['100%', '50%'],
          borderRadius: 8,
        }} />
      <Text  sx={{ p: 1,color: 'text'}}>{artist.title}</Text>
    </Card>

  )
}