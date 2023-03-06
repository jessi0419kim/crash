import 'react-native-url-polyfill/auto';
import Navigations from './src/navigations';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()

export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
       <Navigations />
       </QueryClientProvider>
  );
}
