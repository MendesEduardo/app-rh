import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState(null);
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Header user={user} onLogout={handleLogout} />

      <Routes>
        <Route path="/login" element={<Login onSubmit={setUser} />} />
        <Route
          path="/"
          element={user ? <Home user={user} /> : <Login onSubmit={setUser} />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
