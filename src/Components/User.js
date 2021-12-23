import React, { Component } from 'react';

class User extends Component {
// constructor(props) {
//     super(props);
//     this.state = {
//         trangThaiChinhSua:false
//     }
// }
// thayDoiTrangThai = () =>{
//     this.setState({
//         trangThaiChinhSua: !this.state.trangThaiChinhSua
//     });
// }
// hienThiNut= ()=>{
//     if(this.state.trangThaiChinhSua === true){
//         return     <div className="btn btn-block btn-outline-secondary" onClick={()=>this.thayDoiTrangThai()}>Đóng lại</div>;
//     }
//     else
//      {
//         return     <div className="btn btn-block btn-outline-info" onClick={()=>this.thayDoiTrangThai()} >Thêm mới</div>;
//     }
// }
// hienthiForm =()=>{
//     if(this.state.trangThaiChinhSua ===true){
//         return(
         
//         )
//     }
// }
    kiemTraTrangThai = ()=>{
        if(this.props.hienThiForm === true){
            return ( 
                <div className="col"> <div className="card border-primary mb-3 mt-2">
            <div className="card-header">Thêm mới User</div>
            <div className="card-body text-primary">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Tên user" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" aplaceholder="Điện thoại" />
              </div>
              <div className="form-group">
                <select className="custom-select" required>
                  <option value>Chọn quyền mặc định</option>
                  <option value={1}>Admin</option>
                  <option value={2}>Modrator</option>
                  <option value={3}>Normal</option>
                </select>
              </div>
              <div className="form-group">
                <div className="btn btn-block btn-primary">Thêm mới</div>
              </div>
            </div>
          </div>
          </div>
          )
        }
    }
    render() {

        return (
          
            <div className="card text-left">
      
                {this.kiemTraTrangThai()}
           
            </div>
         
          
        );
    }
}

export default User;