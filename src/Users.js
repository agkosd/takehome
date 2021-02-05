import React from "react";
import Loader from "./Loader";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: "", id: 1 };
    this.prevUser = this.prevUser.bind(this);
    this.nextUser = this.nextUser.bind(this);
  }

  componentDidMount() {
    const URL = "https://jsonplaceholder.typicode.com/users";
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data });
      });
  }

  prevUser() {
    if (this.state.id === 1) {
      alert("First Id!!");
      return;
    } else {
      this.setState({ id: this.state.id - 1 });
    }
  }

  nextUser() {
    this.setState({ id: this.state.id + 1 });
  }

  displayUser() {
    let displayer;
    if (!this.state.users) {
      displayer = <Loader />;
    } else {
      let user = this.state.users.find((value) => {
        return value.id === this.state.id;
      });
      displayer = (
        <div key={this.state.id}>
          <h1>{user.name}</h1>
          <h2>{user.userName}</h2>
        </div>
      );
    }
    return displayer;
  }

  render() {
    let User = this.displayUser();
    return (
      <div>
        {User}
        <button onClick={this.prevUser}>Previous</button>
        <button onClick={this.nextUser}>Next</button>
      </div>
    );
  }
}

export default Users;
