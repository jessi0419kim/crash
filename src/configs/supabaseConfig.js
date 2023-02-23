
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'



const supabaseUrl = "https://srrthevwejcoekxlvjmp.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNycnRoZXZ3ZWpjb2VreGx2am1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAwNTExMjIsImV4cCI6MTk4NTYyNzEyMn0.AOTgXJMyecI7yo6oWiJeeHWGMwsOOVdjEMoh221VzNM"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})