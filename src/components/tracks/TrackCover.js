import React from 'react';
import { Image, Card, Text } from 'rebass';



export default function TrackCover(props) {
  const artist = props.artists[0]
  return (
    <Card width={[256, 320]} mx='auto'>
      <Image src={props.image.url}
        sx={{
          width: ['100%', '50%'],
          borderRadius: 8,
        }} />
      <Text  sx={{ p: 1,color: 'text'}}>{props.title}</Text>
        <Text sx={{ p: 1,color: 'text'}}>{artist.name}</Text>
    </Card>

  )
}