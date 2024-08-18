import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function JobList() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('/api/jobs')
            .then(response => response.json())
            .then(data => setJobs(data));
    }, []);

    return ( <
        div >
        <
        h2 > Job Listings < /h2> <
        div className = "job-list" > {
            jobs.map(job => ( <
                div key = { job._id }
                className = "job-card" >
                <
                h3 > { job.title } < /h3> <
                p > { job.company } < /p> <
                p > { job.location } < /p> <
                Link to = { `/jobs/${job._id}` } > View Details < /Link> <
                /div>
            ))
        } <
        /div> <
        /div>
    );
}

export default JobList;