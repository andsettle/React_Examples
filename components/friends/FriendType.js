import React, { Component } from "react";
import Types from "./Types"

class Type extends Component {
    state = {
        url: "https:/somepic.somewhere.com",
        title: "Bender",
        headline: "Bender Rodriguez"
    };

    render(){
        return(
            <>
            <Types
                url={this.state.url}
                title={this.state.title}
                headline={this.state.headline}
            />
            </>
        );
    }
}

export default Type;