import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListGroupItem, Label, ButtonToolbar, Button, Collapse } from 'react-bootstrap';

class TaskCard extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  render() {
    const { task } = this.props;
    return (
      <ListGroupItem
        data-id={task._id}
        onDoubleClick={() => this.setState({ open: !this.state.open })}
      >
        <div>
          <Label bsStyle="default">{task.time}</Label>&nbsp;
          {task.text}
        </div>
        <Collapse in={this.state.open}>
          <ButtonToolbar style={{ marginTop: 10, marginLeft: 0 }}>
            <Link to={`/task/edit/${task._id}`}>
              <Button>Edit</Button>
            </Link>
            <Button bsStyle="danger">Delete</Button>
          </ButtonToolbar>
        </Collapse>
      </ListGroupItem>
    );
  }
}

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskCard;