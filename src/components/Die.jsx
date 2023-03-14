import React from "react"

const Die = (props) => {
  const styles = {background: props.isHeld ? "#59E391" : "transparent"}
  return (
    <div className="die-face" style={styles} onClick={props.hold}>
      <h2 className="die-num">{props.value}</h2>
    </div>
    )
}

export default Die
