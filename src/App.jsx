import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import { AuthProvider } from "./context/state/AuthState";
import { CustomersProvider } from "./context/state/CustomersState";

function App() {
  return (
    <AuthProvider>
      <CustomersProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<SignIn />} />
          </Routes>
        </Router>
      </CustomersProvider>
    </AuthProvider>
  );
}

export default App;
