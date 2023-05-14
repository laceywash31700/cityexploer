import React from "react";

class Error extends React.Component {
    render() {
        return (
            <>
                <h2>Oh no! Something went wrong.</h2>
                <p>{this.props.err1}</p>
                <p>{this.props.err2}</p>
                <p>{this.props.err3}</p>
            </>
        );
    }
}
export default Error;
