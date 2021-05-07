import React, {Component, Fragment } from 'react';
import '../App.css';
import OverstoryCalendar from './OverstoryCalendar';

class OverstoryDatePoll extends Component {
    constructor(props) {
        super (props)
        this.state = {
            day1: 0,
            day2: 0,
            day3: 0,
            day4: 0,
            day5: 0,
            checks: {
                holl: [true,false,false,true,false],
                nath: [false,false,false,false,false],
                heat: [false,false,false,false,false],
                matt: [false,false,false,false,false],
                spen: [false,false,false,false,false],
                anne: [false,true,false,false,false]
            }
        }

        this.oncheck = this.oncheck.bind(this);
        this.getchecks = this.getchecks.bind(this);
        this.postchecks = this.postchecks.bind(this);
        this.setchecks = this.setchecks.bind(this);
    }

    componentDidMount() {
        this.setchecks();
    }

    setchecks () {
        let names = document.querySelectorAll('.name')

        names.forEach(name => {
            let person = name.innerText;
            person = person.slice(0,4).toLowerCase();
            let section = document.querySelector(`.${person}`).parentElement;
            let sectionArr = this.state.checks[person];

            let inputs = section.querySelectorAll('input');

            inputs.forEach((input, i) => {
                input.checked = sectionArr[i];
                if (sectionArr[i] == true) input.nextSibling.innerHTML = '&#10003;'
                else input.nextSibling.innerHTML = '';

                // let day = `day${i+1}`;
                // if (sectionArr[i]) day++
            })

        })
    }

    oncheck (e) {
        let checkbox = e.target.previousSibling;
        let currentState = this.state[checkbox.id];
        let name = checkbox.parentElement.parentElement.firstChild.id;
        let iteration = checkbox.id.slice(3) - 1;
        console.log(name, iteration, 'trying hard')

        if (checkbox) {
            if (checkbox.checked) {
                checkbox.checked = false;
                e.target.innerHTML = '';

                let newState = currentState - 1;
                this.setState({[checkbox.id]: newState});

                let newCheckState = this.state.checks;
                newCheckState[name][iteration] = false;
                this.setState({checks: newCheckState});
                
                console.log(this.state)
            } else {
                checkbox.checked = true;
                e.target.innerHTML = '&#10003;';
                
                let newState = currentState + 1;
                this.setState({[checkbox.id]: newState});

                let newCheckState = this.state.checks;
                newCheckState[name][iteration] = true;
                this.setState({checks: newCheckState});
                
                console.log(this.state)
            }
        }
    }

    getchecks() {

    }

    postchecks() {
        
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
                        <th>May<br></br><span className="date">10</span><br></br>Mon</th>
                    </tr>
                    <tr>
                        <td className="name holl" id="holl">Holly</td>
                        <OverstoryCalendar oncheck={(e)=>this.oncheck(e)} setcheck={()=>this.setcheck()}/>
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