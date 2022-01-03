"use strict";

const e = React.createElement;

class TestButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "Test complete on " + this.props.commentID;
    }

    return e(
      "button",
      { onClick: () => this.setState({ liked: true }) },
      "Test"
    );
  }
}

document.querySelectorAll(".test_button_container").forEach((domContainer) => {
  const commentID = parseInt(domContainer.dataset.commentid);
  ReactDOM.render(e(TestButton, { commentID: commentID }), domContainer);
});
