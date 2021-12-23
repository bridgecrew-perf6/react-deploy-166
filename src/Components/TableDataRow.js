import React, { Component } from 'react';

class TableDataRow extends Component {
    roleShow = ()=>{
        if(this.props.role === 1){
            return "Admin";
        }
        else if(this.props.role === 2){return "QuanLi";}
        else{return " Person Normal"}
    }
    render() {
        return (
           
            <tr>
                <td >{this.props.stt}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.phone}</td>
                <td>{this.roleShow()}</td>
                <td>
                <div className="btn-group">
                <div className="btn btn-warning edit"><i className="fa fa-edit" />Sửa</div>
                <div className="btn btn-danger delete"><i className="fa fa-delete" />Xóa</div>
                </div>
                </td>
            </tr>
          
        );
    }
}

export default TableDataRow;