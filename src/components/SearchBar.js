import React, { Component } from "react";
import { Paper, TextField } from "@material-ui/core";

class SearchBar extends Component {
  state = {
    searchTerm: ""
  };

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  handleSubmit = event => {
    const { searchTerm } = this.state;
    const { formSubmit } = this.props;
    formSubmit(searchTerm);
    event.preventDefault();
  };
  render() {
    return (
      <Paper onSubmit={this.handleSubmit}>
        <form>
          <TextField
            fullWidth
            label='Search..'
            onChange={this.handleChange}
          ></TextField>
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
