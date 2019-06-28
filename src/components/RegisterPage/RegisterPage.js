import React, { Component } from 'react';
import {connect} from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.props.store.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.store.errors.registrationMessage}
          </h2>
        )}
        <form className="loginPanel" onSubmit={this.registerUser}>
          <h1 className="loginPanel-hd">Register User</h1>

          <div className="loginPanel-fields">
            <label className="fieldSet" htmlFor="username">
              <span className="fieldSet-label">Username:</span>
              <input
                className="fieldSet-input"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
            <label className="fieldSet" htmlFor="password">
              <span className="fieldSet-label">Password:</span>
              <input
                className="fieldSet-input"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          
          <div className="loginPanel-action">
            <input
              className="btn btn_sizeMin"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            Login
          </button>
        </center>
      </div>
    );
  }
}

export default connect(mapStateToProps)(RegisterPage);

