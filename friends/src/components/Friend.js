import React from 'react';

class Friend extends React.Component {

    render() {
        return(
            <div>
                <h3>{this.props.friend.name}</h3>
                <p>{this.props.friend.age}</p>
                <p>{this.props.friend.email}</p>
            </div>
        )
    }
}

export default Friend;