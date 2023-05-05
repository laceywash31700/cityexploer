import React from "react";

class Error extends React.Component {
    render() {
        return (
            <>
                <h2>{this.props.error.name}</h2>
                <p>{this.props.error.message}</p>
            </>
        );
    }
}
export default Error;
