import React, { Component } from 'react'

class tags extends Component {
    render() {
        return (
            <ul>
                {this.props.tags.map((tag) =>
                    <li key={tag.id}>{tag.attributes.name}</li>
                )}
            </ul>
        )
    }
}
export default tags