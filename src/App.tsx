import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Import the new Layout component
import Layout from './components/Layout'; 

import Dashboard from './pages/Dashboard';
import Suppliers from './pages/Suppliers';
import SupplierDetail from './pages/SupplierDetail';
import ComplianceHub from './pages/ComplianceHub';
import IncentiveEngine from './pages/IncentiveEngine';
import GreenFinance from './pages/GreenFinance';
import Settings from './pages/Settings';
import LandingPage from './pages/Landing';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the external Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Protected Routes / Internal App Pages (using the new Layout) */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Suppliers Routes */}
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/suppliers/:id" element={<SupplierDetail />} />
          
          <Route path="/compliance" element={<ComplianceHub />} />
          <Route path="/incentives" element={<IncentiveEngine />} />
          <Route path="/finance" element={<GreenFinance />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* Optional: 404 Not Found Page */}
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;