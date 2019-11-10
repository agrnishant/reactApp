import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        console.log('Counters - Rendered');
        const {counters, onReset, onDelete, onInc, onDec} = this.props;
        return (
        <div className="Counters">
            <button onClick= {onReset}
                style={{fontSize: 20}} className="btn btn-secondary">
                Reset
            </button>
            {
                counters.map(counter =>
                    <Counter key={counter.id}
                        counter={counter}
                        onDelete={onDelete}
                        onInc={onInc}
                        onDec={onDec}
                    >
                    </Counter>
                )
            }
        </div>
        )
    }
}
export default Counters;
