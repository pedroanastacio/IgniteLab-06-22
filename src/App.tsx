import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo";
import { SidebarProvider } from "./providers/Sidebar";
import Router from "./Router";

function App() {
  return (
    <ApolloProvider client={client}>
      <SidebarProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </SidebarProvider>
    </ApolloProvider>
  );
}

export default App;
