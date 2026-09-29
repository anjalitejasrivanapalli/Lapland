import React, { useState } from 'react';
import { 
  Snowflake, 
  Thermometer, 
  Sun, 
  Moon, 
  ShieldCheck, 
  Check, 
  Sparkles, 
  BatteryCharging, 
  HelpCircle,
  Flame
} from 'lucide-react';
import { PACKING_LIST_ITEMS } from '../data/laplandData';

export const WeatherAndPackingView: React.FC = () => {
  const [checkedItemIds, setCheckedItemIds] = useState<string[]>([
    'p1', 'p2', 'p5', 'p7', 'p9', 'p13'
  ]);

  const toggleCheck = (id: string) => {
    if (checkedItemIds.includes(id)) {
      setCheckedItemIds(checkedItemIds.filter(i => i !== id));
    } else {
      setCheckedItemIds([...checkedItemIds, id]);
    }
  };

  const categories = Array.from(new Set(PACKING_LIST_ITEMS.map(item => item.category)));

  return (
    <div className="space-y-8">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Section 11</span>
            <span className="text-xs text-slate-500">· Arctic Climate & Winter Survival</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Snowflake className="w-6 h-6 text-cyan-400" />
            December Weather in Lapland & Interactive Packing Checklist
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Learn the science of Arctic dressing (the 3-layer system) so you remain warm, dry, and comfortable in sub-zero snow.
          </p>
        </div>

        <div className="text-xs bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300">
          Packed: <strong>{checkedItemIds.length}</strong> / {PACKING_LIST_ITEMS.length} essentials
        </div>
      </div>

      {/* 4 Arctic Weather Characteristic Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        {/* Temperature */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
          <div className="flex items-center gap-2 text-cyan-400">
            <Thermometer className="w-4 h-4" />
            <span className="font-semibold text-[11px] uppercase tracking-wider">Temperature Range</span>
          </div>
          <strong className="text-white text-base block">-10°C to -25°C</strong>
          <p className="text-slate-400 text-[11px]">
            Dry, crisp cold that is easy to withstand when properly layered. Indoors and hotel rooms are centrally heated to a toasty +21°C.
          </p>
        </div>

        {/* Daylight / Kaamos */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
          <div className="flex items-center gap-2 text-amber-400">
            <Sun className="w-4 h-4" />
            <span className="font-semibold text-[11px] uppercase tracking-wider">Polar Night (Kaamos)</span>
          </div>
          <strong className="text-white text-base block">2 to 3 Hours Twilight</strong>
          <p className="text-slate-400 text-[11px]">
            The sun stays below the horizon, creating a mystical soft blue, violet, and pastel pink glow between 10:30 AM and 1:30 PM.
          </p>
        </div>

        {/* Snow Depth */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
          <div className="flex items-center gap-2 text-sky-400">
            <Snowflake className="w-4 h-4" />
            <span className="font-semibold text-[11px] uppercase tracking-wider">Snow Conditions</span>
          </div>
          <strong className="text-white text-base block">40 cm to 70 cm Snow</strong>
          <p className="text-slate-400 text-[11px]">
            Thick blanket of powdery natural snow. Forest trails, frozen lakes, and tree branches are covered in heavy white snow (tykkylumi).
          </p>
        </div>

        {/* Night / Aurora Sky */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
          <div className="flex items-center gap-2 text-emerald-400">
            <Moon className="w-4 h-4" />
            <span className="font-semibold text-[11px] uppercase tracking-wider">Dark Night Skies</span>
          </div>
          <strong className="text-white text-base block">20+ Hours of Darkness</strong>
          <p className="text-slate-400 text-[11px]">
            Maximum night hours mean peak Northern Lights visibility windows starting as early as 17:00 through 03:00 whenever skies are clear.
          </p>
        </div>
      </div>

      {/* The 3-Layer System Graphic Guide */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 space-y-4">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <Flame className="w-4 h-4 text-orange-400" />
          The Golden Rule of Arctic Dressing: The 3-Layer System (NO COTTON!)
        </h3>
        <p className="text-xs text-slate-300">
          Cotton absorbs sweat and holds moisture against your skin, chilling you dangerously. Always dress in breathable technical layers:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              Layer 1: Base (Moisture Control)
            </span>
            <strong className="text-white text-sm block">100% Merino Wool Thermals</strong>
            <p className="text-slate-400">
              Snug fit against your skin. Traps body heat while wicking away moisture so you remain dry during active snow walks.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Layer 2: Mid (Insulation)
            </span>
            <strong className="text-white text-sm block">Fleece or Wool Sweater</strong>
            <p className="text-slate-400">
              Creates dead-air thermal pockets. Can be easily unzipped when walking into heated cafes or Santa Claus Village stores.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Layer 3: Outer (Shield)
            </span>
            <strong className="text-white text-sm block">Windproof Down Parka & Ski Pants</strong>
            <p className="text-slate-400">
              Blocks sub-zero wind chill and keeps powder snow from penetrating. Look for insulated hoods with faux-fur ruffs to protect cheeks.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Checkable Winter Packing Checklist */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            Interactive Packing Checklist (Check items as you pack)
          </h3>
          <span className="text-xs text-slate-400">
            {checkedItemIds.length} of {PACKING_LIST_ITEMS.length} items checked
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((category) => {
            const items = PACKING_LIST_ITEMS.filter(i => i.category === category);
            return (
              <div
                key={category}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-3"
              >
                <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
                  <span>•</span> {category}
                </h4>

                <div className="space-y-2">
                  {items.map((item) => {
                    const isChecked = checkedItemIds.includes(item.id);
                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleCheck(item.id)}
                        className={`flex items-start gap-3 p-2.5 rounded-xl border transition-all cursor-pointer ${
                          isChecked
                            ? 'bg-emerald-950/20 border-emerald-500/30 text-slate-200'
                            : 'bg-slate-950 border-slate-800/80 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all shrink-0 mt-0.5 ${
                            isChecked
                              ? 'bg-emerald-500 border-emerald-400 text-slate-950 font-bold'
                              : 'border-slate-700 bg-slate-900'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <span className={`text-xs ${isChecked ? 'line-through text-slate-400' : 'text-slate-200'}`}>
                          {item.item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
