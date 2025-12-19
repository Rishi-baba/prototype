
import React from 'react';
import { LayoutGrid, Target, Briefcase, TrendingUp, Cpu, History, Shield, Info, Rocket } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const menuItems = [
    { id: 'start', label: 'Start', icon: Rocket },
    { id: 'market', label: 'Customer & Market', icon: Target },
    { id: 'offering', label: 'Our Offering', icon: Briefcase },
    { id: 'revenue', label: 'Revenue Model', icon: TrendingUp },
    { id: 'economics', label: 'Unit Economics', icon: LayoutGrid },
    { id: 'timeline', label: 'GTM Timeline', icon: History },
    { id: 'advantage', label: 'Competitive Edge', icon: Shield },
    { id: 'exit', label: 'Sustainability & Exit', icon: Info },
  ];

  return (
    <div className="w-64 flex-shrink-0 flex flex-col h-full border-r border-[#3c4043] bg-[#1e1f20] px-3 py-6">
      <div className="flex items-center gap-3 px-3 mb-10">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
          <Shield className="text-white w-5 h-5" />
        </div>
        <span className="font-semibold text-lg text-white">DefenseCore</span>
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm font-medium ${
              activeSection === item.id
                ? 'bg-[#3c4043] text-white'
                : 'text-[#9aa0a6] hover:bg-[#2c2d2e] hover:text-white'
            }`}
          >
            <item.icon size={18} />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-auto border-t border-[#3c4043] pt-6 space-y-4 px-2">
        <div className="text-[10px] text-[#9aa0a6] uppercase tracking-wider font-bold">Resources</div>
        <div className="text-xs text-[#9aa0a6] hover:text-white cursor-pointer">iDEX Funding Docs</div>
        <div className="text-xs text-[#9aa0a6] hover:text-white cursor-pointer">MoD Procurement</div>
        <div className="text-xs text-[#e3e3e3] opacity-60 mt-4">
          v2.5.0-pilot
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
