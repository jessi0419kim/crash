import { View, Text } from 'react-native'
import {useEffect, useState, useRef} from 'react';
import { Video, AVPlaybackStatus } from 'expo-av'
import { MaterialIcons} from "@expo/vector-icons";

const VideoPlayer = ({post}) => {


    const video = useRef(null);
    const [status, setStatus] = useState({});

   useEffect(()=>{
        console.log(post?.videoUrl)
   },[post])
  
  return (
    <View style={{marginVertical: 15}}>
        <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 12, marginBottom: 16 }}>
                <View style={{ flex: 1, justifyContent: "space-between", paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>name</Text>
                <Text style={{ fontSize: 12, color: 'red' }}>created_At</Text>
                </View>
                <MaterialIcons name="more-vert" size={24}  />
        </View>
      <Video
        ref={video}
        style={{width: '100%', aspectRatio: 1/1}}
        source={{
          uri: `https://srrthevwejcoekxlvjmp.supabase.co/storage/v1/object/public/videos/${post?.videoUrl}`,
        }}
        useNativeControls
        resizeMode="cover"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
  )
}

export default VideoPlayer


