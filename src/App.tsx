import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Suppliers from "./pages/Suppliers";
import SupplierDetail from "./pages/SupplierDetail";
import ComplianceHub from "./pages/ComplianceHub";
import IncentiveEngine from "./pages/IncentiveEngine";
import GreenFinance from "./pages/GreenFinance";
import Settings from "./pages/Settings";
import LandingPage from "./pages/Landing";
import { Toaster } from "sonner";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/suppliers/:id" element={<SupplierDetail />} />

          <Route path="/compliance" element={<ComplianceHub />} />
          <Route path="/incentives" element={<IncentiveEngine />} />
          <Route path="/finance" element={<GreenFinance />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
      <Toaster position="top-center" richColors />
    </BrowserRouter>
  );
};

export default App;
