import { useState, useEffect } from "react"
import ProjectCard from "../componenets/ProjectCard";

export default function ProjectGallery(){
    const [ photos, setPhotos ] = useState([])

    // Initial GET fetch request
    useEffect(()=> {
        fetch("http://localhost:5000/projects")
        .then(r => r.json())
        .then(error => console.log(error))
    }, [])

    return(
        <div>
            <h1>Projects</h1>
            <ProjectCard photos={photos}/>
        </div>
    )
}