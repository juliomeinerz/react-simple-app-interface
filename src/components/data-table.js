import React, {Component} from 'react';


export default class DataTable extends Component {
  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th> Name </th>
              <th> Mail Address </th>
              <th> Phone </th>
              <th> Country </th>
            </tr>                  
          </thead> 
          <tbody>     
            {this.props.users.map((user,index) => {
              return (                
                <tr key={index}>
                  <td> {user.name} </td>
                  <td> {user.mail} </td>
                  <td> {user.phone} </td>  
                  <td> {user.country} </td>                                  
                </tr>
              )                        
            })}                                               
          </tbody>          
        </table>
      </div>
    )
  }
}