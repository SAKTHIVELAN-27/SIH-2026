import { useState } from 'react';
import { 
  MapPin, 
  Search, 
  Navigation, 
  Gauge, 
  Clock, 
  Zap, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';

// --- HARDCODED STATION DATASET ---
const STATIONS = [
  {
    id: 'A',
    name: 'Green Park Station',
    address: '142 Cyberway Blvd, Sector 4',
    occupied: 4,
    total: 6,
    load: 58,
    status: 'available', // available, busy, full
    wait: '5 min',
    recommendedSlot: '8:30 PM',
    power: '150 kW DC Fast',
    distance: '1.2 km',
    coordinates: { top: '35%', left: '42%' }
  },
  {
    id: 'B',
    name: 'Downtown Plaza Hub',
    address: '88 Market St, Financial Dist.',
    occupied: 5,
    total: 6,
    load: 84,
    status: 'busy',
    wait: '15 min',
    recommendedSlot: '9:15 PM',
    power: '120 kW Fast',
    distance: '2.8 km',
    coordinates: { top: '58%', left: '68%' }
  },
  {
    id: 'C',
    name: 'Central Mall Hub',
    address: '200 Grand Galleria Way',
    occupied: 6,
    total: 6,
    load: 96,
    status: 'full',
    wait: '30 min',
    recommendedSlot: '10:00 PM',
    power: '50 kW Standard',
    distance: '4.1 km',
    coordinates: { top: '22%', left: '75%' }
  },
  {
    id: 'D',
    name: 'Westside Energy Point',
    address: '12 Aero Express Ave',
    occupied: 1,
    total: 6,
    load: 21,
    status: 'available',
    wait: '0 min',
    recommendedSlot: 'Immediate',
    power: '250 kW Supercharge',
    distance: '3.4 km',
    coordinates: { top: '65%', left: '25%' }
  }
];

// --- SCREEN 2: STATION MAP COMPONENT ---
export default function StationMap() {
  const [selectedStation, setSelectedStation] = useState(STATIONS[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isReserved, setIsReserved] = useState(false);

  // Filter stations based on search
  const filteredStations = STATIONS.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Reset reservation state when user selects a different station
  const handleSelectStation = (station) => {
    setSelectedStation(station);
    setIsReserved(false);
  };

  const getStatusBadge = (status, total, occupied) => {
    const available = total - occupied;
    if (status === 'available') {
      return (
        <span className="flex items-center gap-1.5 text-xs font-bold text-neon-green bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
          {available} Available
        </span>
      );
    } else if (status === 'busy') {
      return (
        <span className="flex items-center gap-1.5 text-xs font-bold text-yellow-400 bg-yellow-500/10 px-2.5 py-1 rounded-full border border-yellow-500/20">
          <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
          {available} Left (Busy)
        </span>
      );
    } else {
      return (
        <span className="flex items-center gap-1.5 text-xs font-bold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-full border border-rose-500/20">
          <span className="w-2 h-2 rounded-full bg-rose-500"></span>
          Full
        </span>
      );
    }
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 max-w-6xl mx-auto">
      {/* Header & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            Charging Stations <Sparkles size={22} className="text-neon-cyan" />
          </h2>
          <p className="text-gray-400 text-sm mt-1">Live occupancy, load metrics, and rapid reservation</p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text"
            placeholder="Search location or station..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-navy-card border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan transition-colors"
          />
        </div>
      </div>

      {/* Main Map + Station Detail Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* MAP CONTAINER (Left 7 Cols) */}
        <div className="lg:col-span-7 h-[420px] sm:h-[480px] bg-navy-card/50 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-between p-6 shadow-2xl">
          
          {/* Stylized Map Background (High-tech grid & radar circle) */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-70"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/5 rounded-full pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] border border-white/5 rounded-full pointer-events-none"></div>
          
          {/* Ambient Map Glow */}
          <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-neon-cyan/10 blur-3xl rounded-full pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-neon-green/10 blur-3xl rounded-full pointer-events-none"></div>

          {/* Stylized Transit Lines / Roads */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
            <path d="M -50 150 Q 200 120 400 280 T 900 350" fill="none" stroke="#06B6D4" strokeWidth="3" strokeDasharray="6 6" />
            <path d="M 120 -20 Q 240 260 500 500" fill="none" stroke="#10B981" strokeWidth="2" />
            <path d="M 600 -20 L 300 600" fill="none" stroke="#475569" strokeWidth="1.5" />
          </svg>

          {/* Floating Map Legend Tag */}
          <div className="relative z-10 self-start bg-navy-base/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs text-gray-300 flex items-center gap-2">
            <Navigation size={14} className="text-neon-cyan animate-pulse" />
            <span>Interactive Grid • <strong>4 Hubs Live</strong></span>
          </div>

          {/* STATION MARKERS PLACED ON MAP */}
          {filteredStations.map((station) => {
            const isSelected = selectedStation.id === station.id;
            const isAvailable = station.status === 'available';
            const isBusy = station.status === 'busy';

            let markerColor = 'bg-rose-500 border-rose-400 shadow-[0_0_15px_#f43f5e]';
            let pinColor = 'text-rose-400';
            if (isAvailable) {
              markerColor = 'bg-neon-green border-emerald-300 shadow-[0_0_15px_#10B981]';
              pinColor = 'text-neon-green';
            } else if (isBusy) {
              markerColor = 'bg-yellow-400 border-amber-300 shadow-[0_0_15px_#facc15]';
              pinColor = 'text-yellow-400';
            }

            return (
              <button
                key={station.id}
                onClick={() => handleSelectStation(station)}
                style={{ top: station.coordinates.top, left: station.coordinates.left }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer transition-all duration-300 ${isSelected ? 'scale-125 z-30' : 'hover:scale-110'}`}
              >
                {/* Outer pulsing ring for selected item */}
                {isSelected && (
                  <div className="absolute -inset-2.5 rounded-full bg-white/20 animate-ping pointer-events-none"></div>
                )}

                {/* Marker Badge */}
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border backdrop-blur-md text-xs font-black text-white transition-all shadow-xl ${isSelected ? 'bg-navy-base border-neon-cyan text-neon-cyan' : 'bg-navy-base/90 border-white/20'}`}>
                  <span className={`w-2.5 h-2.5 rounded-full ${markerColor}`}></span>
                  <span>{station.name.split(' ')[0]}</span>
                </div>
                
                {/* Small indicator pill below */}
                <div className="mt-1 text-[10px] font-semibold text-gray-300 bg-navy-card/90 px-2 py-0.5 rounded-md border border-white/5 opacity-80 group-hover:opacity-100">
                  {station.total - station.occupied} avail
                </div>
              </button>
            );
          })}

          {/* Bottom user prompt */}
          <div className="relative z-10 self-end bg-navy-base/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-[11px] text-gray-400">
            Click any pin to inspect station metrics
          </div>
        </div>

        {/* STATION DETAILS CARD (Right 5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-gradient-to-b from-navy-card to-navy-base rounded-3xl border border-white/10 p-6 shadow-2xl flex flex-col justify-between h-full relative overflow-hidden">
            
            {/* Ambient Background glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-neon-cyan/5 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              {/* Header: Title & Status */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Station Node #{selectedStation.id}</span>
                  <h3 className="text-2xl font-bold text-white mt-0.5">{selectedStation.name}</h3>
                </div>
                {getStatusBadge(selectedStation.status, selectedStation.total, selectedStation.occupied)}
              </div>

              <p className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
                <MapPin size={14} className="text-gray-500" />
                {selectedStation.address} • <strong className="text-gray-300">{selectedStation.distance}</strong>
              </p>

              {/* METRICS GRID */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                
                {/* Chargers Available */}
                <div className="bg-navy-base/70 border border-white/5 p-3.5 rounded-2xl flex flex-col">
                  <span className="text-[11px] text-gray-400 font-medium">Charger Slots</span>
                  <div className="text-xl font-bold text-white mt-1 flex items-baseline gap-1">
                    <span>{selectedStation.occupied} / {selectedStation.total}</span>
                    <span className="text-xs text-gray-500 font-normal">occupied</span>
                  </div>
                  <span className="text-[11px] text-neon-green mt-1 font-semibold">
                    {selectedStation.total - selectedStation.occupied} open right now
                  </span>
                </div>

                {/* Current Load */}
                <div className="bg-navy-base/70 border border-white/5 p-3.5 rounded-2xl flex flex-col">
                  <span className="text-[11px] text-gray-400 font-medium">Current Grid Load</span>
                  <div className="text-xl font-bold text-white mt-1 flex items-center justify-between">
                    <span>{selectedStation.load}%</span>
                    <Gauge size={18} className={selectedStation.load > 85 ? 'text-rose-400' : 'text-neon-cyan'} />
                  </div>
                  {/* Load progress bar */}
                  <div className="w-full bg-gray-700 h-1.5 rounded-full mt-2.5 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        selectedStation.load > 80 ? 'bg-rose-500' : selectedStation.load > 50 ? 'bg-yellow-400' : 'bg-neon-green'
                      }`}
                      style={{ width: `${selectedStation.load}%` }}
                    ></div>
                  </div>
                </div>

                {/* Estimated Wait */}
                <div className="bg-navy-base/70 border border-white/5 p-3.5 rounded-2xl flex flex-col">
                  <span className="text-[11px] text-gray-400 font-medium">Est. Wait Time</span>
                  <div className="text-lg font-bold text-white mt-1 flex items-center gap-1.5">
                    <Clock size={16} className="text-yellow-400" />
                    <span>{selectedStation.wait}</span>
                  </div>
                </div>

                {/* Recommended Slot */}
                <div className="bg-navy-base/70 border border-white/5 p-3.5 rounded-2xl flex flex-col">
                  <span className="text-[11px] text-gray-400 font-medium">Recommended Slot</span>
                  <div className="text-lg font-bold text-neon-cyan mt-1">
                    {selectedStation.recommendedSlot}
                  </div>
                </div>
              </div>

              {/* Hardware specifications */}
              <div className="flex items-center justify-between text-xs text-gray-400 bg-white/5 px-4 py-2.5 rounded-xl border border-white/5 mb-6">
                <span className="flex items-center gap-1.5">
                  <Zap size={14} className="text-neon-green" />
                  Max Output:
                </span>
                <span className="font-semibold text-white">{selectedStation.power}</span>
              </div>
            </div>

            {/* ACTION BUTTON */}
            <div>
              {selectedStation.status === 'full' ? (
                <button 
                  disabled
                  className="w-full py-4 rounded-xl font-bold bg-gray-800 text-gray-500 border border-gray-700 cursor-not-allowed text-center text-sm"
                >
                  STATION AT FULL CAPACITY
                </button>
              ) : isReserved ? (
                <button 
                  onClick={() => setIsReserved(false)}
                  className="w-full py-4 rounded-xl font-bold bg-neon-green/20 border border-neon-green text-neon-green flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all cursor-pointer text-sm"
                >
                  <ShieldCheck size={18} />
                  RESERVED FOR YOU ✓ (Tap to cancel)
                </button>
              ) : (
                <button 
                  onClick={() => setIsReserved(true)}
                  className="w-full py-4 rounded-xl font-bold bg-neon-cyan text-navy-base hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <Zap size={18} />
                  CHOOSE THIS STATION
                </button>
              )}
            </div>

          </div>
        </div>

      </div>

      {/* QUICK SELECT LIST CARDS (Bottom summary list) */}
      <div className="mt-2">
        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">All Stations Overview</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {STATIONS.map((station) => {
            const isSelected = selectedStation.id === station.id;
            return (
              <div 
                key={station.id}
                onClick={() => handleSelectStation(station)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                  isSelected 
                    ? 'bg-navy-card border-neon-cyan shadow-[0_0_15px_rgba(6,182,212,0.15)]' 
                    : 'bg-navy-card/40 border-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-bold text-white">{station.name}</span>
                  <span className="text-[10px] font-bold text-gray-400">{station.distance}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>{station.total - station.occupied} slots free</span>
                  <span className={`font-semibold ${station.status === 'full' ? 'text-rose-400' : 'text-neon-green'}`}>
                    {station.load}% load
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}