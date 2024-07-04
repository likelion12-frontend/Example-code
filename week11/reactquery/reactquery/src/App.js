import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Example from './components/Example';

const queryClient = new QueryClient; // queryClient 선언하고 

function App() {
  return (
    <QueryClientProvider client={queryClient}> // QueryClient의 props로 queryClient를 전달해주면 
      <Example /> // 하위 컴포넌트에서 QueryClient에 접근 가능
    </QueryClientProvider>
  )
}
