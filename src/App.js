import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Cart from "./Cart";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />

          <Route
            path="/login"
            element={
              <>
                <Header />
                <Login />
              </>
            }
          />

          <Route
            path="/Cart"
            element={
              <>
                <Header />
                <Cart />
              </>
            }
          />

          <Route
            path="/Payment"
            element={
              <>
                <Header />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
