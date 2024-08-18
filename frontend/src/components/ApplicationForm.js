import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ApplicationForm() {
    const { jobId } = useParams();
    const [applicant, setApplicant] = useState({
        name: '',
        email: '',
        coverLetter: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setApplicant((prevApplicant) => ({
            ...prevApplicant,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/applications', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({...applicant, job: jobId }),
            })
            .then(response => response.json())
            .then(data => alert('Application submitted successfully!'))
            .catch(err => alert('Error submitting application'));
    };

    return ( <
        div >
        <
        h2 > Apply
        for Job < /h2> <
        form onSubmit = { handleSubmit } >
        <
        div >
        <
        label > Name < /label> <
        input type = "text"
        name = "name"
        value = { applicant.name }
        onChange = { handleChange }
        required /
        >
        <
        /div> <
        div >
        <
        label > Email < /label> <
        input type = "email"
        name = "email"
        value = { applicant.email }
        onChange = { handleChange }
        required /
        >
        <
        /div> <
        div >
        <
        label > Cover Letter < /label> <
        textarea name = "coverLetter"
        value = { applicant.coverLetter }
        onChange = { handleChange }
        /> <
        /div> <
        button type = "submit" > Submit Application < /button> <
        /form> <
        /div>
    );
}

export default ApplicationForm;