import {Component} from 'react'
import './index.css'

class showHide extends Component {
  state = {firstName: false, lastName: false, button: 'button-noborder'}

  onfirstName = () => {
    const {firstName} = this.state
    if (firstName === true) {
      this.setState({
        firstName: false,
        button: 'button',
      })
    } else {
      this.setState({
        firstName: true,
        button: 'button',
      })
    }
  }

  onlastName = () => {
    const {lastName} = this.state
    if (lastName === true) {
      this.setState({
        lastName: false,
        button: 'button',
      })
    } else {
      this.setState({
        lastName: true,
        button: 'button',
      })
    }
  }

  render() {
    const {firstName, lastName, button} = this.state
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="box-container">
          <div className="name-container">
            <button className={button} type="button" onClick={this.onfirstName}>
              Show/Hide Firstname
            </button>
            {firstName === true ? <p className="name">Joe</p> : null}
          </div>
          <div className="name-container">
            <button className={button} type="button" onClick={this.onlastName}>
              Show/Hide Lastname
            </button>
            {lastName === true ? <p className="name">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default showHide
