import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function JobDetails() {
    const { id } = useParams();
    const [job, setJob] = useState(null);

    useEffect(() => {
        fetch(`/api/jobs/${id}`)
            .then(response => response.json())
            .then(data => setJob(data));
    }, [id]);

    if (!job) {
        return <div > Loading... < /div>;
    }

    return ( <
        div >
        <
        h2 > { job.title } < /h2> <
        p > Company: { job.company } < /p> <
        p > Location: { job.location } < /p> <
        p > Salary: { job.salary } < /p> <
        p > Type: { job.type } < /p> <
        div >
        <
        h3 > Job Description < /h3> <
        p > { job.description } < /p> <
        /div> <
        Link to = { `/apply/${job._id}` } >
        <
        button > Apply Now < /button> <
        /Link> <
        /div>
    );
}

export default JobDetails;