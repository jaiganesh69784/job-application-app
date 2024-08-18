import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return ( <
        div >
        <
        section className = "hero-section" >
        <
        h1 > Find Your Dream Job < /h1> <
        p > Search
        for jobs that match your skills and interests. < /p> <
        Link to = "/jobs" >
        <
        button > Browse Jobs < /button> <
        /Link> <
        /section> <
        /div>
    );
}

export default HomePage;