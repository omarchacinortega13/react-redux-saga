import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/index';

class PostsList extends React.Component {


    renderPosts(post, index) {
        return (
            <tr key={index}>
                <td>{post.get('name')}</td>
                <td>
                    <button className="btn btn-danger"
                            onClick={() => this.props.deletePost(index)}
                    >delete</button>
                </td>
            </tr>
        )
    }

    noPost() {
        return (
            <tr>
                <td>You have not added any post... yet</td>
            </tr>
        )
    }


    render() {
        let areTherePosts = this.props.posts.toJS().length > 0;
        return (
            <div>
                <h4>List of posts</h4>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Posts</th>
                    </tr>
                    </thead>
                    <tbody>
                    { areTherePosts ? this.props.posts.map(this.renderPosts.bind(this)) : this.noPost()}
                    </tbody>
                </table>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, {deletePost})(PostsList);