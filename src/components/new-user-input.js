import React,{Component} from 'react';

export default class NewUserInput extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      mail:'',
      phone: '',
      country: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChanges = this.handleInputChanges.bind(this);
  }
  handleSubmit() {
    
  }
  handleInputChanges(event) {
    this.setState({[event.target.name]:event.target.value});
  }
  render() {
    return (
      <div>
      <div className="row">      
        <h3> Add new user </h3>
      </div>
      <div className="row">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            Name
            <input className="form-control" type="text" name="name" value={this.state.name} onChange={this.handleInputChanges} required />
          </div>
          <div className="form-group">
            Mail
            <input className="form-control" type="mail" name="mail" value={this.state.mail} onChange={this.handleInputChanges} required />
          </div>
          <div className="form-group">
            Phone
            <input className="form-control" type="phone" name="phone" value={this.state.phone} onChange={this.handleInputChanges} />
          </div>
          <input type="submit" />
        </form>
      </div>

    </div>
  
    )
  }
    
}