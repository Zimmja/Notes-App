"use strict";

const e = React.createElement;

class TestButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "Test successful.";
    }

    return e(
      "button",
      { onClick: () => this.setState({ liked: true }) },
      "Test"
    );
  }
}

const domContainer = document.querySelector("#test_button_container");
ReactDOM.render(e(TestButton), domContainer);
