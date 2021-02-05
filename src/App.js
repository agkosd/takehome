import React from "react";
import Users from "./Users";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Users />
      </div>
    );
  }
}

export default App;
