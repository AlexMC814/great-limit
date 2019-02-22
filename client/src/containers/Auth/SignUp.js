import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { SIGNUP_USER } from '../../queries';

import Error from '../../components/UI/Error/Error';

export default class SignUp extends Component {
  state = {
    userName: '',
    email: '',
    password: '',
    passwordConfirmaton: '',
  };

  submitHandler = (event, signUpUser) => {
    event.preventDefault();
    signUpUser().then(data => {
      console.log(data);
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
                <button type='submit'>Отправить</button>
              </form>
            );
          }}
        </Mutation>
      </div>
    );
  }
}
