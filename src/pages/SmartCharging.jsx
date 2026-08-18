import { BrainCircuit, AlertTriangle, Info, Zap, BatteryCharging, Clock, TrendingDown, TrendingUp, ShieldCheck } from 'lucide-react';

export default function SmartCharging() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 max-w-6xl mx-auto">
      <div className="mb-2">
        <h2 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
          Smart Charging <BrainCircuit size={26} className="text-neon-cyan" />
        </h2>
        <p className="text-gray-400 text-sm mt-2 max-w-2xl">
          Powered by Explainable AI (XAI). We analyze real-time grid conditions and station demand to recommend optimal charging windows.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          <div className="bg-navy-card/40 border border-white/5 rounded-3xl p-6 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-white">Demand Forecast</h3>
              <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400 bg-rose-500/10 px-3 py-1.5 rounded-full border border-rose-500/20">
                <AlertTriangle size={14} /> Peak: 7:30 PM - 8:30 PM
              </div>
            </div>
            <div className="h-48 w-full flex items-end justify-between gap-2 px-2 pb-6 border-b border-white/10 relative">
              <div className="relative w-full h-[40%] bg-blue-500/20 rounded-t-md"><div className="absolute -bottom-6 w-full text-center text-xs text-gray-500">6 PM</div></div>
              <div className="relative w-full h-[65%] bg-blue-500/20 rounded-t-md"><div className="absolute -bottom-6 w-full text-center text-xs text-gray-500">7 PM</div></div>
              <div className="relative w-full h-[95%] bg-rose-500/80 shadow-[0_0_15px_#f43f5e] rounded-t-md"><div className="absolute -bottom-6 w-full text-center text-xs text-rose-400 font-bold">7:30 PM</div></div>
              <div className="relative w-full h-[35%] bg-neon-green border-2 border-neon-green shadow-[0_0_20px_#10B981] rounded-t-md animate-pulse">
                <div className="absolute -top-8 w-[120%] -left-[10%] text-center text-[10px] font-black text-neon-green bg-navy-base px-2 py-1 rounded-md border border-neon-green">SHIFT HERE</div>
                <div className="absolute -bottom-6 w-full text-center text-xs text-neon-green font-bold">8:45 PM</div>
              </div>
              <div className="relative w-full h-[45%] bg-blue-500/20 rounded-t-md"><div className="absolute -bottom-6 w-full text-center text-xs text-gray-500">9 PM</div></div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-navy-card to-navy-base border border-neon-cyan/30 rounded-3xl p-6 shadow-xl relative overflow-hidden">
            <h3 className="text-sm font-bold text-neon-cyan uppercase tracking-wider mb-5 flex items-center gap-2">
              <Info size={16} /> Why this recommendation?
            </h3>
            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex items-center justify-between bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy-base flex items-center justify-center border border-neon-green/30"><Zap size={18} className="text-neon-green" /></div>
                  <div><h4 className="text-white font-bold text-sm">Grid Load Forecast</h4><p className="text-xs text-gray-400">Off-peak timing</p></div>
                </div>
                <span className="text-sm font-bold text-neon-green">Low Impact</span>
              </div>
              <div className="flex items-center justify-between bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy-base flex items-center justify-center border border-neon-green/30"><BatteryCharging size={18} className="text-neon-green" /></div>
                  <div><h4 className="text-white font-bold text-sm">Station Availability</h4><p className="text-xs text-gray-400">Predicted free chargers</p></div>
                </div>
                <span className="text-sm font-bold text-neon-green">High (4 Free)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-neon-green/10 border border-neon-green rounded-3xl p-8 shadow-[0_0_40px_rgba(16,185,129,0.15)] flex flex-col justify-center text-center relative h-full min-h-[250px]">
             <BrainCircuit size={40} className="text-neon-green mx-auto mb-4 animate-bounce" />
             <span className="text-sm font-bold text-neon-green tracking-widest uppercase mb-2">AI Recommendation</span>
             <h2 className="text-4xl font-black text-white mb-2 tracking-tight">Shift to 8:45 PM</h2>
             <p className="text-gray-300 text-sm mb-6 max-w-xs mx-auto">Charging at Green Park Station at this time optimizes grid stability and saves you time.</p>
             <button className="bg-neon-green text-navy-base font-bold py-4 px-8 rounded-xl w-full hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
               ACCEPT OPTIMIZED SLOT
             </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-navy-card/40 border border-white/5 p-5 rounded-2xl flex flex-col gap-2 relative">
              <TrendingDown size={20} className="text-neon-cyan mb-1" />
              <div className="text-2xl font-black text-white">24%</div>
              <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wide">Reduced<br/>Peak Load</span>
            </div>
            <div className="bg-navy-card/40 border border-white/5 p-5 rounded-2xl flex flex-col gap-2 relative">
              <TrendingDown size={20} className="text-neon-cyan mb-1" />
              <div className="text-2xl font-black text-white">15m</div>
              <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wide">Saved<br/>Wait Time</span>
            </div>
            <div className="bg-navy-card/40 border border-white/5 p-5 rounded-2xl flex flex-col gap-2 relative">
              <TrendingUp size={20} className="text-neon-green mb-1" />
              <div className="text-2xl font-black text-white">18%</div>
              <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wide">Increased<br/>Utilisation</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500 bg-navy-card/30 p-4 rounded-xl border border-white/5">
            <ShieldCheck size={16} className="text-gray-400" />
            <span>Recommendation generated securely using predicted demand and regional grid load metrics.</span>
          </div>
        </div>
      </div>
    </div>
  );
}