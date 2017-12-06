import React, { Component } from 'react';
import {ListItem} from 'material-ui/List';
import Clear from 'material-ui/svg-icons/content/clear';
import Divider from 'material-ui/Divider';

class ProjectItem extends Component {
  deleteProject(id) {
      this.props.onDelete(id);
  }
  render() {
    return (
      <div className="wrapListItem">
         <Divider />
        <ListItem primaryText={this.props.project.title} secondaryText={this.props.project.category} rightIcon={<Clear />} />
        <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)} className="listAction"></a>
      </div>
    );
  }
}

export default ProjectItem;