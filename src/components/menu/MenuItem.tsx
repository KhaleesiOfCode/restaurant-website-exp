"use client";

import { useState } from "react";
import type { MenuItem as MenuItemType } from "@/data/menu";
import { cn } from "@/lib/utils";

interface MenuItemProps {
  item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={cn(
        "group border-b border-stone-100 last:border-b-0 transition-all duration-300 cursor-pointer",
        isExpanded ? "bg-brand-50/40" : "hover:bg-stone-50"
      )}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start justify-between gap-4 py-5 px-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-display text-lg text-stone-900">{item.name}</h4>
            {item.dietary?.map((d) => (
              <span
                key={d}
                className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-stone-100 text-stone-500 font-medium"
              >
                {d}
              </span>
            ))}
          </div>
          <p className="text-sm text-stone-500 leading-relaxed">{item.description}</p>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          <span className="font-display text-lg text-brand-700 whitespace-nowrap">{item.price}</span>
          <span
            className={cn(
              "text-xs text-stone-400 transition-opacity duration-300",
              isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}
          >
            {isExpanded ? "▲ less" : "▼ details"}
          </span>
        </div>
      </div>

      <div
        className={cn(
          "grid transition-all duration-400 ease-in-out",
          isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-5 flex flex-col sm:flex-row gap-6 text-sm">
            {item.origin && (
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
                <span className="text-stone-600">
                  <span className="text-stone-400 uppercase tracking-wider text-[10px]">Origin</span>
                  <br />
                  {item.origin}
                </span>
              </div>
            )}
            {item.pairing && (
              <div className="flex items-center gap-2">
                <span className="text-lg leading-none">🍷</span>
                <span className="text-stone-600">
                  <span className="text-stone-400 uppercase tracking-wider text-[10px]">Pairs with</span>
                  <br />
                  {item.pairing}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
