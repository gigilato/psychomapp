import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC } from 'react'

const queryClient = new QueryClient()
export const QueryWrapper: FC<any> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
