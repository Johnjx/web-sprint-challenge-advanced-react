import React, { useState } from 'react'
import axios from 'axios'

const grids = {
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

const initState = {
  totalMoves: 0,
  grid: grids.grid5,
  message: "",
  emailInput: ""
}

export default function AppFunctional(props) {
  const URL = "http://localhost:9000/api/result"

  const [state, setState] = useState(initState)

  const getCoordinates = (grid) => {
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

  const getClassName = (id) => {
    if (state.grid[id] === "B") {
      return 'active'
    } else {
      return ''
    }
  }

  const handleReset = () => {
    setState(initState)
  }

  const handleUp = () => {
    if (state.grid === grids.grid5) {
      setState({
        ...state,
        totalMoves: state.totalMoves + 1,
        grid: grids.grid2,
        message: ""
      })
    } else if (state.grid === grids.grid4) {
      setState({
        ...state,
        totalMoves: state.totalMoves + 1,
        grid: grids.grid1,
        message: ""
      })
    } else if (state.grid === grids.grid6) {
      setState({
        ...state,
        totalMoves: state.totalMoves + 1,
        grid: grids.grid3,
        message: ""
      })
    } else if (state.grid === grids.grid8) {
      setState({
        ...state,
        totalMoves: state.totalMoves + 1,
        grid: grids.grid5,
        message: ""
      })
    } else if (state.grid === grids.grid7) {
      setState({
        ...state,
        totalMoves: state.totalMoves + 1,
        grid: grids.grid4,
        message: ""
      })
    } else if (state.grid === grids.grid9) {
      setState({
        ...state,
        totalMoves: state.totalMoves + 1,
        grid: grids.grid6,
        message: ""
      })
    } else {
      setState({
        ...state,
        message: "You can't go up"
      })
    }
  }

  const handleDown = () => {
    if (state.grid === grids.grid5) {
      setState({
        ...state,
        totalMoves: state.totalMoves + 1,
        grid: grids.grid8,
        message: ""
      })
    } else if (state.grid === grids.grid2) {
      setState({
        ...state,
        totalMoves: state.totalMoves + 1,
        grid: grids.grid5,
        message: ""
      })
    } else if (state.grid === grids.grid1) {
      setState({
        ...state,
        totalMoves: state.totalMoves + 1,
        grid: grids.grid4,
        message: ""
      })
    } else if (state.grid === grids.grid3) {
      setState({
        ...state,
        totalMoves: state.totalMoves + 1,
        grid: grids.grid6,
        message: ""
      })
    } else if (state.grid === grids.grid4) {
      setState({
        ...state,
        totalMoves: state.totalMoves + 1,
        grid: grids.grid7,
        message: ""
      })
    } else if (state.grid === grids.grid6) {
      setState({
        ...state,
        totalMoves: state.totalMoves + 1,
        grid: grids.grid9,
        message: ""
      })
    } else {
      setState({
        ...state,
        message: "You can't go down"
      })
    }
  }

  const handleLeft = () => {
    if (state.grid === grids.grid5) {
      setState({
        ...state,
        totalMoves: state.totalMoves + 1,
        grid: grids.grid4,
        message: ""
      })
    } else if (state.grid === grids.grid2) {
      setState({
        ...state,
        totalMoves: state.totalMoves + 1,
        grid: grids.grid1,
        message: ""
      })
    } else if (state.grid === grids.grid8) {
      setState({
        ...state,
        totalMoves: state.totalMoves + 1,
        grid: grids.grid7,
        message: ""
      })
    } else if (state.grid === grids.grid3) {
      setState({
        ...state,
        totalMoves: state.totalMoves + 1,
        grid: grids.grid2,
        message: ""
      })
    } else if (state.grid === grids.grid6) {
      setState({
        ...state,
        totalMoves: state.totalMoves + 1,
        grid: grids.grid5,
        message: ""
      })
    } else if (state.grid === grids.grid9) {
      setState({
        ...state,
        totalMoves: state.totalMoves + 1,
        grid: grids.grid8,
        message: ""
      })
    } else {
      setState({
        ...state,
        message: "You can't go left"
      })
    }
  }

  const handleRight = () => {
    if (state.grid === grids.grid5) {
      setState({
        ...state,
        totalMoves: state.totalMoves + 1,
        grid: grids.grid6,
        message: ""
      })
    } else if (state.grid === grids.grid2) {
      setState({
        ...state,
        totalMoves: state.totalMoves + 1,
        grid: grids.grid3,
        message: ""
      })
    } else if (state.grid === grids.grid8) {
      setState({
        ...state,
        totalMoves: state.totalMoves + 1,
        grid: grids.grid9,
        message: ""
      })
    } else if (state.grid === grids.grid1) {
      setState({
        ...state,
        totalMoves: state.totalMoves + 1,
        grid: grids.grid2,
        message: ""
      })
    } else if (state.grid === grids.grid4) {
      setState({
        ...state,
        totalMoves: state.totalMoves + 1,
        grid: grids.grid5,
        message: ""
      })
    } else if (state.grid === grids.grid7) {
      setState({
        ...state,
        totalMoves: state.totalMoves + 1,
        grid: grids.grid8,
        message: ""
      })
    } else {
      setState({
        ...state,
        message: "You can't go right"
      })
    }
  }

  const handleChange = (evt) => {
    const { value } = evt.target
    setState({
      ...state,
      emailInput: value
    })
  }

  const postHelper = () => {
    axios.post(URL, {
        x: getCoordinates(state.grid)[0],
        y: getCoordinates(state.grid)[1],
        steps: state.totalMoves,
        email: state.emailInput
    })
    .then(res => {
      setState({
        ...state,
        message: res.data.message,
        emailInput: ""
      })
    })
    .catch(err => {
      setState({
        ...state,
        message: err.response.data.message,
        emailInput: ""
      })
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    postHelper();
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
          <h3 id="coordinates">
            {`Coordinate (${getCoordinates(state.grid)[0]} ,${getCoordinates(state.grid)[1]})`}
          </h3>
          <h3 id="steps">You moved {state.totalMoves} {state.totalMoves === 1? 'time': 'times'}</h3>
        </div>
        <div id="grid">
          {state.grid.map((item, idx) => (
            <div key={idx} className={`square ${getClassName(idx)}`}>{item}</div>
          ))}
        </div>
        <div className="info">
          <h3 id="message">{state.message}</h3>
        </div>
        <div id="keypad">
          <button id="left" onClick={() => handleLeft()}>LEFT</button>
          <button id="up" onClick={() => handleUp()}>UP</button>
          <button id="right" onClick={() => handleRight()}>RIGHT</button>
          <button id="down" onClick={() => handleDown()}>DOWN</button>
          <button id="reset" onClick={() => handleReset()}>reset</button>
        </div>
        <form onSubmit={handleSubmit}>
          <input id="email" type="email" placeholder="type email" value={state.emailInput} onChange={handleChange}></input>
          <input id="submit" type="submit"></input>
        </form>
    </div>
  )
}
