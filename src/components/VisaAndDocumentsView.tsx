import React from 'react';
import { 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink, 
  Calendar, 
  Building2, 
  CreditCard,
  Plane,
  Info
} from 'lucide-react';
import { TripPreferences } from '../data/laplandData';

interface VisaAndDocumentsViewProps {
  preferences: TripPreferences;
  formatMoney: (inr: number) => string;
}

export const VisaAndDocumentsView: React.FC<VisaAndDocumentsViewProps> = ({
  preferences,
  formatMoney
}) => {
  return (
    <div className="space-y-8">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Section 10</span>
            <span className="text-xs text-slate-500">· Official Schengen Regulatory Requirements</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <FileText className="w-6 h-6 text-purple-400" />
            Finland Schengen Visa & Travel Documentation Guide
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Official guidelines for Indian passport holders applying for a short-stay tourist visa (Type C) to Finland.
          </p>
        </div>

        <a
          href="https://finlandvisa.fi/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-all cursor-pointer"
        >
          <span>Official Portal: finlandvisa.fi</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Key Visa Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
          <span className="text-slate-400 text-[11px] block">Visa Type</span>
          <strong className="text-white text-sm block">Schengen Tourist Visa (Type C)</strong>
          <span className="text-emerald-400 text-[11px]">Valid across 29 Schengen states</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
          <span className="text-slate-400 text-[11px] block">Visa Fee (Official)</span>
          <strong className="text-white text-sm block">€90 (~₹8,100) + VFS Fee</strong>
          <span className="text-slate-400 text-[11px]">Approx. ₹10,400 total per adult</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
          <span className="text-slate-400 text-[11px] block">When to Apply</span>
          <strong className="text-white text-sm block">1–15 October 2026</strong>
          <span className="text-amber-400 text-[11px]">Allow 15–30 calendar days for processing</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
          <span className="text-slate-400 text-[11px] block">Application Center</span>
          <strong className="text-white text-sm block">VFS Global India</strong>
          <span className="text-slate-400 text-[11px]">Centers in Hyderabad, Chennai, Delhi, Mumbai</span>
        </div>
      </div>

      {/* Mandatory Requirements Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Document Checklist */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Mandatory Documents Required by Embassy of Finland
          </h3>

          <ul className="space-y-3 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold shrink-0">1.</span>
              <div>
                <strong className="text-white block">Valid Passport:</strong>
                <span>Must be valid for at least 3 months after departure from Schengen, issued within the last 10 years, with at least 2 blank pages.</span>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold shrink-0">2.</span>
              <div>
                <strong className="text-white block">Schengen Travel Insurance Policy:</strong>
                <span>Minimum medical coverage of €30,000 (approx. ₹27 Lakhs) covering emergency medical care, hospitalization, repatriation, and winter outdoor activities.</span>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold shrink-0">3.</span>
              <div>
                <strong className="text-white block">Proof of Financial Means:</strong>
                <span>Original stamped bank statement for the last 3 to 6 months showing consistent balance. Finland guidelines recommend at least €30 to €50 per day plus prepaid accommodation.</span>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold shrink-0">4.</span>
              <div>
                <strong className="text-white block">Proof of Accommodation:</strong>
                <span>Confirmed hotel booking vouchers in Rovaniemi / Lapland matching the exact travel dates (20–30 Dec 2026).</span>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold shrink-0">5.</span>
              <div>
                <strong className="text-white block">Flight Reservation / Itinerary:</strong>
                <span>Round-trip flight booking showing departure from Visakhapatnam to Rovaniemi and return.</span>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold shrink-0">6.</span>
              <div>
                <strong className="text-white block">Proof of Employment / Leave NOC:</strong>
                <span>Letter from employer approving leave dates, or GST / business registration for self-employed travelers.</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Step-by-Step Procedure */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Calendar className="w-4 h-4 text-amber-400" />
            Step-by-Step Application Timeline (For Dec 2026 Trip)
          </h3>

          <div className="space-y-4 text-xs">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="font-bold text-amber-400 text-xs">Step 1: September 2026</span>
              <p className="text-slate-300">
                Book flight and hotel reservations. Gather your 6-month bank statements, salary slips, and purchase €30,000 Schengen travel insurance online.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="font-bold text-cyan-400 text-xs">Step 2: Early October 2026</span>
              <p className="text-slate-300">
                Fill out the electronic visa application form at <strong>finlandvisa.fi</strong>. Book your biometrics appointment at the nearest VFS Global center (e.g. Hyderabad / Chennai).
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="font-bold text-purple-400 text-xs">Step 3: Mid October 2026 (Appointment)</span>
              <p className="text-slate-300">
                Attend your VFS appointment, submit physical document dossier, pay application fees, and provide fingerprints and biometric photograph.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="font-bold text-emerald-400 text-xs">Step 4: November 2026 (Collection)</span>
              <p className="text-slate-300">
                Receive your passport with stamped Schengen Visa sticker delivered via secure courier. You are ready to fly to the Arctic!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
