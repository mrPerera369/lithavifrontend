"use client";

import { useState } from "react";

type SoftwareItem = {
  name: string;
  icon: string; // path relative to /public
};

const SOFTWARE: SoftwareItem[] = [
  { name: "Revit", icon: "/assets/images/revit.svg" },
  { name: "Navisworks", icon: "/assets/images/navisworks.svg" },
  { name: "RIB CostX", icon: "/assets/images/rib costx.svg" },
  { name: "Cubicost 5D BIM", icon: "/assets/images/cubicost.svg" },
  { name: "PlanSwift", icon: "/assets/images/planswift.svg" },
  { name: "AutoCAD", icon: "/assets/images/autocad.svg" },
  { name: "MS Project", icon: "/assets/images/msproject.svg" },
  { name: "Primavera", icon: "/assets/images/oracle.svg" },
  { name: "Microsoft Office", icon: "/assets/images/office.svg" },
  { name: "SAP", icon: "/assets/images/sap.svg" },
  { name: "RIB Candy", icon: "/assets/images/ribcandy.svg" },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter((w) => /[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function SoftwareIcon({ name, icon }: { name: string; icon: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm"
        style={{
          background: "var(--color-navy-900)",
          color: "var(--color-gold-500)",
          fontFamily: "var(--font-display)",
          fontSize: "0.7rem",
          fontWeight: 700,
        }}
      >
        {initials(name)}
      </span>
    );
  }

  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm"
      
    >
      <img
        src={icon}
        alt={`${name} logo`}
        className="h-10 w-10 object-contain"
        onError={() => setFailed(true)}
      />
    </span>
  );
}

export default function SoftwareGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {SOFTWARE.map(({ name, icon }) => (
        <div
          key={name}
          className="flex items-center gap-3 rounded-md p-5"
          style={{ background: "var(--color-white)", boxShadow: "var(--shadow-card)" }}
        >
          <SoftwareIcon name={name} icon={icon} />
          <span style={{ fontSize: "var(--fs-body-sm)", fontWeight: 500, color: "var(--color-navy-950)" }}>
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}