import React, {Component} from 'react'

class EvenAndOdd extends Component {
  constructor() {
    super()
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }
  
  updateUserInput(value) {
    this.setState({ userInput: value })
  }

  sorter(input) {
    let { evenArray, oddArray } = this.state
    let arr = input.split(',')
    let newEven = evenArray.slice()
    let newOdd = oddArray.slice()
    arr.forEach(element => {
      element % 2 === 0
        ? newEven.push( parseInt(element) )
        : newOdd.push( parseInt(element) )
    });
    
    this.setState({ evenArray: newEven, oddArray: newOdd, userInput: ''})

  }

  render(){
    return(
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input 
          className="inputLine" 
          onChange={ ( e ) => { this.updateUserInput(e.target.value) } }
        />
        <button className="confirmationButton" onClick={ () => {this.sorter(this.state.userInput)}}> Split </button>
        <span className="resultsBox">Evens: { JSON.stringify(this.state.evenArray)}</span>
        <span className="resultsBox">Odds: { JSON.stringify(this.state.oddArray)}</span>
      </div>
    )}
}


export default EvenAndOdd