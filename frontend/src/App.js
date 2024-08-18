import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import ApplicationForm from './components/ApplicationForm';
import EmployerDashboard from './components/EmployerDashboard';
import UserDashboard from './components/UserDashboard';

function App() {
    return ( <
        Router >
        <
        Switch >
        <
        Route path = "/"
        exact component = { HomePage }
        /> <
        Route path = "/jobs"
        exact component = { JobList }
        /> <
        Route path = "/jobs/:id"
        component = { JobDetails }
        /> <
        Route path = "/apply/:jobId"
        component = { ApplicationForm }
        /> <
        Route path = "/employer-dashboard"
        component = { EmployerDashboard }
        /> <
        Route path = "/user-dashboard"
        component = { UserDashboard }
        /> <
        /Switch> <
        /Router>
    );
}

export default App;