import React, {Component, Fragment } from 'react';
import '../App.css';
import OverstoryCalendar from './OverstoryCalendar';

class OverstoryDatePoll extends Component {
    constructor(props) {
        super (props)
        this.state = {
            may4: 0,
            may5: 0,
            may6: 0,
            may7: 0,
            may10: 0
        }

        this.oncheck = this.oncheck.bind(this);
    }

    oncheck (e) {
        let checkbox = e.target.previousSibling;
        let currentState = this.state[checkbox.id];

        if (checkbox) {
            if (checkbox.checked) {
                checkbox.checked = false;
                let newState = currentState - 1;
                this.setState({[checkbox.id]: newState});
                e.target.innerHTML = '';
                console.log(this.state)
            } else {
                checkbox.checked = true;
                let newState = currentState + 1;
    
                this.setState({[checkbox.id]: newState});
                e.target.innerHTML = '&#10003;';
                console.log(this.state)
            }
        }
    }

    render() {
        return (
            <Fragment>
                <header>
                    <img src="./branch-shadow.png" alt="branches"/>
                    <h1 className="indexed">Overstory Bookclub Date</h1>
                    <p className="indexed">What are our options?</p>
                    <p className="note indexed"><i>(Start time for all dates is 5 PM PST, 6 PM MST, 8 PM whatever time zone Spencer+Cassie are in.)</i></p>
                </header>
                <table>
                    <tr>
                        <th></th>
                        <th>May<br></br><span className="date">4</span><br></br>Tues</th>
                        <th>May<br></br><span className="date">5</span><br></br>Wed</th>
                        <th>May<br></br><span className="date">6</span><br></br>Thu</th>
                        <th>May<br></br><span className="date">7</span><br></br>Fri</th>
                        <th>May<br></br><span className="date">1</span><br></br>Mon</th>
                    </tr>
                    <tr>
                        <td className="name">Holly</td>
                        <OverstoryCalendar oncheck={(e)=>this.oncheck(e)}/>
                    </tr>
                    <tr>
                        <td className="name">Nathan+Stacey</td>
                        <OverstoryCalendar oncheck={(e)=>this.oncheck(e)}/>
                    </tr>
                    <tr>
                        <td className="name">Heather+Dan</td>
                        <OverstoryCalendar oncheck={(e)=>this.oncheck(e)}/>
                    </tr>
                    <tr>
                        <td className="name">Matthew</td>
                        <OverstoryCalendar oncheck={(e)=>this.oncheck(e)}/>
                    </tr>
                    <tr>
                        <td className="name">Spencer+Cassie</td>
                        <OverstoryCalendar oncheck={(e)=>this.oncheck(e)}/>
                    </tr>
                    <tr>
                        <td className="name">Anne+Paul</td>
                        <OverstoryCalendar oncheck={(e)=>this.oncheck(e)}/>
                    </tr>
                </table>
            </Fragment>
        )
    }
}

export default OverstoryDatePoll;