import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './pages/Dashboard';
import StationMap from './pages/StationMap';
import SmartCharging from './pages/SmartCharging';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="map" element={<StationMap />} />
          <Route path="smart" element={<SmartCharging />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}