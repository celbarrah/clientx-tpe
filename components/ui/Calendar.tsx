"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DAYS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
const MONTHS = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

/* Return available days: Mon–Fri only, not past */
function getAvailableDays(year: number, month: number): Set<number> {
  const today = new Date();
  const available = new Set<number>();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d);
    const dow = date.getDay(); // 0=Sun, 6=Sat
    if (dow >= 1 && dow <= 5 && date >= today) available.add(d);
  }
  return available;
}

/* First weekday (Mon=0) of month */
function firstDayOffset(year: number, month: number): number {
  const d = new Date(year, month, 1).getDay();
  return d === 0 ? 6 : d - 1;
}

export function Calendar() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selected, setSelected] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const available = getAvailableDays(year, month);
  const offset = firstDayOffset(year, month);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const TIME_SLOTS = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];

  const prev = () => {
    if (month === 0) { setYear(y => y - 1); setMonth(11); }
    else setMonth(m => m - 1);
    setSelected(null); setSelectedTime(null);
  };
  const next = () => {
    if (month === 11) { setYear(y => y + 1); setMonth(0); }
    else setMonth(m => m + 1);
    setSelected(null); setSelectedTime(null);
  };

  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-md overflow-hidden">
      {/* Month nav */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#2a2a2a]">
        <button
          onClick={prev}
          className="p-1.5 text-[#888] hover:text-[#32DC32] transition-colors rounded-sm hover:bg-[#222]"
        >
          <ChevronLeft size={16} />
        </button>
        <span className="font-heading font-bold text-[14px] text-white">
          {MONTHS[month]} {year}
        </span>
        <button
          onClick={next}
          className="p-1.5 text-[#888] hover:text-[#32DC32] transition-colors rounded-sm hover:bg-[#222]"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 px-3 pt-3 pb-1">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-[10px] font-medium text-[#555] py-1">
            {d}
          </div>
        ))}
      </div>

      {/* Day grid */}
      <div className="grid grid-cols-7 px-3 pb-3 gap-y-0.5">
        {/* empty offset cells */}
        {Array.from({ length: offset }).map((_, i) => (
          <div key={`e${i}`} />
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
          const isAvail = available.has(day);
          const isSel = selected === day;
          return (
            <button
              key={day}
              disabled={!isAvail}
              onClick={() => { setSelected(day); setSelectedTime(null); }}
              className={`
                aspect-square flex items-center justify-center text-[12px] rounded-sm transition-all
                ${isSel
                  ? "bg-[#32DC32] text-[#0a0a0a] font-bold"
                  : isAvail
                  ? "text-white hover:bg-[rgba(50,220,50,0.15)] hover:text-[#32DC32] cursor-pointer"
                  : "text-[#333] cursor-default"
                }
              `}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* Time slots — shown when day selected */}
      {selected && (
        <div className="border-t border-[#2a2a2a] px-4 py-4">
          <p className="text-[#888] text-[11px] uppercase tracking-wider mb-3">
            Choisir un créneau horaire
          </p>
          <div className="grid grid-cols-4 gap-2">
            {TIME_SLOTS.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTime(t)}
                className={`
                  py-1.5 text-xs rounded-sm border transition-all font-medium
                  ${selectedTime === t
                    ? "bg-[#32DC32] border-[#32DC32] text-[#0a0a0a]"
                    : "border-[#333] text-[#bbb] hover:border-[#32DC32] hover:text-[#32DC32]"
                  }
                `}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Confirmed slot */}
      {selected && selectedTime && (
        <div className="mx-4 mb-4 px-4 py-2.5 bg-[rgba(50,220,50,0.08)] border border-[rgba(50,220,50,0.3)] rounded-sm">
          <p className="text-[#32DC32] text-sm font-semibold text-center">
            ✓ Créneau sélectionné : {DAYS[(new Date(year, month, selected).getDay() + 6) % 7]} {selected} {MONTHS[month]} à {selectedTime}
          </p>
        </div>
      )}
    </div>
  );
}
