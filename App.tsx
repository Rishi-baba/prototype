
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import GeminiChat from './components/GeminiChat';
import { CustomerMarket, Offerings, RevenueModel, Timeline, CompetitiveAdvantage } from './components/Dashboard';
import { Shield, ChevronRight, TrendingUp, Sparkles, Target } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('start');

  const renderContent = () => {
    switch (activeSection) {
      case 'start':
        return (
          <div className="max-w-4xl mx-auto pt-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Build the future of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Defense Logistics</span> with Gemini
              </h1>
              <div className="relative max-w-2xl mx-auto mb-12">
                <div className="bg-[#1e1f20] border border-[#3c4043] rounded-3xl p-6 flex items-center gap-4 group hover:border-[#4285f4] transition-all cursor-pointer shadow-xl">
                   <div className="flex-1 text-[#9aa0a6] text-left">Explore the DefenseCore strategic roadmap...</div>
                   <div className="flex gap-2">
                     <div className="p-2 hover:bg-[#3c4043] rounded-full transition-colors"><Sparkles size={20} className="text-purple-400" /></div>
                     <button className="bg-[#4285f4] hover:bg-[#1b66de] text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2">
                       Analyze Strategy <ChevronRight size={16} />
                     </button>
                   </div>
                </div>
              </div>
              <div className="flex justify-center gap-12">
                 <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">₹50Cr+</div>
                    <div className="text-sm text-[#9aa0a6] uppercase tracking-wider">Target ARR</div>
                 </div>
                 <div className="w-[1px] bg-[#3c4043]" />
                 <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">70%</div>
                    <div className="text-sm text-[#9aa0a6] uppercase tracking-wider">Net Margins</div>
                 </div>
                 <div className="w-[1px] bg-[#3c4043]" />
                 <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">1000+</div>
                    <div className="text-sm text-[#9aa0a6] uppercase tracking-wider">Army Units</div>
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <button 
                 onClick={() => setActiveSection('revenue')}
                 className="bg-[#1e1f20] border border-[#3c4043] p-6 rounded-2xl hover:bg-[#2c2d2e] transition-all text-left group"
               >
                 <TrendingUp className="text-green-400 mb-4" />
                 <h3 className="text-white font-bold mb-2">Financial Projections</h3>
                 <p className="text-sm text-[#9aa0a6]">View the phased revenue model from pilot to national deployment.</p>
               </button>
               <button 
                 onClick={() => setActiveSection('market')}
                 className="bg-[#1e1f20] border border-[#3c4043] p-6 rounded-2xl hover:bg-[#2c2d2e] transition-all text-left group"
               >
                 <Target className="text-blue-400 mb-4" />
                 <h3 className="text-white font-bold mb-2">Market Dynamics</h3>
                 <p className="text-sm text-[#9aa0a6]">Deep dive into primary and secondary defense customer profiles.</p>
               </button>
            </div>
          </div>
        );
      case 'market': return <CustomerMarket />;
      case 'offering': return <Offerings />;
      case 'revenue': return <RevenueModel />;
      case 'timeline': return <Timeline />;
      case 'advantage': return <CompetitiveAdvantage />;
      case 'economics':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[#1e1f20] p-6 rounded-2xl border border-[#3c4043]">
              <h3 className="text-xl font-bold text-white mb-6">Cost Structure (Yearly)</h3>
              <div className="space-y-6">
                <div>
                   <div className="flex justify-between text-sm mb-2">
                     <span className="text-[#9aa0a6]">Fixed Costs (Team/Infra)</span>
                     <span className="text-white font-mono">₹50–100L</span>
                   </div>
                   <div className="w-full bg-[#131314] rounded-full h-2">
                     <div className="bg-blue-500 h-2 rounded-full w-[80%]" />
                   </div>
                </div>
                <div>
                   <div className="flex justify-between text-sm mb-2">
                     <span className="text-[#9aa0a6]">Variable Costs (Per Unit)</span>
                     <span className="text-white font-mono">₹2–5L</span>
                   </div>
                   <div className="w-full bg-[#131314] rounded-full h-2">
                     <div className="bg-purple-500 h-2 rounded-full w-[20%]" />
                   </div>
                </div>
                <div>
                   <div className="flex justify-between text-sm mb-2">
                     <span className="text-[#9aa0a6]">R&D (Platform Improvements)</span>
                     <span className="text-white font-mono">₹30–50L</span>
                   </div>
                   <div className="w-full bg-[#131314] rounded-full h-2">
                     <div className="bg-green-500 h-2 rounded-full w-[45%]" />
                   </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-800 p-8 rounded-2xl border border-white/10 text-white relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="text-2xl font-bold mb-4">Unit Economics Scale</h3>
                 <div className="space-y-4 mb-8">
                   <div className="flex items-center gap-3">
                     <div className="w-1.5 h-1.5 bg-white rounded-full" />
                     <span>Pilot: Near breakeven</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <div className="w-1.5 h-1.5 bg-white rounded-full" />
                     <span>Scale: 40–50% gross margins</span>
                   </div>
                   <div className="flex items-center gap-3 font-bold text-lg">
                     <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                     <span className="text-green-300">National: 60–70% gross margins</span>
                   </div>
                 </div>
                 <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                    <div className="text-xs uppercase tracking-widest opacity-60 mb-1">Full Scale Profit Example</div>
                    <div className="text-3xl font-bold">₹7–8 Crore / year</div>
                    <div className="text-sm opacity-80">on ₹10 Crore Revenue</div>
                 </div>
               </div>
               <div className="absolute bottom-0 right-0 opacity-10">
                 <TrendingUp size={240} />
               </div>
            </div>
          </div>
        );
      case 'exit':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1e1f20] p-6 rounded-2xl border border-[#3c4043] flex flex-col">
              <span className="text-blue-500 font-bold mb-2">Option A</span>
              <h3 className="text-xl font-bold text-white mb-4">Defense Standard</h3>
              <p className="text-[#9aa0a6] text-sm flex-1">Become the Army's standard logistics platform, owned and operated by the MoD serving 100K+ users.</p>
              <div className="mt-6 font-mono text-xs text-blue-400">Revenue: ₹10–50 Crore+</div>
            </div>
            <div className="bg-[#1e1f20] p-6 rounded-2xl border border-[#3c4043] flex flex-col border-t-purple-500">
              <span className="text-purple-500 font-bold mb-2">Option B</span>
              <h3 className="text-xl font-bold text-white mb-4">Strategic Acquisition</h3>
              <p className="text-[#9aa0a6] text-sm flex-1">Acquired by major defense contractors (L&T, BharatShakti) for strategic integration into broader systems.</p>
              <div className="mt-6 font-mono text-xs text-purple-400">Valuation: ₹200–500 Crore+</div>
            </div>
            <div className="bg-[#1e1f20] p-6 rounded-2xl border border-[#3c4043] flex flex-col">
              <span className="text-green-500 font-bold mb-2">Option C</span>
              <h3 className="text-xl font-bold text-white mb-4">International Licensing</h3>
              <p className="text-[#9aa0a6] text-sm flex-1">License the platform to allied countries and regional government agencies for digital transformation.</p>
              <div className="mt-6 font-mono text-xs text-green-400">Global TAM: $10B+</div>
            </div>
          </div>
        );
      default: return <GeminiChat />;
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className="flex-1 overflow-y-auto bg-[#131314] relative">
        <header className="sticky top-0 z-50 bg-[#131314]/80 backdrop-blur-md border-b border-[#3c4043] px-8 py-4 flex justify-between items-center">
          <div className="text-[#9aa0a6] text-sm font-medium">
             Project <span className="text-white">DefenseCore</span> / Business Model Visualization
          </div>
          <button 
             onClick={() => setActiveSection('assistant')}
             className="flex items-center gap-2 px-4 py-2 bg-[#1e1f20] border border-[#3c4043] rounded-full text-sm text-white hover:bg-[#2c2d2e] transition-colors"
          >
            <Sparkles size={16} className="text-blue-400" />
            AI Assistant
          </button>
        </header>

        <div className="p-8 pb-24">
          {activeSection !== 'start' && (
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white capitalize">{activeSection.replace('-', ' ')}</h2>
              <div className="h-1 w-12 bg-blue-500 mt-2 rounded-full" />
            </div>
          )}
          {renderContent()}
        </div>

        {/* Floating Chat Trigger (Mini) */}
        {activeSection !== 'assistant' && activeSection !== 'start' && (
          <button 
            onClick={() => setActiveSection('assistant')}
            className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 group"
          >
            <Sparkles className="text-white group-hover:animate-pulse" />
          </button>
        )}
      </main>
    </div>
  );
};

export default App;
