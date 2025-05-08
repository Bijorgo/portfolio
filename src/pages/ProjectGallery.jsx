import { useState, useEffect } from "react"
import ProjectCard from "../components/ProjectCard";

export default function ProjectGallery(){
    const [ projects, setProjects ] = useState([])

    // Initial GET fetch request
    useEffect(()=> {
        fetch("http://localhost:5000/projects")
        .then(r => r.json())
        .then(data => setProjects(data))
        .catch(error => console.log(error))
    }, [])

    return(
        <div>
            <h1>Projects</h1>
            <ProjectCard projects={projects}/>
        </div>
    )
}