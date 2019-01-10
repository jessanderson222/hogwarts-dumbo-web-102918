import React, { Component } from "react";

class Hog extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    hidden: true
  };

  formatHogName = name => {
    return name.toLowerCase().replace(/ /g, "_") + ".jpg";
  };

  unhide = () => {
    this.setState({
      hidden: !this.state.hidden
    });
  };

  render() {
    this.formatHogName(this.props.hog.name);
    return (
      <div className="ui eight wide column card">
        <div className="image">
          <img
            onClick={this.unhide}
            src={require(`../hog-imgs/${this.formatHogName(
              this.props.hog.name
            )}`)}
            alt=""
          />{" "}
        </div>
        <div className="content">
          <div className="header">{this.props.hog.name}</div>
          <div className="extra content"> </div>
          <span hidden={this.state.hidden} className="left floated">
            Specialty: {this.props.hog.specialty}
          </span>{" "}
          <br />
          <span hidden={this.state.hidden} className="left floated">
            Greased? {this.props.hog.greased ? "Yes" : "No"}
          </span>
        </div>
      </div>
    );
  }
}

export default Hog;
