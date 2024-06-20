// Write your code here
import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {
    number: true,
  }

  onIncrement = () => {
    this.setState(prevState => ({
      number: !prevState.number,
    }))
  }

  render() {
    const {number} = this.state
    const status = number ? 'Please Login' : 'Welcome User'
    const bottonValue = number ? 'Login' : 'Logout'

    return (
      <div className="bg-container">
        <div className="main-card">
          <h1>{status}</h1>
          <button onClick={this.onIncrement} type="button" className="button">
            {bottonValue}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
