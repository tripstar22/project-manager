import React, { Component } from 'react';
import ProjectItem from './projectItem';
import uuid from 'uuid';
import {CardTitle} from 'material-ui/Card';
import {List} from 'material-ui/List';

class Projects extends Component {
  deleteProject(id){
      this.props.onDelete(id);
  }
  render() {
    let projectItems;
    if(this.props.projects) {
        projectItems = this.props.projects.map(project => {
            return (
                <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
            );
        });
    }
    return (
      <div className="Projects">
        <CardTitle title="Lastest projects" />
        <List>
          {projectItems}
        </List>
      </div>
    );
  }
}

export default Projects;
