import React, {Component} from 'react'

class Palindrome extends Component {
  constructor() {
    super()
    this.state = {
      userInput: '',
      palindrome: ''
    }
  }

  updateUserInput(val) {
    this.setState({ userInput: val})
  }

  checkPalindrome(input) {
    let revInput = [...input].reverse().join('')
    input === revInput
      ? this.setState({ palindrome: 'true' })
      : this.setState({ palindrome: 'false' })

  }

  render() {
    return(
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={ ( e ) => { this.updateUserInput(e.target.value) }} />
        <button className="confirmationButton" onClick={ () => this.checkPalindrome(this.state.userInput)}>Check</button>
        <span className="resultsBox">Palindrome: { this.state.palindrome}</span>
      </div>
    )
  }
}

export default Palindrome