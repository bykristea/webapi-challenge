import React from 'react';

const Project = props => (
    <div>
        <p>{props.name}</p>
        <p>{props.description}</p>
        <p>{props.completed}</p>
    </div>
);

export default Project;