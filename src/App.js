import React, { Component } from 'react';
import { Button,  ButtonGroup,Dropdown, DropdownButton, MenuItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default class first extends Component {
    state = {
      date: new Date(),
    }
   
    onChange = date => this.setState({ date })
   
    render() {
      return (
     <div className="main-container">
        <div className="header">
        <h1 className="h1">
            Time Saver.club
         </h1>
         </div>
         <div className="body">
         <h2 className="h2">
            View all available dates
         </h2>
         <div className="cad">
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
          />
        </div>
        </div>
        <div className="dropd">
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            State
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">X</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Y</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Z</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Country
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">X</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Y</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Z</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Precinct

          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">X</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Y</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Z</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
      </div>
      );
    }
  }