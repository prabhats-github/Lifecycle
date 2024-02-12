import React from "react";

class Lifecycle extends React.Component {
    constructor(){
        super()
        console.log("1st call")
    }
    state = {  } 
    render() { 
        return (
            <div>
                {console.log("2nd call")}
            </div>
        );
    }

    componentDidMount(){
        console.log("4th call of lifecycle")
    }
}
 
export default Lifecycle;