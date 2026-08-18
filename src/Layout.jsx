import { Link, useLocation, Outlet } from 'react-router-dom';
import { BatteryCharging, Map as MapIcon, Cpu } from 'lucide-react';

export default function Layout() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="min-h-screen bg-navy-base text-white pb-28 font-sans selection:bg-neon-cyan/30">
      {/* Header */}
      <header className="px-6 py-5 flex justify-between items-center border-b border-white/5 bg-navy-base/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="flex items-center gap-2 text-neon-green">
          <BatteryCharging size={32} />
          <h1 className="text-2xl font-black tracking-widest text-white">EVOLVE</h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-navy-card to-gray-800 border border-white/10 flex items-center justify-center text-sm font-bold text-neon-cyan shadow-md cursor-pointer hover:border-neon-cyan/50 transition-colors">
          SD
        </div>
      </header>

      {/* Dynamic Page Content */}
      <main className="p-4 md:p-8">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-navy-base/95 backdrop-blur-xl border-t border-white/10 p-4 flex justify-around pb-safe z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <Link 
          to="/"
          className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${currentPath === '/' ? 'text-neon-cyan scale-110' : 'text-gray-500 hover:text-gray-300'}`}
        >
          <BatteryCharging size={24} className={currentPath === '/' ? 'drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]' : ''} />
          <span className="text-[11px] font-bold tracking-wide">Dashboard</span>
        </Link>
        
        <Link 
          to="/map"
          className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${currentPath === '/map' ? 'text-neon-cyan scale-110' : 'text-gray-500 hover:text-gray-300'}`}
        >
          <MapIcon size={24} className={currentPath === '/map' ? 'drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]' : ''} />
          <span className="text-[11px] font-bold tracking-wide">Stations</span>
        </Link>

        <Link 
          to="/smart"
          className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${currentPath === '/smart' ? 'text-neon-cyan scale-110' : 'text-gray-500 hover:text-gray-300'}`}
        >
          <Cpu size={24} className={currentPath === '/smart' ? 'drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]' : ''} />
          <span className="text-[11px] font-bold tracking-wide">Smart Charge</span>
        </Link>
      </nav>
    </div>
  );
}