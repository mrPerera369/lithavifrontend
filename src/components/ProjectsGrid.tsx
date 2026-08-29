import { getProjects } from "@/lib/api";
import ProjectsGridInteractive from "./ProjectsGridInteractive";

export default async function ProjectsGrid() {
  const projects = await getProjects();

  return (
    <section className="py-10 lg:py-10" style={{ background: "var(--color-white)" }}>
      <div className="container-page">
        {/* Notice */}
        

        <ProjectsGridInteractive projects={projects} />
      </div>
    </section>
  );
}
