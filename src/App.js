import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
import GlobalStyle from "./styles/global";
import "bootstrap/dist/css/bootstrap.min.css";

//aqui estamos renderizando nossa aplicação, usando as rotas definidas e o css no escopo
const App = () => (
  <AuthProvider>
    <RoutesApp />
    <GlobalStyle />
  </AuthProvider>
);

export default App;
