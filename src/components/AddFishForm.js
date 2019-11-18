import React from "react";

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = event => {
        // stoping submit
        event.preventDefault();
        // get text from input
        const fish = {
            name : this.nameRef.current.value,
            price : parseFloat(this.priceRef.current.value),
            status : this.statusRef.current.value,
            desc : this.descRef.current.value,
            image : this.imageRef.current.value,
        }

        this.props.addFish(fish);
        // refresh the form
        event.currentTarget.reset();

        // change page to /store

    }
    render() {
        return(
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="text" placeholder="name" />
                <input name="price" ref={this.priceRef} type="text" placeholder="price" />
                <select name="status" ref={this.statusRef} >
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" ref={this.descRef}  placeholder="desc"></textarea>
                <input name="image" ref={this.imageRef} type="text" placeholder="image" />
                <button type="submit">+ Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm;