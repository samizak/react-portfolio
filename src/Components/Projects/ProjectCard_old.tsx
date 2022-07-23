export default function ProjectCard(props: {
  title: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <>
      <div className="project-card card">
        <h4>{props.title}</h4>
        <p>{props.description}</p>

        <div className="project-image-container">
          <img src={props.imageUrl} />
        </div>
      </div>
    </>
  );
}
