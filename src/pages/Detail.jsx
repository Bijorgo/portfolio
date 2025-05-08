import { useParams } from "react-router";
import { useEffect, useState } from "react";
import DetailCard from "../components/DetailCard";

export default function Detail(){
    const params = useParams();
    const selectProject = params.id;
    const [ details, setDetails ] = useState("")
    useEffect( () => {
        fetch('')
        .then(r => r.json())
        .then( data => setDetails(data))
        .catch( error => console.log.error(error))
    }, [])
    return(
        <div>
            <h1>This is the detail page for one project</h1>
            <p>This page will use params to access the correct project
                and provide a demo, description, and link to GitHub.
                If available, it will also provide a URL to the project
            </p>
            <DetailCard details={details}/>
        </div>
    )
}