import OtherPage from "@/components/pages/OtherPage";
import ProjectCard from "@/components/ui/ProjectCard";
import JsonLd from "@/components/ui/JsonLd";
import SectionHeading from "@/components/ui/SectionHeading";
import { featuredProjects, moreProjects } from "@/data/projects";
import { breadcrumbJsonLd, buildMetadata, pageSeo } from "@/lib/seo";

export const metadata = buildMetadata(pageSeo.work);

export default function OurWorkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Our Work", path: "/our-work" },
        ])}
      />
      <OtherPage slug="our-work">
        <div className="container work-layout">
          <div className="work-featured">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                variant="featured"
              />
            ))}
          </div>
          <SectionHeading label="MORE BUILDS" />
          <div className="work-grid">
            {moreProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} variant="grid" />
            ))}
          </div>
        </div>
      </OtherPage>
    </>
  );
}
