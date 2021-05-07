import React, {Component, Fragment } from 'react';
import '../App.css';

class OverstoryCalendar extends Component {
    constructor(props) {
        super (props)
    }

    render() {
        return (
            <Fragment>
                <td>
                    <input type="checkbox" id="day1" />
                    <span className="checkbox" onClick={(e)=>this.props.oncheck(e)} id="day1"></span>
                </td>
                <td>
                    <input type="checkbox" id="day2" />
                    <span className="checkbox" onClick={(e)=>this.props.oncheck(e)} id="day2"></span>
                </td>
                <td>
                    <input type="checkbox" id="day3" />
                    <span className="checkbox" onClick={(e)=>this.props.oncheck(e)} id="day3"></span>
                </td>
                <td>
                    <input type="checkbox" id="day4" />
                    <span className="checkbox" onClick={(e)=>this.props.oncheck(e)} id="day4"></span>
                </td>
                <td>
                    <input type="checkbox" id="day5" />
                    <span className="checkbox" onClick={(e)=>this.props.oncheck(e)} id="day5"></span>
                </td>
            </Fragment>
        )
    }
}

export default OverstoryCalendar;