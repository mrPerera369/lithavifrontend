import { Globe2, Milestone, Building2, Handshake } from "lucide-react";

const STANDARDS = [
  {
    key: "fidic",
    name: "FIDIC",
    fullName: "Conditions of Contract for Construction",
    icon: Handshake,
    tag: "International contract for construction projects",
    image: "/assets/images/fidic.png",
  },
  {
    key: "nrm2",
    name: "NRM2",
    fullName: "New Rules of Measurement",
    icon: Building2,
    tag: "Detailed measurement for building works",
    image: "/assets/images/nrm2.jpg",
  },
  {
    key: "pomi",
    name: "POMI",
    fullName: "Principles of Measurement (International)",
    icon: Globe2,
    tag: "Universal method for all construction works",
    image: "/assets/images/pomi1.png",
  },
  {
    key: "cesmm4",
    name: "CESMM4",
    fullName: "Civil Engineering Standard Method of Measurement",
    icon: Milestone,
    tag: "Standard method for civil engineering projects",
    image: "/assets/images/cesmm4.jpg",
  }
 
  
];

export default function StandardsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {STANDARDS.map(
        ({ key, name, fullName, icon: Icon, tag, image }) => (
          <div
            key={key}
            className="overflow-hidden rounded-md"
            style={{
              background: "var(--color-paper)",
              border: "1px solid var(--color-paper-line)",
            }}
          >
            {/* Book Cover */}
            <div
              className="flex h-64 items-center justify-center overflow-hidden"
              style={{
                background: "var(--color-white)",
              }}
            >
              <img
                src={image}
                alt={`${name} ${fullName}`}
                className="h-full w-full object-contain p-4"
              />
            </div>

            {/* Content */}
            <div className="p-7">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-sm"
                style={{
                  border: "1.5px solid var(--color-paper-line)",
                  background: "var(--color-white)",
                }}
              >
                <Icon
                  size={22}
                  style={{ color: "var(--color-navy-500)" }}
                />
              </div>

              <h3
                className="mt-6"
                style={{ fontSize: "var(--fs-h5)" }}
              >
                {name}
              </h3>

              <p
                className="mt-2.5"
                style={{
                  color: "var(--color-slate-600)",
                  fontSize: "var(--fs-body-sm)",
                }}
              >
                {fullName}. {tag}.
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
}