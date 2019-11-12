import React, {Component} from 'react'

class Sum extends Component {
  constructor() {
    super()
    this.state= {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

updNum1(val){
  this.setState({number1: val})
}

updNum2(val){
  this.setState({number2: val})
}

summer(num1, num2) {
  let summd = num1 + num2
  this.setState({sum : summd})
}

  render() {
    return(
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine" onChange={ ( e ) => this.updNum1(parseInt(e.target.value))}/>
        <input className="inputLine" onChange={ ( e ) => this.updNum2(parseInt(e.target.value))}/>
        <button className="confirmationButton" onClick={ () => this.summer(this.state.number1, this.state.number2)}>Add</button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    )
  }
}

export default Sum