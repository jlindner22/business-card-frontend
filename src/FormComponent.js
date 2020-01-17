import React from 'react';

class FormComponent extends React.Component {

  render() {
console.log(this.props.card)

  return (

<form >
  <label >
    Name: 
    <input type="text" name="name" value={this.props.name} onChange={this.props.handleChange}/>
  </label>
  <br></br>
  <label>
    Title: 
    <input type="text" name="title" value={this.props.title} onChange={this.props.handleChange}/>
  </label>
  <br></br>
  <label>
    Company Name: 
    <input type="text" name="company" value={this.props.company} onChange={this.props.handleChange}/>
  </label>
  <br></br>
  <label>
    Company Address: 
    <input type="text" name="address" value={this.props.address} onChange={this.props.handleChange}/>
  </label>
  <br></br>
  <label>
    Email: 
    <input type="text" name="email" value={this.props.email} onChange={this.props.handleChange}/>
  </label>
  <br></br>
  <label>
    Phone Number: 
    <input type="text" name="phone_number" value={this.props.phone_number} onChange={this.props.handleChange}/>
  </label>
  <br></br>
  <label>
    Website: 
    <input type="text" name="website" value={this.props.website} onChange={this.props.handleChange}/>
  </label>
  <br></br>
  <label>
    Company logo: 
    <input type="text" name="logo" value={this.props.logo} onChange={this.props.handleChange}/>
  </label>
  <br></br>
  <input type="submit" value="Save" />
</form>
  );
}
}

export default FormComponent;