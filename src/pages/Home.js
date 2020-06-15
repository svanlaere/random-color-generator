import React, { Component } from "react"
import "./Home.css"

const randomColor = require("randomcolor")

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      color: randomColor(),
      hueHexArray: [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "pink",
        "monochrome",
      ],
      hue: "",
      luminosity: "",
    }

    this.clickBackground = this.clickBackground.bind(this)
    this.clickHue = this.clickHue.bind(this)
  }

  clickBackground(e) {
    e.preventDefault()
    this.setState({
      color: randomColor({
        luminosity: this.state.luminosity ? this.state.luminosity : null,
        hue: this.state.hue ? this.state.hue : null,
      }),
    })
  }

  clickHue(e, hue) {
    e.stopPropagation()
    console.log("click hue")
    if (this.state.hue !== hue) {
      this.setState({
        hue,
      })
    } else {
      this.setState({
        hue: "",
      })
    }
  }

  render() {
    return (
      <div
        className="container"
        style={{ backgroundColor: this.state.color }}
        onClick={(e) => this.clickBackground(e)}
      >
        <div className="hex-code">{this.state.color}</div>

        <div className="hue-button-group">
          {this.state.hueHexArray.map((hue, index) => (
            <div
              key={index}
              className={
                this.state.hue === hue
                  ? "hue-button hue-button--selected"
                  : "hue-button"
              }
              style={{
                backgroundColor: hue,
              }}
              onClick={(e) => this.clickHue(e, hue)}
            ></div>
          ))}
        </div>
      </div>
    )
  }
}
