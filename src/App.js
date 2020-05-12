//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lionsValue, setLionsValue] = useState(0);
  const [tigersValue, setTigersValue] = useState(0);

  const homeTouchdown = event => {
    // Changes state with the 'setSavings'
    setLionsValue(lionsValue + 7) // new state to completely replace the old state
  }
  const homeFieldgoal = event => {
    // Changes state with the 'setSavings'
    setLionsValue(lionsValue + 3) // new state to completely replace the old state
  }
  const awayTouchdown = event => {
    // Changes state with the 'setSavings'
    setTigersValue(tigersValue + 7) // new state to completely replace the old state
  }
  const awayFieldgoal = event => {
    // Changes state with the 'setSavings'
    setTigersValue(tigersValue + 3) // new state to completely replace the old state
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{lionsValue}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersValue}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={homeTouchdown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={homeFieldgoal}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awayTouchdown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={awayFieldgoal}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
