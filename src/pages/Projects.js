import { Container } from "react-bootstrap";

function Projects({ projects }) {
    const projectsList = projects.map((project, index) => (
      <div key={index}>
        <Container className="card-container">
        <h1>{project.name}</h1>
        <img src={project.image} alt={project.name} />
        <br/>
        <a href={project.git} target='_blank' rel="noopener noreferrer">
          <button>Github</button>
        </a>
        <a href={project.live} target='_blank' rel="noopener noreferrer" >
          <button>Live Site</button>
        </a>
        </Container>
      </div>
    ))
    return (
        <>
        <h2 className="project-h2">My Projects:</h2>
        <h2>{projectsList}</h2>
        </>
        );
  }
  
  export default Projects;