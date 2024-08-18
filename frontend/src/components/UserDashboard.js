import React, { useState, useEffect } from 'react';

function UserDashboard() {
    const [user, setUser] = useState({
        savedJobs: [],
        appliedJobs: [],
    });

    useEffect(() => {
        // Fetch user data including saved jobs and applied jobs
        fetch('/api/users/me') // Assuming a route that returns the logged-in user's data
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(err => alert('Error fetching user data'));
    }, []);

    return ( <
        div >
        <
        h2 > User Dashboard < /h2> <
        div >
        <
        h3 > Saved Jobs < /h3> <
        ul > {
            user.savedJobs.map(job => ( <
                li key = { job._id } > { job.title } - { job.company } < /li>
            ))
        } <
        /ul> <
        /div> <
        div >
        <
        h3 > Applied Jobs < /h3> <
        ul > {
            user.appliedJobs.map(job => ( <
                li key = { job._id } > { job.title } - { job.company } < /li>
            ))
        } <
        /ul> <
        /div> <
        /div>
    );
}

export default UserDashboard;