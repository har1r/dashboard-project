import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import halaman disini
import DashboardPage from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import NopelPage from './pages/NopelPage';
// -----------------

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#ffe0bf] to-[#f8e1a1]">
        <main className="flex-grow container mx-auto px-4 py-8 xs:px-1 xs:w-full">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="/masuk" element={<LoginPage />} />
            <Route path="/nopel" element={<NopelPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
