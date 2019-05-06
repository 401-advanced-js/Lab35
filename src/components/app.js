import React from "react";

import RecordList from "./record/list.js";
import If from "./If.js";
import "./style";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      models: [],
      active: ""
    };
  }
  componentDidMount = () => {
    fetch("https://api-js401.herokuapp.com/api/v1/models")
      .then(results => {
        return results.json();
      })
      .then(models => {
        this.setState({ models });
      });
  };
  change = e => {
    this.setState({ active: e.target.value });
  };
  clear = e => {
    this.setState({ active: "" });
    this.change(e);
  };
  render() {
    return (
      <div>
        <h2>Content management system</h2>
        <span>
          <button className="models" onClick={this.clear}>
            Reset Form
          </button>
          {this.state.models.map((model, key) => (
            <button
              className="models"
              key={key}
              onClick={this.change}
              value={model}
            >
              {model}
            </button>
          ))}
        </span>
        <If condition={this.state.active}>
          <RecordList model={this.state.active} />
        </If>
      </div>
    );
  }
}

export default App;
