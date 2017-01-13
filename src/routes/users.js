import React,{Component} from 'react';

import DataTable from '../components/data-table';

let userNames = ['julio', 'gabriela','camila'];
let userMails = ['julio.meinerz@live.com', 'gabrieladefant12@gmail.com', 'camilameinerz@gmail.com'];
let userPhones = ['92144773', '92643640', '98716187'];



class Users extends Component {
  render() {
    return (
      <div>
        <DataTable names={userNames} mails={userMails} phones={userPhones} />
      </div>
    )
  }
}





export default Users;