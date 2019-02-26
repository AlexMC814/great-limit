import React from 'react';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';
import { GET_VIDEO } from '../../queries';

const VideoPage = ({ match }) => {
    const { _id } = match.params;
    return (
        <Query query={GET_VIDEO} variables={{ _id }}>
            {({ data, loading, error }) => {
                if (loading) return <div>Loading...</div>
                if (error) return <div>{error}</div>
                return (<div>
                    <h2>{data.getVideo.title}</h2>
                    <p>Категория: {data.getVideo.category}</p>
                    <p>Описание: {data.getVideo.description}</p>
                    <p>Опубликовано: {data.getVideo.userName}</p>
                    <p>Комментарии: {data.getVideo.comments}</p>
                </div>);
            }}
        </Query>
    )
}

export default withRouter(VideoPage);
