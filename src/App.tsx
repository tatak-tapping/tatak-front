import Router from "./router";
import React from 'react'
import { Global } from '@emotion/react';
import global from './styles/global';
import { QueryClient, QueryClientProvider } from "react-query";
import { DialogProvider } from "context/Dialog";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DialogProvider>
          <Router />
        </DialogProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;