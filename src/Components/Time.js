import React, { Component } from 'react'
import './Time.css'


class Time extends Component {

    constructor(props) {
        super(props);
        this.state = { data: new Date() };
      }
      componentDidMount() {
        this.timerID = setInterval(() => {
          this.tick();
        }, 1000);
      }
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
      tick() {
        this.setState({ data: new Date() });
      }

    render() {
        return (
            <div className="MainTime">
                <h3 className="time"> {this.state.data.toLocaleTimeString()} </h3>
            </div>
        )
    }
}

export default Time
