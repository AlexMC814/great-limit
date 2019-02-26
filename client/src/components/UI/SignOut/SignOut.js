import React from 'react'
import { ApolloConsumer } from 'react-apollo';
import { withRouter } from 'react-router-dom';

const handleSignOut = (client, history) => {
    localStorage.setItem('token', '');
    client.resetStore();
    history.push('/');
}

const SignOutBtn = ({ history }) => (
    <ApolloConsumer>
        {client => {
            // console.log(client);
            return (
                <button onClick={() => handleSignOut(client, history)}>Выйти</button>
            )
        }}
    </ApolloConsumer>
)

export default withRouter(SignOutBtn);
