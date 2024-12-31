import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { SidebarProvider } from './components/ui/sidebar.tsx';
import { getCookie } from './lib/utils.ts';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const defaultOpen = getCookie('sidebar:state');
const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SidebarProvider defaultOpen={defaultOpen}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </SidebarProvider>
    </BrowserRouter>
  </StrictMode>
)
