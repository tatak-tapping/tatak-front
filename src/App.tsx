import Router from "./router";
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