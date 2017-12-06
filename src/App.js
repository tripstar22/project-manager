import React, { Component } from 'react';
import Projects from './components/projects';
import AddProject from './components/addProject';
import logo from './logo.svg';
import './App.css';
import uuid from 'uuid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card} from 'material-ui/Card';

class App extends Component {
  constructor(){
    super();
    this.state = {
        projects: []
    }
  }

  getProjects() {
    this.setState({projects: [
      {
        id:uuid.v4(),
        title: 'Business website',
        category: 'Web design'
      },
      {
         id:uuid.v4(),
          title: 'Social app',
          category: 'Mobile development'
        },
        {
          id:uuid.v4(),
          title: 'Ecommerce shopping cart',
          category: 'Web development'
        }
    ]});
  }

  componentWillMount() {
    this.getProjects();
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Card>
            <AddProject addProject={this.handleAddProject.bind(this)} />
            <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
