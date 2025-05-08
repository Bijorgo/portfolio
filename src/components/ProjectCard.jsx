import { Link } from "react-router"

export default function ProjectCard({ projects }){

    return(
        <div>
            <h1>Hello from the project card</h1>

            <div>
                {projects.map( project => (
                    <div
                    key={project.id}
                    >
                        <img
                        src= {project.photo}
                        alt= {project.alt || "project image"}
                        />
                        <h4>Title:{project.title}</h4>

                        <Link
                            to={`/details/${project.id}`}
                            >
                                Details
                        </Link>
                    </div>
                ))}
            </div>
            <p>test</p>
        </div>
    )
}