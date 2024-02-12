import React from "react";

class Lifecycle2 extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
                {console.log("3rd call")}
            </div>
        );
    }
}
 
export default Lifecycle2;