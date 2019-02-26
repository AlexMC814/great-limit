import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { ADD_VIDEO, GET_ALL_VIDEOS } from '../../queries';
import { withRouter } from 'react-router-dom';

import Error from '../../components/UI/Error/Error';

const initialState = {
    title: '',
    category: 'Уровень 1',
    description: '',
    userName: ''
}

class AddVideo extends Component {
    state = {
        ...initialState
    }

    clearState = () => {
        this.setState({ ...initialState });
    }

    submitHandler = (event, addVideo) => {
        event.preventDefault();
        addVideo().then(({ data }) => {
            console.log(data);
            this.clearState();
            this.props.history.push('/');
        });
    }

    changeHandler = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    validateForm = () => {
        const { title, category, description } = this.state;
        const isInvalid = !title || !category || !description;
        return isInvalid;
    }

    updateCache = (cache, { data: { addVideo } }) => {
        const { getAllVideos } = cache.readQuery({ query: GET_ALL_VIDEOS });
        // console.log('from cache:', getAllVideos);
        // console.log('from data:', addVideo);
        cache.writeQuery({
            query: GET_ALL_VIDEOS,
            data: {
                getAllVideos: [addVideo, ...getAllVideos]
            }
        });
    }

    componentDidMount() {
        this.setState({
            userName: this.props.session.getCurrentUser.userName
        });
    }


    render() {
        const { title, category, description, userName } = this.state;
        return (
            <Mutation mutation={ADD_VIDEO} variables={{ title, category, description, userName }} update={this.updateCache}>
                {(addVideo, { data, loading, error }) => {
                    return (
                        <div>
                            <h2>Добавить видео</h2>
                            {error && <Error error={error} />}
                            <form onSubmit={event => this.submitHandler(event, addVideo)}>
                                <input type="text" name="title" placeholder="Название" onChange={this.changeHandler} value={title} />
                                <select name="category" onChange={this.changeHandler} value={category}>
                                    <option value="Уровень 1">Уровень 1</option>
                                    <option value="Уровень 2">Уровень 2</option>
                                    <option value="Уровень 3">Уровень 3</option>
                                    <option value="Уровень 4">Уровень 4</option>
                                </select>
                                <textarea name="description" placeholder="Описание" cols="30" rows="10" value={description} onChange={this.changeHandler}></textarea>
                                <button type="submit" disabled={loading || this.validateForm()}>Добавить</button>
                            </form>
                        </div>
                    )
                }}
            </Mutation>
        );
    }
}

export default withRouter(AddVideo);
