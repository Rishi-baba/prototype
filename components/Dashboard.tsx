
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, Legend } from 'recharts';
import { BUSINESS_MODEL_DATA } from '../constants';
import { Shield, Target, Users, Landmark, Zap, Server, Settings, Activity } from 'lucide-react';

export const CustomerMarket: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-[#1e1f20] p-6 rounded-2xl border border-[#3c4043]">
      <div className="flex items-center gap-3 mb-4">
        <Landmark className="text-blue-400" size={24} />
        <h3 className="text-xl font-semibold text-white">Primary Customer</h3>
      </div>
      <ul className="space-y-4">
        {BUSINESS_MODEL_DATA.primaryCustomers.map((c, i) => (
          <li key={i} className="flex items-center gap-3 text-[#e3e3e3]">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            {c}
          </li>
        ))}
      </ul>
      <div className="mt-8 pt-6 border-t border-[#3c4043]">
        <h4 className="text-sm font-bold text-[#9aa0a6] mb-2 uppercase tracking-wide">Procurement Channels</h4>
        <p className="text-sm text-[#e3e3e3]">iDEX funding, direct government contract, or dedicated Army budget allocations.</p>
      </div>
    </div>
    <div className="bg-[#1e1f20] p-6 rounded-2xl border border-[#3c4043]">
      <div className="flex items-center gap-3 mb-4">
        <Users className="text-purple-400" size={24} />
        <h3 className="text-xl font-semibold text-white">Secondary Market</h3>
      </div>
      <ul className="space-y-4">
        {BUSINESS_MODEL_DATA.secondaryCustomers.map((c, i) => (
          <li key={i} className="flex items-center gap-3 text-[#e3e3e3]">
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
            {c}
          </li>
        ))}
      </ul>
      <div className="mt-8 pt-6 border-t border-[#3c4043]">
        <h4 className="text-sm font-bold text-[#9aa0a6] mb-2 uppercase tracking-wide">Global Potential</h4>
        <p className="text-sm text-[#e3e3e3]">Scalable to 50+ allied countries with similar logistics challenges.</p>
      </div>
    </div>
  </div>
);

export const Offerings: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {BUSINESS_MODEL_DATA.offerings.map((offer, idx) => (
      <div key={idx} className="bg-[#1e1f20] p-6 rounded-2xl border border-[#3c4043] flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          {idx === 0 ? <Zap className="text-yellow-400" /> : idx === 1 ? <Settings className="text-green-400" /> : <Activity className="text-red-400" />}
          <h3 className="text-lg font-bold text-white">{offer.title}</h3>
        </div>
        <div className="flex-1 space-y-3 mb-6">
          {offer.items.map((item, i) => (
            <div key={i} className="text-sm text-[#9aa0a6] flex items-start gap-2">
              <span className="text-blue-400">•</span>
              {item}
            </div>
          ))}
        </div>
        <div className="bg-[#131314] px-4 py-3 rounded-xl">
          <span className="text-xs text-[#9aa0a6] block mb-1 uppercase tracking-tighter">Pricing Model</span>
          <span className="text-sm text-white font-medium">{offer.model}</span>
        </div>
      </div>
    ))}
  </div>
);

export const RevenueModel: React.FC = () => {
  const chartData = BUSINESS_MODEL_DATA.revenuePhases.map(p => ({
    name: p.name.split(':')[1].trim(),
    licence: p.licence,
    services: p.services,
    total: p.total
  }));

  return (
    <div className="space-y-6">
      <div className="bg-[#1e1f20] p-6 rounded-2xl border border-[#3c4043]">
        <h3 className="text-xl font-semibold mb-6 text-white">Projected Growth (₹ Lakhs)</h3>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorLicence" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorServices" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
              <XAxis dataKey="name" stroke="#9aa0a6" />
              <YAxis stroke="#9aa0a6" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e1f20', borderColor: '#3c4043', color: '#fff' }}
                itemStyle={{ color: '#fff' }}
              />
              <Legend verticalAlign="top" height={36}/>
              <Area type="monotone" dataKey="licence" stroke="#8884d8" fillOpacity={1} fill="url(#colorLicence)" name="Licence Revenue" />
              <Area type="monotone" dataKey="services" stroke="#82ca9d" fillOpacity={1} fill="url(#colorServices)" name="Service Revenue" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BUSINESS_MODEL_DATA.revenuePhases.map((phase, i) => (
          <div key={i} className="bg-[#1e1f20] p-6 rounded-2xl border border-[#3c4043]">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-white">{phase.name}</h4>
              <span className="text-xs text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full font-mono">{phase.period}</span>
            </div>
            <p className="text-xs text-[#9aa0a6] mb-4">{phase.description}</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-white">₹{phase.total}L</span>
              <span className="text-xs text-[#9aa0a6]">est. Year 1</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Timeline: React.FC = () => (
  <div className="relative pl-8 space-y-12 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-[#3c4043]">
    {BUSINESS_MODEL_DATA.gtmTimeline.map((step, i) => (
      <div key={i} className="relative group">
        <div className="absolute -left-[31px] top-1.5 w-5 h-5 bg-[#1e1f20] border-2 border-blue-500 rounded-full z-10 transition-transform group-hover:scale-125" />
        <div className="bg-[#1e1f20] p-6 rounded-2xl border border-[#3c4043] transition-all hover:border-blue-500/50">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded uppercase tracking-widest">{step.date}</span>
          </div>
          <h3 className="text-lg font-bold text-white mb-4">{step.title}</h3>
          <ul className="space-y-2 mb-6">
            {step.points.map((p, idx) => (
              <li key={idx} className="text-sm text-[#9aa0a6] flex items-center gap-2">
                <Shield size={12} className="text-[#3c4043]" />
                {p}
              </li>
            ))}
          </ul>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#e3e3e3] uppercase tracking-wider bg-[#131314] px-3 py-1.5 rounded-lg border border-[#3c4043]">
            <Target size={14} className="text-blue-500" />
            Goal: {step.goal}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const CompetitiveAdvantage: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {BUSINESS_MODEL_DATA.competitiveAdvantages.map((adv, i) => (
      <div key={i} className="bg-[#1e1f20] p-6 rounded-2xl border border-[#3c4043] relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-blue-500/10 transition-colors" />
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Shield size={20} className="text-blue-500" />
          {adv.category}
        </h3>
        <div className="space-y-4">
          {adv.points.map((p, idx) => (
            <div key={idx} className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              </div>
              <span className="text-sm text-[#9aa0a6]">{p}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);
