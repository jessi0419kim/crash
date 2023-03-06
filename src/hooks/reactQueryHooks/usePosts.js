
import { supabase } from '../../configs/supabaseConfig'
import { useQuery } from '@tanstack/react-query'


export const usePosts =() => {

    const fetchingDatafromDB = async () => {
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

        return data
    }

    return useQuery({
      queryKey: ['getPosts'],
      queryFn: fetchingDatafromDB
    })

 
}