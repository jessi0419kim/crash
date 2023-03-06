import { StatusBar } from 'expo-status-bar';
import {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import VideoPlayer from './VideoPlayer';

import { supabase } from '../../../configs/supabaseConfig'





const Home = () => {

 const [posts, setPosts] = useState([])
 const [isLoading, setIsLoading] = useState(false)

 const fetchingDatafromDB = async () => {

  setIsLoading(true)
  const { data, error } = await supabase
  .from('posts')
  .select(`*,
      profiles(*)
  `)
  .order('id', { ascending: false })

  if(error){
      console.log('usePost error',error)
      return null
  }

  setPosts(data)
  setIsLoading(false)
}

useEffect(()=>{
  fetchingDatafromDB()
},[])

  return (
      <View style={styles.container}>
        <FlatList
        data={posts}
        renderItem={({item}) =>  <VideoPlayer post={item}/>}
        keyExtractor={(item, index) => index}
        showsVerticalScrollIndicator={false}
        refreshing={isLoading}
        onRefresh={fetchingDatafromDB}
      />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});


export default Home