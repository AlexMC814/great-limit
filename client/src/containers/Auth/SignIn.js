import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { SIGNIN_USER } from '../../queries';
import { withRouter } from 'react-router-dom';

import Error from '../../components/UI/Error/Error';

const initialState = {
  userName: '',
  password: '',
};

class SignIn extends Component {
  state = { ...initialState };

  clearState = () => {
    this.setState({ ...initialState });
  };

  validateForm = () => {
    const { userName, password } = this.state;
    const isInvalid = !userName || !password;

    return isInvalid;
  };

  submitHandler = (event, signInUser) => {
    event.preventDefault();
    signInUser().then(async ({ data }) => {
      console.log(data);
      localStorage.setItem('token', data.signInUser.token);
      await this.props.refetch();
      this.clearState();
      this.props.history.push('/');
    });
  };

  changeHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { userName, password } = this.state;

    return (
      <div className='sign-up'>
        <h2>Вход</h2>
        <Mutation mutation={SIGNIN_USER} variables={{ userName, password }}>
          {(signInUser, { data, loading, error }) => {
            return (
              <form
                className='form'
                onSubmit={event => this.submitHandler(event, signInUser)}>
                {error && <Error error={error} />}
                <input
                  type='text'
                  name='userName'
                  placeholder='Ваше имя'
                  value={userName}
                  onChange={this.changeHandler}
                />
                <input
                  type='password'
                  name='password'
                  placeholder='Пароль'
                  value={password}
                  onChange={this.changeHandler}
                />
                <button type='submit' disabled={loading || this.validateForm()}>
                  Отправить
                </button>
              </form>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default withRouter(SignIn);
