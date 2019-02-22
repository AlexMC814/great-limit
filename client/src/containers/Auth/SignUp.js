import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { SIGNUP_USER } from '../../queries';
import { withRouter } from 'react-router-dom';

import Error from '../../components/UI/Error/Error';

const initialState = {
  userName: '',
  email: '',
  password: '',
  passwordConfirmaton: '',
};

class SignUp extends Component {
  state = {
    ...initialState,
  };

  clearState = () => {
    this.setState({ ...initialState });
  };

  validateForm = () => {
    const { userName, email, password, passwordConfirmation } = this.state;
    const isInvalid =
      !userName || !email || !password || password !== passwordConfirmation;

    return isInvalid;
  };

  submitHandler = (event, signUpUser) => {
    event.preventDefault();
    signUpUser().then(async ({ data }) => {
      console.log(data);
      localStorage.setItem('token', data.signUpUser.token);
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
    const { userName, email, password, passwordConfirmaton } = this.state;

    return (
      <div className='sign-up'>
        <h2>Регистрация</h2>
        <Mutation
          mutation={SIGNUP_USER}
          variables={{ userName, email, password }}>
          {(signUpUser, { data, loading, error }) => {
            return (
              <form
                className='form'
                onSubmit={event => this.submitHandler(event, signUpUser)}>
                {error && <Error error={error} />}
                <input
                  type='text'
                  name='userName'
                  placeholder='Ваше имя'
                  value={userName}
                  onChange={this.changeHandler}
                />
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={email}
                  onChange={this.changeHandler}
                />
                <input
                  type='password'
                  name='password'
                  placeholder='Пароль'
                  value={password}
                  onChange={this.changeHandler}
                />
                <input
                  type='password'
                  name='passwordConfirmaton'
                  placeholder='Подтвердите пароль'
                  value={passwordConfirmaton}
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

export default withRouter(SignUp);
