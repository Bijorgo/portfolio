import { Link } from "react-router"

export default function ProjectCard({ projects }){

    return(
        <div>
            <h1>Hello from the project card</h1>
            <p>This is where one project will be formatted</p>

            <div>
                {projects.map( project => (
                    <div
                    key={project.id}
                    >
                        <img
                        src= {project.photo}
                        alt= {project.alt}
                        />
                        <Link
                            to={'/details'}
                            >
                                Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}