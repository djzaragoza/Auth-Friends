import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Friend from './Friend';
import {fetchFriends} from '../actions/index';

class Friends extends React.Component {
    componentDidMount() {
        this.props.fetchFriends();
    }

    render() {
        return (
            <div>
                {this.props.friends.map(friend => (
                    <Friend friend={friend} />
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    friends: state.friends,
});

export default withRouter (
    connect(
        mapStateToProps,
        { fetchFriends }
    )(Friends)
);