import React, {Component} from 'react';


export default class DataTable extends Component {
  
    
    populateTable() {
        let names = this.props.names.map ((name) =>                                                             
                                <td key="name"> {name} </td>                 
                        ); 
        
        let mails = this.props.mails.map ((mail) =>                                                             
                                <td key="mail"> {mail} </td>                                                                 
                           
                        );
        let phones = this.props.phones.map ((phone) =>                                                            
                                <td key="phone"> {phone} </td>                                                                 
                            
                        );
        return (
            this.props.names.map (() => 
                <tr> 
                    {names}
                    {mails}
                    {phones}                    
                </tr>
            )
        );    
    }
    constructor() {
        super();
        this.populateTable = this.populateTable.bind(this);
    }
    render() {                       
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th> Nome </th>
                            <th> E-mail </th>
                            <th> Telefone </th>
                        </tr>  
                    </thead> 
                    <tbody>           
                        {this.populateTable}                                         
                    </tbody>          
                </table>
            </div>
        )
    }
}