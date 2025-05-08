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
                        src= {project.photo || "https://i.imgur.com/uW74V56.jpeg"}
                        alt= {project.alt || "project image"}
                        />
                        <Link
                            to={'/details'}
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