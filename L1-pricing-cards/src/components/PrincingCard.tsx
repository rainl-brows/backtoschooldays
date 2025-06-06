import React, { useState } from "react";

type PricingCardProps = {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
};

const focusRing =
  "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-400 focus-visible:ring-offset-2";

export const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      tabIndex={0}
      className={`
        flex flex-col items-center justify-between
        w-full max-w-xs mx-auto sm:mx-0
        rounded-lg shadow-md
        border border-gray-200
        ${!isFeatured && !isFocused ? "bg-white" : ""}
        ${isFeatured && !isFocused ? "bg-slate-700 text-white border-slate-700" : ""}
        ${isFocused && isFeatured ? "bg-slate-200 text-slate-800 border-slate-200" : ""}
            ${isFocused && !isFeatured ? "bg-slate-800 text-white border-slate-800" : ""}
        transition
        duration-300
        ease-[cubic-bezier(0.23,1,0.32,1)]
        hover:scale-105 hover:shadow-2xl
        hover:z-10
        ${isFocused ? "ring-4 ring-blue-400 ring-offset-2" : ""}
        outline-none
      `}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      aria-label={`${plan} plan`}
    >
      <div className="w-full flex flex-col items-center px-8 py-8">
        <h3
          className={`text-lg font-semibold mb-2 ${
            isFeatured && isFocused
              ? "text-slate-800"
              : isFeatured && !isFocused
              ? "text-white"
              : isFocused && !isFeatured
              ? "text-white"
              : "text-gray-700"
          }`}
        >
          {plan.charAt(0).toUpperCase() + plan.slice(1)}
        </h3>
        <div
          className={`text-5xl font-bold mb-4 ${
            isFeatured && isFocused
              ? "text-slate-800"
              : isFeatured && !isFocused
              ? "text-white"
              : isFocused && !isFeatured
              ? "text-white"
              : "text-gray-700"
          }`}
        >
          ${price}
        </div>
        <div className="w-full border-t border-gray-200 mb-4" />
        <ul className="w-full flex flex-col gap-4 mb-6">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className={`text-center font-medium ${
                isFeatured && isFocused
                  ? "text-slate-800"
                  : isFeatured && !isFocused
                  ? "text-white"
                  : isFocused && !isFeatured
                  ? "text-white"
                  : "text-gray-700"
              }`}
            >
              {feature}
            </li>
          ))}
        </ul>
        <div className="w-full border-t border-gray-200 mb-6" />
        <button
          className={`
            w-full py-2 rounded-md font-semibold
            transition duration-200
            bg-transparent
            border-none
            ${isFeatured && isFocused && "text-white"}
            hover:bg-blue-600 hover:text-white
            focus-visible:bg-blue-600 focus-visible:text-white
            ${focusRing}
          `}
        >
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};