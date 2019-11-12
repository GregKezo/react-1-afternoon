import React, {Component} from 'react'

class FilterString extends Component {
  constructor() {
    super()
    this.state= {
      unFilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
      userInput: '',
      filteredArray: []
    }
  }

  updateUserInput(val) {
    this.setState({ userInput: val })
  }

  sortIt(part) {
    let unFilteredArray = this.state.unFilteredArray
    let filtArr = unFilteredArray.filter( ele => ele.includes(part))
    this.setState({filteredArray: filtArr})
  }

  render() {
    return(
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">Names: { JSON.stringify(this.state.unFilteredArray) }</span>
        <input className="inputLine" onChange={ ( e ) => {this.updateUserInput(e.target.value)} }/>
        <button className="confirmationButton" onClick={ () => {this.sortIt(this.state.userInput)} }>Filter</button>
        <span className="resultsBox filterStringRB">Filtered Names: { JSON.stringify(this.state.filteredArray) }</span>
      </div>
    )
  }
}

export default FilterString