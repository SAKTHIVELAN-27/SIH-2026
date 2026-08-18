import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BatteryCharging, Zap, Activity, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function Dashboard() {
  const [chargeLevel, setChargeLevel] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setChargeLevel(68), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-700 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center bg-navy-card/40 border border-white/5 p-8 rounded-3xl mb-2 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="flex-1 w-full md:pr-8 mb-10 md:mb-0 relative z-10">
          <h2 className="text-4xl font-bold text-white mb-3 flex items-center gap-3">
            Good Evening <span className="animate-bounce origin-bottom">👋</span>
          </h2>
          <p className="text-gray-400 text-base mb-8 max-w-md">
            Find the smartest time and place to charge your EV based on live grid data and station availability.
          </p>
          
          <button 
            onClick={() => navigate('/smart')}
            className="w-full md:w-fit px-8 py-4 bg-neon-cyan/10 border border-neon-cyan text-neon-cyan rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-neon-cyan hover:text-navy-base transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] group cursor-pointer"
          >
            <Zap size={20} className="group-hover:animate-ping" />
            Find Best Charging Option
          </button>
        </div>

        <div className="flex flex-col items-center justify-center w-full md:w-auto px-10 relative z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-48 bg-neon-green/20 blur-3xl animate-pulse rounded-full"></div>
          <div className="w-10 h-3 bg-slate-600 rounded-t-md border-t border-l border-r border-white/10"></div>
          
          <div className="w-24 h-48 border border-white/20 rounded-2xl p-1.5 relative flex flex-col justify-end bg-navy-base/80 backdrop-blur-md overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
            <div className="w-full bg-gradient-to-t from-emerald-600 via-neon-green to-emerald-400 rounded-xl relative transition-all duration-1000 ease-out shadow-[0_0_25px_rgba(16,185,129,0.8)] flex flex-col justify-end" style={{ height: `${chargeLevel}%` }}>
               <div className="w-full h-2 bg-white/40 rounded-t-xl absolute top-0 animate-pulse"></div>
               <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
               <div className="absolute bottom-6 right-3 w-1 h-1 bg-white rounded-full animate-ping"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Zap size={40} className={`text-white drop-shadow-[0_0_15px_rgba(255,255,255,1)] transition-all duration-700 delay-500 ${chargeLevel > 0 ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} />
            </div>
          </div>
          
          <div className="mt-5 flex flex-col items-center">
             <span className="text-xs font-bold text-neon-green tracking-[0.3em] animate-pulse mb-1">CHARGING</span>
             <span className="text-xl font-black text-white">{chargeLevel}%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-2">
        <div className="bg-navy-card/60 backdrop-blur-sm p-5 rounded-2xl border border-white/5 flex flex-col gap-2 items-center text-center shadow-lg">
          <Activity size={22} className="text-yellow-400 mb-1" />
          <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Demand</span>
          <span className="text-lg font-bold text-yellow-400">Moderate</span>
        </div>
        <div className="bg-navy-card/60 backdrop-blur-sm p-5 rounded-2xl border border-white/5 flex flex-col gap-2 items-center text-center shadow-lg">
          <Zap size={22} className="text-neon-cyan mb-1" />
          <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Grid Load</span>
          <span className="text-lg font-bold text-white">62%</span>
        </div>
        <div onClick={() => navigate('/map')} className="bg-navy-card/60 backdrop-blur-sm p-5 rounded-2xl border border-white/5 flex flex-col gap-2 items-center text-center shadow-lg hover:border-neon-green/50 hover:bg-neon-green/5 transition-all cursor-pointer group">
          <BatteryCharging size={22} className="text-neon-green mb-1 group-hover:scale-110 transition-transform" />
          <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider group-hover:text-neon-green transition-colors">Stations</span>
          <span className="text-lg font-bold text-white group-hover:text-neon-green transition-colors">12 <span className="text-gray-500 group-hover:text-neon-green/70">/ 18</span></span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-navy-card to-navy-base rounded-3xl border border-neon-green/40 p-7 relative overflow-hidden mt-2 shadow-2xl">
        <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-neon-green/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="flex items-center gap-2 mb-6">
          <Zap size={18} className="text-neon-green animate-pulse" fill="currentColor" />
          <span className="text-xs font-bold text-neon-green tracking-widest uppercase">Best Option For You</span>
        </div>
        <h3 className="text-3xl font-bold text-white mb-6">Green Park Station</h3>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-8">
          <div className="flex items-center gap-3 text-base text-gray-300">
            <div className="w-3 h-3 rounded-full bg-neon-green shadow-[0_0_12px_#10B981] animate-pulse"></div>
            <span>2 slots available</span>
          </div>
          <div className="flex items-center gap-3 text-base text-gray-300 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
            <Clock size={18} className="text-neon-cyan" />
            <span>Recommended: <strong className="text-white">8:30 PM</strong></span>
          </div>
        </div>
        <button onClick={() => navigate('/smart')} className="w-full bg-white/5 hover:bg-white/10 text-white py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 transition-all duration-300 border border-white/10 cursor-pointer">
          VIEW AI DETAILS <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}