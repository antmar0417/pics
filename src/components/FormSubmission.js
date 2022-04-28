import React from "react";

export default class FormSubmission extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
    };
  }

  handleInputChanged(event) {
    this.setState({
      searchQuery: event.target.value,
    });
  }

  handleButtonClicked() {
    var searchQuery = this.state.searchQuery;

    window.location.href =
      "https://youtube.com/results?search_query" + searchQuery;
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.searchQuery}
          onChange={this.handleInputChanged.bind(this)}
        />
        <button onClick={this.handleButtonClicked.bind(this)}>Submit</button>
      </div>
    );
  }
}
