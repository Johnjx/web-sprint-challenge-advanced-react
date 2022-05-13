import React from 'react'

export default class AppClass extends React.Component {
  grids = {
    grid1: ["B","","","","","","","",""],
    grid2: ["","B","","","","","","",""],
    grid3: ["","","B","","","","","",""],
    grid4: ["","","","B","","","","",""],
    grid5: ["","","","","B","","","",""],
    grid6: ["","","","","","B","","",""],
    grid7: ["","","","","","","B","",""],
    grid8: ["","","","","","","","B",""],
    grid9: ["","","","","","","","","B"]
  }

  initState = {
    totalMoves: 0,
    grid: this.grids.grid5,
    message: ""
  }

  state = this.initState;

  getCoordinates = (grid) => {
    let coord1 = {x: 1, y: 1}
    let coord2 = {x: 2, y: 1}
    let coord3 = {x: 3, y: 1}
    let coord4 = {x: 1, y: 2}
    let coord5 = {x: 2, y: 2}
    let coord6 = {x: 3, y: 2}
    let coord7 = {x: 1, y: 3}
    let coord8 = {x: 2, y: 3}
    let coord9 = {x: 3, y: 3}

    let x = 0, y = 0

    grid.forEach((item, idx) => {
     if (item === "B" && idx === 0) {
      x = coord1.x;
      y = coord1.y;
     } else if (item === "B" && idx === 1) {
      x = coord2.x;
      y = coord2.y;
     } else if (item === "B" && idx === 2) {
      x = coord3.x;
      y = coord3.y;
     } else if (item === "B" && idx === 3) {
      x = coord4.x;
      y = coord4.y;
     } else if (item === "B" && idx === 4) {
      x = coord5.x;
      y = coord5.y;
     } else if (item === "B" && idx === 5) {
      x = coord6.x;
      y = coord6.y;
     } else if (item === "B" && idx === 6) {
      x = coord7.x;
      y = coord7.y;
     } else if (item === "B" && idx === 7) {
      x = coord8.x;
      y = coord8.y;
     } else if (item === "B" && idx === 8) {
      x = coord9.x;
      y = coord9.y;
     } 
    })
    const result = [x, y]
    return result;
  }

  getClassName = (id) => {
    if (this.state.grid[id] === "B") {
      return 'active'
    } else {
      return ''
    }
  }

handleReset = () => {
  this.setState(this.initState)
}

handleUp = () => {
  if (this.state.grid === this.grids.grid5) {
    this.setState({
      totalMoves: this.state.totalMoves + 1,
      grid: this.grids.grid2,
      message: ""
    })
  } else if (this.state.grid === this.grids.grid4) {
    this.setState({
      totalMoves: this.state.totalMoves + 1,
      grid: this.grids.grid1,
      message: ""
    })
  } else if (this.state.grid === this.grids.grid6) {
    this.setState({
      totalMoves: this.state.totalMoves + 1,
      grid: this.grids.grid3,
      message: ""
    })
  } else if (this.state.grid === this.grids.grid8) {
    this.setState({
      totalMoves: this.state.totalMoves + 1,
      grid: this.grids.grid5,
      message: ""
    })
  } else if (this.state.grid === this.grids.grid7) {
    this.setState({
      totalMoves: this.state.totalMoves + 1,
      grid: this.grids.grid4,
      message: ""
    })
  } else if (this.state.grid === this.grids.grid9) {
    this.setState({
      totalMoves: this.state.totalMoves + 1,
      grid: this.grids.grid6,
      message: ""
    })
  } else {
    this.setState({
      message: "You can't go up"
    })
  }
}

handleDown = () => {
  if (this.state.grid === this.grids.grid5) {
    this.setState({
      totalMoves: this.state.totalMoves + 1,
      grid: this.grids.grid8,
      message: ""
    })
  } else if (this.state.grid === this.grids.grid2) {
    this.setState({
      totalMoves: this.state.totalMoves + 1,
      grid: this.grids.grid5,
      message: ""
    })
  } else if (this.state.grid === this.grids.grid1) {
    this.setState({
      totalMoves: this.state.totalMoves + 1,
      grid: this.grids.grid4,
      message: ""
    })
  } else if (this.state.grid === this.grids.grid3) {
    this.setState({
      totalMoves: this.state.totalMoves + 1,
      grid: this.grids.grid6,
      message: ""
    })
  } else if (this.state.grid === this.grids.grid4) {
    this.setState({
      totalMoves: this.state.totalMoves + 1,
      grid: this.grids.grid7,
      message: ""
    })
  } else if (this.state.grid === this.grids.grid6) {
    this.setState({
      totalMoves: this.state.totalMoves + 1,
      grid: this.grids.grid9,
      message: ""
    })
  } else {
    this.setState({
      message: "You can't go down"
    })
  }
}

handleLeft = () => {
  if (this.state.grid === this.grids.grid5) {
    this.setState({
      totalMoves: this.state.totalMoves + 1,
      grid: this.grids.grid4,
      message: ""
    })
  } else if (this.state.grid === this.grids.grid2) {
    this.setState({
      totalMoves: this.state.totalMoves + 1,
      grid: this.grids.grid1,
      message: ""
    })
  } else if (this.state.grid === this.grids.grid8) {
    this.setState({
      totalMoves: this.state.totalMoves + 1,
      grid: this.grids.grid7,
      message: ""
    })
  } else if (this.state.grid === this.grids.grid3) {
    this.setState({
      totalMoves: this.state.totalMoves + 1,
      grid: this.grids.grid2,
      message: ""
    })
  } else if (this.state.grid === this.grids.grid6) {
    this.setState({
      totalMoves: this.state.totalMoves + 1,
      grid: this.grids.grid5,
      message: ""
    })
  } else if (this.state.grid === this.grids.grid9) {
    this.setState({
      totalMoves: this.state.totalMoves + 1,
      grid: this.grids.grid8,
      message: ""
    })
  } else {
    this.setState({
      message: "You can't go left"
    })
  }
}

handleRight = () => {
  if (this.state.grid === this.grids.grid5) {
    this.setState({
      totalMoves: this.state.totalMoves + 1,
      grid: this.grids.grid6,
      message: ""
    })
  } else if (this.state.grid === this.grids.grid2) {
    this.setState({
      totalMoves: this.state.totalMoves + 1,
      grid: this.grids.grid3,
      message: ""
    })
  } else if (this.state.grid === this.grids.grid8) {
    this.setState({
      totalMoves: this.state.totalMoves + 1,
      grid: this.grids.grid9,
      message: ""
    })
  } else if (this.state.grid === this.grids.grid1) {
    this.setState({
      totalMoves: this.state.totalMoves + 1,
      grid: this.grids.grid2,
      message: ""
    })
  } else if (this.state.grid === this.grids.grid4) {
    this.setState({
      totalMoves: this.state.totalMoves + 1,
      grid: this.grids.grid5,
      message: ""
    })
  } else if (this.state.grid === this.grids.grid7) {
    this.setState({
      totalMoves: this.state.totalMoves + 1,
      grid: this.grids.grid8,
      message: ""
    })
  } else {
    this.setState({
      message: "You can't go right"
    })
  }
}

  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">
            {`Coordinate (${this.getCoordinates(this.state.grid)[0]} ,${this.getCoordinates(this.state.grid)[1]})`}
          </h3>
          <h3 id="steps">You moved {this.state.totalMoves} times</h3>
        </div>
        <div id="grid">
          {this.state.grid.map((item, idx) => (
            <div key={idx} className={`square ${this.getClassName(idx)}`}>{item}</div>
          ))}
        </div>
        <div className="info">
          <h3 id="message">{this.state.message}</h3>
        </div>
        <div id="keypad">
          <button id="left" onClick={() => this.handleLeft()}>LEFT</button>
          <button id="up" onClick={() => this.handleUp()}>UP</button>
          <button id="right" onClick={() => this.handleRight()}>RIGHT</button>
          <button id="down" onClick={() => this.handleDown()}>DOWN</button>
          <button id="reset" onClick={() => this.handleReset()}>reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
