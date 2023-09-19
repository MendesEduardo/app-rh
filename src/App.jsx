import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Pagamentos from "./pages/Pagamentos";
import MarcadorPonto from "./pages/MarcadorPonto";
import Beneficios from "./pages/Beneficios";
import Dadoscadastrais from "./pages/Dadoscadastrais";

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Header user={user} onLogout={handleLogout} />
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login onSubmit={setUser} />}
        />
        <Route
          path="/"
          element={user ? <Home user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/dadoscadastrais"
          element={user ? <Dadoscadastrais /> : <Navigate to="/login" />}
        />
        <Route
          path="/pagamentos"
          element={user ? <Pagamentos /> : <Navigate to="/login" />}
        />
        <Route
          path="/marcadorponto"
          element={user ? <MarcadorPonto /> : <Navigate to="/login" />}
        />
        <Route
          path="/beneficios"
          element={user ? <Beneficios /> : <Navigate to="/login" />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
