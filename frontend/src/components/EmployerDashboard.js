import React, { useState, useEffect } from 'react';

function EmployerDashboard() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('/api/jobs')
            .then(response => response.json())
            .then(data => setJobs(data));
    }, []);

    const handleDelete = (jobId) => {
        fetch(`/api/jobs/${jobId}`, {
                method: 'DELETE',
            })
            .then(() => setJobs(jobs.filter(job => job._id !== jobId)))
            .catch(err => alert('Error deleting job'));
    };

    return ( <
        div >
        <
        h2 > Employer Dashboard < /h2> <
        div >
        <
        h3 > Your Job Listings < /h3> <
        ul > {
            jobs.map(job => ( <
                li key = { job._id } > { job.title } - { job.company } <
                button onClick = {
                    () => handleDelete(job._id) } > Delete < /button> <
                /li>
            ))
        } <
        /ul> <
        /div> <
        /div>
    );
}

export default EmployerDashboard;