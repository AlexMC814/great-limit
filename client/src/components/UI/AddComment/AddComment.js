import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { commentQueries } from '../../../queries';

import Error from '../Error/Error';
import withSession from '../../../hoc/withSession';

const { ADD_VIDEO_COMMENT, GET_VIDEO_COMMENTS } = commentQueries;

const initialState = {
  user: '',
  comment: '',
};

class AddComment extends Component {
  state = {
    ...initialState,
  };

  clearState = () => {
    this.setState({ ...initialState });
  };

  validateForm = () => {
    const { comment } = this.state;
    const isInvalid = !comment;
    return isInvalid;
  };

  changeHandler = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  submitHandler = (event, addVideoComment) => {
    event.preventDefault();
    addVideoComment()
      .then(async ({ data }) => {
        console.log(data);
        this.setState({
          comment: '',
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  updateCache = (cache, { data: { addVideoComment } }) => {
    console.log(addVideoComment);
    const { video } = this.props;
    const { getVideoComments } = cache.readQuery({
      query: GET_VIDEO_COMMENTS,
      variables: { video },
    });
    cache.writeQuery({
      query: GET_VIDEO_COMMENTS,
      variables: { video },
      data: {
        getVideoComments: [addVideoComment, ...getVideoComments],
      },
    });
  };

  componentDidMount() {
    if (this.props.session.getCurrentUser) {
      const { userName } = this.props.session.getCurrentUser;
      this.setState({
        user: userName,
      });
    }
  }

  render() {
    const { user, comment } = this.state;
    const { video } = this.props;
    return (
      <Mutation
        mutation={ADD_VIDEO_COMMENT}
        variables={{ video, user, comment }}
        update={this.updateCache}
        // refetchQueries={() => [
        //   { query: GET_USER_COMMENTS, variables: { user } },
        // ]}
      >
        {(addVideoComment, { data, loading, error }) => {
          if (loading) return <div>Loading...</div>;
          return (
            <div>
              {error && <Error error={error} />}
              <form
                onSubmit={event => this.submitHandler(event, addVideoComment)}>
                <textarea
                  name='comment'
                  placeholder='Ваш комментарий'
                  cols='30'
                  rows='10'
                  value={comment}
                  onChange={this.changeHandler}
                />
                <button type='submit' disabled={loading || this.validateForm()}>
                  Добавить комментарий
                </button>
              </form>
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default withSession(withRouter(AddComment));
