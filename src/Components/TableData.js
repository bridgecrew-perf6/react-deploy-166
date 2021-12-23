import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
 mappingDataUser = ()=>this.props.DataUserProps.map((value,key) => (
    <TableDataRow userName={value.name} key={key} stt={key} phone ={value.phone}
    role ={value.role}/>
   ))
 
    render() {
      
        return (
            <div className="col">
  '
  <table className="table table-striped table-hover table-inverse">
    <thead className="thead-inverse">
      <tr>
        <th>Stt</th>
        <th>Tên</th>
        <th>Điện Thoại</th>
        <th>Quyền</th><th>Hành Động</th>
      </tr>
    </thead>
    <tbody>
        {this.mappingDataUser()}
    </tbody>
  </table>
</div>

        );
    }
}

export default TableData;