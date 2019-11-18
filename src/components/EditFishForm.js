import React from 'react';

class EditFishForm extends React.Component {
  handleChange = (event) => {
    // update fish
    // 1. take copy of fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };

    // 2. save to state
    this.props.updateFish(this.props.index, updatedFish);
  };
  render() {
    return (
      <div className='fish-edit'>
        <input
          name='name'
          onChange={this.handleChange}
          value={this.props.fish.name}
          type='text'
          placeholder='name'
        />
        <input
          name='price'
          onChange={this.handleChange}
          value={this.props.fish.price}
          type='text'
          placeholder='price'
        />
        <select
          name='status'
          onChange={this.handleChange}
          value={this.props.fish.status}>
          <option value='available'>Fresh!</option>
          <option value='unavailable'>Sold Out!</option>
        </select>
        <textarea
          name='desc'
          onChange={this.handleChange}
          value={this.props.fish.desc}
          placeholder='desc'></textarea>
        <input
          name='image'
          onChange={this.handleChange}
          value={this.props.fish.image}
          type='text'
          placeholder='image'
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
      </div>
    );
  }
}

export default EditFishForm;
