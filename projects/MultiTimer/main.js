'use strict';

const e = React.createElement;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            list: []
        }
    }

    newTimer() {
        let newList = this.state.list.slice();
        let newIndex = this.state.index + 1;

        let hours = document.getElementById('hours').value;
        let minutes = document.getElementById('minutes').value;
        let seconds = document.getElementById('seconds').value;
        
        // Add a handler for 0 timer
        // newList.push(hours+":"+minutes+":"+seconds);
        newList.push((parseInt(seconds)+parseInt(minutes)*60+parseInt(hours)*60*60).toString());
        
        this.setState({
            list: newList,
            index: newIndex
        });
        console.log(newList);
    }
    
    render() {
        let list = this.state.list;
        let timers = list.map((value, index) => {
            return e(Counter, {key: index, value: value});
        });

        return e('div', null, 
            e('div', null, 
                e(Time, { type: 'hours'}),
                e(Time, { type: 'minutes'}),
                e(Time, { type: 'seconds'}),
                e('button', { className: 'btn-primary', onClick: () => this.newTimer() }, '+')),
            e('ol', null, timers)
        )
    }
}

class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: Array(this.props.type && this.props.type == 'hours' ? 24 : 60).fill(null)
        }
    }
    
    render() {
        let list = this.state.time.slice();
        let time = list.map((value, index) => {
            // const formattedIndex = index.toLocaleString(undefined, { minimumIntegerDigits: 2 });
            const formattedIndex = index;
            return e('option', { key: index, value: formattedIndex }, formattedIndex);
        });

        return e('select',
        {
            id: this.props.type
        },
        time);
    }
}

class Counter extends React.Component {
    
    startCounter() {
        return this.props.value;
    }
    
    render() {
        return e('li', null, this.startCounter());
    }
}

// ========================================

ReactDOM.render(
e(Main),
document.getElementById('root')
);