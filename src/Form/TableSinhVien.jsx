import React, { Component } from 'react'

export default class TableSinhVien extends Component {
    renderSinhVien=()=>{
        const {arrSinhVien,handleDel,handleEditSinhVien}=this.props;
        return arrSinhVien.map((sinhVien,index)=>{
            return(
                <tr key={index}>
                <td>{sinhVien.maSV}</td>
                <td>{sinhVien.hoTen}</td>
                <td>{sinhVien.soDienThoai}</td>
                <td>{sinhVien.email}</td>
                <td>
                                <button className='btn btn-danger' onClick={()=>{
                                    handleDel(sinhVien.maSV)
                                }}>
                                    <i className='fa fa-trash'></i>
                                </button>
                                <button onClick={()=>{
                                    
                                    handleEditSinhVien(sinhVien)
                                }} className='btn btn-primary mx-2'>
                                    <i className='fa fa-edit'></i>
                                </button>
                            </td>
                </tr>
            )
        })

    }
  render() {
    return (
      <div className='conatiner'>
            <table className='table'>
                <thead>
                    <tr className='bg-dark text-white'>
                        <th>Mã SV</th>
                        <th>Họ tên</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {this.renderSinhVien()}
                </tbody>
            </table>
      </div>
    )
  }
}
