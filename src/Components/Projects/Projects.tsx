import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default function Projects() {
  return (
    <>
      <section id="projects" className="projects qIYQfQ">
        <h2>Project Highlights</h2>
        <div className="project-grid">
          <ProjectCard
            title="Todo App"
            description="short description of the project here"
            imageUrl="https://user-images.githubusercontent.com/30938455/159538929-06c354c3-f5a4-4c53-8a95-6d6ddb43e6a8.gif"
          />
          <ProjectCard
            title="Random Password Generator"
            description="short description of the project here"
            imageUrl="https://user-images.githubusercontent.com/30938455/180267897-6c371c44-1ba7-4699-bf8e-1dd47670d3d9.gif"
          />
          <ProjectCard
            title="NFT Portfolio Tracker"
            description="short description of the project here"
            imageUrl="https://user-images.githubusercontent.com/30938455/180270516-ca1aa46d-8a10-45a1-a2b7-2bc60eadc7a8.gif"
          />
          <ProjectCard
            title=""
            description="short description of the project here"
            imageUrl=""
          />
          <ProjectCard
            title=""
            description="short description of the project here"
            imageUrl=""
          />
          <ProjectCard
            title=""
            description="short description of the project here"
            imageUrl=""
          />
        </div>
      </section>
    </>
  );
}
