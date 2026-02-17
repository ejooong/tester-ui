
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/public/Home";
import MapPage from "@/pages/public/MapPage";
import InfographicPage from "@/pages/public/InfographicPage";
import NewsPage from "@/pages/public/NewsPage";
import ValidationPage from "@/pages/public/ValidationPage";
import SubmissionPage from "@/pages/public/SubmissionPage";
import SuccessPage from "@/pages/public/SuccessPage";
import TrackingPage from "@/pages/public/TrackingPage";

import NewsDetailPage from "@/pages/public/NewsDetailPage";
import LoginPage from "@/pages/auth/LoginPage";

import AdminLayout from "@/components/layout/AdminLayout";
import DashboardPage from "@/pages/admin/bappeda/DashboardPage";
import ProposalsPage from "@/pages/admin/bappeda/ProposalsPage";
import ProposalDetailPage from "@/pages/admin/bappeda/ProposalDetailPage";
import GISPage from "@/pages/admin/bappeda/GISPage";
import UsersPage from "@/pages/admin/bappeda/UsersPage";

import AdminDesaLayout from "@/components/layout/AdminDesaLayout";
import AdminDesaDashboard from "@/pages/admin/desa/DashboardPage";

import AdminOpdLayout from "@/components/layout/AdminOpdLayout";
import AdminOpdDashboard from "@/pages/admin/opd/DashboardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Admin Bappeda Routes */}
        <Route path="/admin/bappeda" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="usulan" element={<ProposalsPage />} />
          <Route path="usulan/:id" element={<ProposalDetailPage />} />
          <Route path="gis" element={<GISPage />} />
          <Route path="users" element={<UsersPage />} />
        </Route>

        {/* Admin Desa Routes */}
        <Route path="/admin/desa" element={<AdminDesaLayout />}>
          <Route index element={<AdminDesaDashboard />} />
        </Route>

        {/* Admin OPD Routes */}
        <Route path="/admin/opd" element={<AdminOpdLayout />}>
          <Route index element={<AdminOpdDashboard />} />
        </Route>



        <Route path="/peta" element={<MapPage />} />
        <Route path="/infografis" element={<InfographicPage />} />
        <Route path="/berita" element={<NewsPage />} />
        <Route path="/berita/:id" element={<NewsDetailPage />} />
        <Route path="/validasi" element={<ValidationPage />} />
        <Route path="/ajukan" element={<SubmissionPage />} />
        <Route path="/sukses" element={<SuccessPage />} />
        <Route path="/lacak" element={<TrackingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
