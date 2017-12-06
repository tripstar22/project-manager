import React, { Component } from 'react';
import uuid from 'uuid';
import {CardTitle, CardText, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
        newProject: {}
    }
  }

  static defaultProps = {
      categories: ['Web design', 'Web development', 'Mobile development']
  }

  handleSubmit(e) {
    if (this.refs.title.value === ''){
        alert('Title is required');
    } else {
        this.setState({newProject:{
            id:uuid.v4(),
            title: this.refs.title.value,
            category: this.refs.category.value
        }}, function() {
            this.props.addProject(this.state.newProject);
        });
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
        return <option key={category} value={category}>{category}</option>
    });
    return (
      <div>
        <CardTitle title="Add project" />
        <CardText>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label>Title</label>
                    <input type="text" ref="title" />
                </div>
                <div>
                    <label>Category</label>
                    <select ref="category">
                        {categoryOptions}
                    </select>
                </div>
                <CardActions>
                    <FlatButton label="Submit" type="submit" value="Submit" />
                </CardActions>
            </form>
        </CardText>
      </div>
    );
  }
}

export default AddProject;
