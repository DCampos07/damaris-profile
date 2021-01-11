import React from 'react'; 
import ProjectCards from '../../components/Portfolio'
import portfolio from '../../projects.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Projects () {  

    return (
        <section className="container">
          <div className="project">
            <h2 className="top-title">Bootcamp Projects</h2>
          </div>

          <Wrapper id="card-data">
            {portfolio.map((project) => (
              <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} topics={project.topics} description={project.description}/>
            ))}
          </Wrapper>
        </section>
    
    );
  }

export default Projects;
