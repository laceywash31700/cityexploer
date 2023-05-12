import React from "react";

class Error extends React.Component {
    render() {
        return (
            <>
                <h2>{this.props.error1.name}</h2>
                <p>{this.props.error1.message}</p>
                <p>{this.props.error2.message}</p>
                <p>{this.props.error3.message}</p>
            </>
        );
    }
}
export default Error;
