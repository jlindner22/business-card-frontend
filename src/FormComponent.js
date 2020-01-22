import React from 'react';
import { Link } from 'react-router-dom';

class FormComponent extends React.Component {

  render() {

  return (

<div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
<form className="justify-content-center">
  <div className="form-group">
  <label >
    Name: 
    <input className="form-control" type="text" name="name" value={this.props.name} onChange={this.props.handleChange}/>
  </label>
  <br></br>
  <label >
    Title: 
    <input className="form-control" type="text" name="title" value={this.props.title} onChange={this.props.handleChange}/>
  </label>
  <br></br>
  <label >
    Company Name: 
    <input className="form-control" type="text" name="company" value={this.props.company} onChange={this.props.handleChange}/>
  </label>
  <br></br>
  <label >
    Company Address: 
    <input className="form-control" type="text" name="address" value={this.props.address} onChange={this.props.handleChange}/>
  </label>
  <br></br>
  <label >
    Email: 
    <input className="form-control" type="text" name="email" value={this.props.email} onChange={this.props.handleChange}/>
  </label>
  <br></br>
  <label >
  LinkedIn: 
    <input className="form-control" type="text" name="linkedin" value={this.props.linkedin} onChange={this.props.handleChange}/>
  </label>
  <br></br>
  <label >
    Phone Number: 
    <input className="form-control" type="text" name="phone_number" value={this.props.phone_number} onChange={this.props.handleChange}/>
  </label>
  <br></br>
  <label >
    Website: 
    <input className="form-control" type="text" name="website" value={this.props.website} onChange={this.props.handleChange}/>
  </label>
  <br></br>
  <label >
    Company logo: 
    <input className="form-control" type="text" name="logo" value={this.props.logo} onChange={this.props.handleChange}/>
  </label>
  <br/>
  <br></br>
  <Link to={'/mycards'}>
  <input className="btn btn-primary btn-lg" type="submit" onClick={this.props.handleSubmit} value="Save"/>
  </Link>
  </div>
</form>
</div>
  );
}
}

export default FormComponent;
