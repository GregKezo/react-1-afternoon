import React, {Component} from 'react'

class FilterObject extends Component {
  constructor() {
    super()
    this.state = {
      unFilteredArray: [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12,
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Rae',
          title: 'CEO',
          status: 'Just met you, and this is crazy'
        }
      ],
      userInput: '',
      filteredArray: []
    }
  }

updateUserInput(val) {
  this.setState({ userInput: val })
}

filterObjects(val) {
  let filtArr = this.state.unFilteredArray.filter( obj => obj[val] )
  this.setState({filteredArray: filtArr })

}


  render() {
    return(
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">Original: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
        <input className="inputLine" onChange={ (e) => this.updateUserInput(e.target.value) } />
        <button className="confirmationButton" onClick={ () => this.filterObjects(this.state.userInput)}>Filter</button>
        <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredArray) }</span>
      </div>
    )
  }
}

export default FilterObject