import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Serach from './Serach';
import TableData from './TableData';
import User from './User';
import DataUser from './Data.json';
class App extends Component {
  constructor(props) {
    super(props);
      this.state ={
        hienThiForm:false,
        data:DataUser ,
        serachText:''
      }
  }

  doiTrangThai =() =>{
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }
  getTextSearch = (dl)=>{
    this.setState({
      serachText:dl
    });
   
  }
  render() {
    var ketqua =[];
    this.state.data.forEach((item)=>{
      if((item.name.indexOf(this.state.serachText) !== -1) || (item.phone.indexOf(this.state.serachText) !== -1)) {
        ketqua.push(item);
      }
    })
    console.log(ketqua);
    return (
      <div>
          <Header/>
     <div className="serchForm">
       <div className="container">
         <div className="row">
         <div className="col-12">
               <Serach ketNoi={()=>this.doiTrangThai()} hienThiForm={this.state.hienThiForm} checkSearch={(dl)=>this.getTextSearch(dl)}/>
               </div>
                <TableData DataUserProps={ketqua}/>
                <User hienThiForm={this.state.hienThiForm}/>
           </div>
       </div>
     </div>
      </div>
    );
  }
}

export default App;
