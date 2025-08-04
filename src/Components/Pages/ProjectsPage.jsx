import CTAContactCard from "./CTAContactCard";
import ProjectCarousel from "./ProjectCarousel";

function ProjectsPage() {
  return (
    <div className="mt-20 px-6 md:px-3 lg:px-0">
      <ProjectCarousel />
      <CTAContactCard />
    </div>
  );
}

export default ProjectsPage;
