/* eslint no-underscore-dangle: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel, ListGroup } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import EisenhowerMatrixCard from '../EisenhowerMatrixCard';

import './index.css';

class EisenhowerMatrix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      expandedFirstQuadrant: true,
      expandedSecondQuadrant: true,
      expandedThirdQuadrant: true,
      expandedFourthQuadrant: true,
    };
  }
  render() {
    const { allTaskList, areaTaskList, loading, deleteTask } = this.props;
    const cardList = (quadrant) => {
      if (areaTaskList.length === 0) {
        return allTaskList
          .filter(task => task.quadrant === quadrant)
          .map(task => <EisenhowerMatrixCard key={task._id} task={task} deleteTask={deleteTask} />);
      }
      return areaTaskList
        .filter(task => task.quadrant === quadrant)
        .map(task => <EisenhowerMatrixCard key={task._id} task={task} deleteTask={deleteTask} />);
    };
    const title = (
      <h4 onClick={() => this.setState({ expanded: !this.state.expanded })}>
        The Eisenhower matrix
      </h4>
    );
    const titleFirstQuadrant = (
      <div
        className="matrix-quadrant__title"
        onClick={() => this.setState({ expandedFirstQuadrant: !this.state.expandedFirstQuadrant })}
        role="button"
        tabIndex={0}
      >
        Urgent and Important
      </div>
    );
    const titleSecondQuadrant = (
      <div
        className="matrix-quadrant__title"
        onClick={() =>
          this.setState({ expandedSecondQuadrant: !this.state.expandedSecondQuadrant })}
        role="button"
        tabIndex={-1}
      >
        Not Urgent and Important
      </div>
    );
    const titleThirdQuadrant = (
      <div
        className="matrix-quadrant__title"
        onClick={() => this.setState({ expandedThirdQuadrant: !this.state.expandedThirdQuadrant })}
        role="button"
        tabIndex={-1}
      >
        Urgent and Not Important
      </div>
    );
    const titleFourthQuadrant = (
      <div
        className="matrix-quadrant__title"
        onClick={() =>
          this.setState({ expandedFourthQuadrant: !this.state.expandedFourthQuadrant })}
        role="button"
        tabIndex={-1}
      >
        Not Urgent and Not Important
      </div>
    );
    return (
      <Panel header={title} collapsible expanded={this.state.expanded}>
        {loading
          ? 'loading...'
          : <div fill className="eisenhower-matrix">
            <Panel
              header={titleFirstQuadrant}
              bsStyle="danger"
              className="eisenhower-matrix__panel"
            >
              <ListGroup
                fill
                style={{ display: this.state.expandedFirstQuadrant ? 'block' : 'none' }}
              >
                <Scrollbars autoHeight autoHeightMax={420}>
                  {cardList('first')}
                </Scrollbars>
              </ListGroup>
            </Panel>
            <Panel
              header={titleSecondQuadrant}
              bsStyle="warning"
              className="eisenhower-matrix__panel"
            >
              <ListGroup
                fill
                style={{ display: this.state.expandedSecondQuadrant ? 'block' : 'none' }}
              >
                <Scrollbars autoHeight autoHeightMax={420}>
                  {cardList('second')}
                </Scrollbars>
              </ListGroup>
            </Panel>
            <Panel header={titleThirdQuadrant} className="eisenhower-matrix__panel">
              <ListGroup
                fill
                style={{ display: this.state.expandedThirdQuadrant ? 'block' : 'none' }}
              >
                <Scrollbars autoHeight autoHeightMax={420}>
                  {cardList('third')}
                </Scrollbars>
              </ListGroup>
            </Panel>
            <Panel header={titleFourthQuadrant} className="eisenhower-matrix__panel">
              <ListGroup
                fill
                style={{ display: this.state.expandedFourthQuadrant ? 'block' : 'none' }}
              >
                <Scrollbars autoHeight autoHeightMax={420}>
                  {cardList('fourth')}
                </Scrollbars>
              </ListGroup>
            </Panel>
          </div>}
      </Panel>
    );
  }
}

EisenhowerMatrix.propTypes = {
  allTaskList: PropTypes.array.isRequired,
  areaTaskList: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default EisenhowerMatrix;
