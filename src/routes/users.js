import React,{Component} from 'react';

import DataTable from '../components/data-table';
import NewUserInput from '../components/new-user-input';

export const users = [
  {name: 'Julio', mail: 'julio.meinerz@live.com', phone: '92144773', country: 'Brazil'},
  {name: 'Gabriela', mail: 'gabrieladefant12@gmail.com', phone: '92643640', country: 'Brazil'},
  {name: 'Camila', mail: 'camilaiuahduia@gmail.com', phone: '87361361', country: 'Brazil'},
  {name: 'Bruno', mail: 'bruno@gmail.com', phone:'16387167', country: 'Armenia'}
]

class Users extends Component {
  render() {
    return (
      <div>
        <DataTable users={users} />
        <NewUserInput users={users} />
      </div>
    )
  }
}
export default Users;