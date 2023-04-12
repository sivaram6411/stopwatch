// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timeElapsedInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onClickResetBtn = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  onClickStopBtn = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  UpdateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onClickStartBtn = () => {
    this.timeInterval = setInterval(this.UpdateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  getElapsedTime = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    const {isTimerRunning} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="sub-container">
          <div className="timer-text-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="image"
            />
            <p className="timer-text">Timer</p>
          </div>
          <h1 className="show-timer">{this.getElapsedTime()}</h1>
          <div className="btn-container">
            <button
              type="button"
              className="start-btn"
              onClick={this.onClickStartBtn}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              type="button"
              className="stop-btn"
              onClick={this.onClickStopBtn}
            >
              Stop
            </button>
            <button
              type="button"
              className="reset-btn"
              onClick={this.onClickResetBtn}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
