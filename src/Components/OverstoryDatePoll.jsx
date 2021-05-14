import React, {Component, Fragment } from 'react';
import '../App.css';
import OverstoryCalendar from './OverstoryCalendar';

class OverstoryDatePoll extends Component {
    constructor(props) {
        super (props)
        this.state = {
            days: {
                day1: 0,
                day2: 0,
                day3: 0,
                day4: 0,
                day5: 0
            },
            checks: {
                holl: [false,false,false,false,false],
                nath: [false,false,false,false,false],
                heat: [false,false,false,false,false],
                matt: [false,false,false,false,false],
                spen: [false,false,false,false,false],
                anne: [false,false,false,false,false]
            }
        }

        this.oncheck = this.oncheck.bind(this);
        this.getchecks = this.getchecks.bind(this);
        this.postchecks = this.postchecks.bind(this);
        this.setchecks = this.setchecks.bind(this);
    }

    componentDidMount() {
        this.getchecks();
    }

    setchecks (newstate) {
        let names = document.querySelectorAll('.name')
        let newChecks = newstate.checks
        this.setState({checks: newChecks})
        let newDays = newstate.days;
        this.setState({days: newDays})
        console.log('setchecks state', this.state)

        names.forEach(name => {
            let person = name.innerText;
            person = person.slice(0,4).toLowerCase();
            let section = document.querySelector(`.${person}`).parentElement;
            let sectionArr = newstate.checks[person];

            let inputs = section.querySelectorAll('input');

            inputs.forEach((input, i) => {
                input.checked = sectionArr[i];
                if (sectionArr[i] == true) input.nextSibling.innerHTML = '&#10003;'
                else input.nextSibling.innerHTML = '';
            })

        })
    }

    oncheck (e) {
        let checkbox = e.target.previousSibling;
        let currentState = this.state.days[checkbox.id];
        let name = checkbox.parentElement.parentElement.firstChild.id;
        let iteration = checkbox.id.slice(3) - 1;

        if (checkbox) {
            if (checkbox.checked) {
                checkbox.checked = false;
                e.target.innerHTML = '';

                let newState = currentState - 1;
                let newDays = this.state.days
                let day = checkbox.id;
                newDays[day] = newState
                this.setState({days: newDays});

                let newCheckState = this.state.checks;
                newCheckState[name][iteration] = false;
                this.setState({checks: newCheckState});
                
                console.log('unchecked', this.state)
            } else {
                checkbox.checked = true;
                e.target.innerHTML = '&#10003;';
                
                let newState = currentState + 1;
                let newDays = this.state.days
                let day = checkbox.id;
                newDays[day] = newState
                this.setState({days: newDays});

                let newCheckState = this.state.checks;
                newCheckState[name][iteration] = true;
                this.setState({checks: newCheckState});
                
                console.log('checked', this.state)
            }
        }

        let data = this.state;
        this.postchecks(data);
    }

    getchecks() {
        fetch('https://stark-inlet-70944.herokuapp.com/overstorygetchecks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(results => {
            console.log('GET call to server', results)
            this.setchecks(results)
        });
    }

    postchecks(data) {
        console.log('inside postchecks', data)
        fetch('https://stark-inlet-70944.herokuapp.com/overstorypostchecks', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            console.log('res', res)
            res.json()
        })
        .then(results => {
            console.log('POST call to server', results)
        })
        .catch(err => {
            console.log('Error: ', err)
        })
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
                        <th>May<br></br><span className="date">10</span><br></br>Mon</th>
                        <th>May<br></br><span className="date">11</span><br></br>Tue</th>
                        <th>May<br></br><span className="date">12</span><br></br>Wed</th>
                        <th>May<br></br><span className="date">13</span><br></br>Thu</th>
                        <th>May<br></br><span className="date">14</span><br></br>Fri</th>
                    </tr>
                    <tr>
                        <td className="name holl" id="holl">Holly</td>
                        <OverstoryCalendar oncheck={(e)=>this.oncheck(e)}/>
                    </tr>
                    <tr>
                        <td className="name nath" id="nath">Nathan+Stacey</td>
                        <OverstoryCalendar oncheck={(e)=>this.oncheck(e)}/>
                    </tr>
                    <tr>
                        <td className="name heat" id="heat">Heather+Dan</td>
                        <OverstoryCalendar oncheck={(e)=>this.oncheck(e)}/>
                    </tr>
                    <tr>
                        <td className="name matt" id="matt">Matthew</td>
                        <OverstoryCalendar oncheck={(e)=>this.oncheck(e)}/>
                    </tr>
                    <tr>
                        <td className="name spen" id="spen">Spencer+Cassie</td>
                        <OverstoryCalendar oncheck={(e)=>this.oncheck(e)}/>
                    </tr>
                    <tr>
                        <td className="name anne" id="anne">Anne+Paul</td>
                        <OverstoryCalendar oncheck={(e)=>this.oncheck(e)}/>
                    </tr>
                </table>
            </Fragment>
        )
    }
}

export default OverstoryDatePoll;