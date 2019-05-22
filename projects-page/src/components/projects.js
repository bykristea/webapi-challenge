import React, { Component } from 'react';
import axios from 'axios';
import Project from './project.js';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
          projects: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:9000/api/projects')
          .then(res => {
            this.setState({
              projects: res.data
            });
          })
          .catch(err => {
            console.log(err);
          });
    }

    render() {
      
        return (
          <div>
          {this.state.projects.map(project => {
              return (
                  <Project key={project.id}
                      name={project.name}
                      description={project.description}
                      completed={project.completed}
                  />
              )
          })}
        </div>
        );
    }
}

export default Projects;