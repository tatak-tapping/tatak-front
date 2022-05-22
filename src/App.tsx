import Router from "./router";
import { QueryClient, QueryClientProvider } from "react-query";
import { DialogProvider } from "context/Dialog";
import 'Font.css';

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