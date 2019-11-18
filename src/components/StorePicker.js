import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {

    myInput = React.createRef();

    goTostore = event => {
        // stoping submit
        event.preventDefault();
        // get text from input
        const storeName = this.myInput.current.value;
        // change page to /store
        this.props.history.push(`/store/${storeName}`);
    }
    render() {
        return (
            <form onSubmit={this.goTostore} className="store-selector">
                <h2>Please Enter Store Name</h2>
                <input 
                    type="text" 
                    ref={this.myInput}
                    required 
                    placeholder="Store Name" 
                    defaultValue={getFunName()}
                />
                <button type="submit">Visit Store -></button>
            </form>
        ) 
        
    }
}

export default StorePicker;