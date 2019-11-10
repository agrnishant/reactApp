import React, { Component } from 'react';
class Counter extends Component {
    styles = {
        fontSize: 15,
        fontWeight: "bold"
    }

    componentDidUpdate (prevProps, prevState){
     console.log('prevProps',prevProps);
     console.log('prevState',prevState);
     if(prevProps.counter.value !== this.props.counter.value){
        console.log('Counter- Did Update');
        console.log('this.props.counter.value',this.props.counter.value);
     }
    }

    componentWillUnmount(){
        console.log('Counter- Unmount called');
    }

    render() {
        console.log('Counter- Rendered');
        return (
            <div className="Counter row">
                <div className="col-2">
                    <a href="/" style={this.styles} className={this.getBadgeClasses()}> 
                        {this.formatCount()} 
                    </a>
                </div>
                <div className="col">
                    <button onClick= {()=> this.props.onInc(this.props.counter) }
                            style={{fontSize: 20}} className="btn btn-secondary">
                    +
                    </button>
                    <button 
                        onClick= {()=> this.props.onDec(this.props.counter) }
                        style={{fontSize: 20}} className="btn btn-secondary"
                        disabled={this.props.counter.value === 0? "disabled": ""}
                    >
                    -
                    </button>
                    <button onClick= {() =>this.props.onDelete(this.props.counter.id)}
                        className="btn btn-danger">
                    x
                    </button>
                </div>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge badge-pill m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "light";
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0? "Zero" : value;
    }
}

export default Counter;
