import { getProjects } from "@/lib/api";
import ProjectsGridInteractive from "./ProjectsGridInteractive";

export default async function ProjectsGrid() {
  const projects = await getProjects();

  return (
    <section className="py-24 lg:py-32" style={{ background: "var(--color-white)" }}>
      <div className="container-page">
        {/* Notice */}
        <div
          className="rounded-md p-6"
          style={{
            background: "var(--color-gold-100)",
            border: "1px solid var(--color-gold-500)",
          }}
        >
          <p style={{ color: "var(--color-navy-950)", fontSize: "var(--fs-body-sm)" }}>
            Our published project portfolio is growing. We only feature case
            studies with client permission, so the sectors below currently
            show the kind of work we support rather than named projects.
            Filter by sector, and check back as verified case studies are
            added.
          </p>
        </div>

        <ProjectsGridInteractive projects={projects} />
      </div>
    </section>
  );
}
