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
                    <input type="checkbox" id="may4" />
                    <span className="checkbox" onClick={(e)=>this.props.oncheck(e)} id="may4"></span>
                </td>
                <td>
                    <input type="checkbox" id="may5" />
                    <span className="checkbox" onClick={(e)=>this.props.oncheck(e)} id="may5"></span>
                </td>
                <td>
                    <input type="checkbox" id="may6" />
                    <span className="checkbox" onClick={(e)=>this.props.oncheck(e)} id="may6"></span>
                </td>
                <td>
                    <input type="checkbox" id="may7" />
                    <span className="checkbox" onClick={(e)=>this.props.oncheck(e)} id="may7"></span>
                </td>
                <td>
                    <input type="checkbox" id="may10" />
                    <span className="checkbox" onClick={(e)=>this.props.oncheck(e)} id="may10"></span>
                </td>
            </Fragment>
        )
    }
}

export default OverstoryCalendar;