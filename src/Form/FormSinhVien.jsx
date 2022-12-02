import React, { Component } from "react";

export default class FormSinhVien extends Component {
  render() {
    const {handleChangeInput,search,formValue,formError,valid,handleSubmit,handleUpdate}=this.props;
    // console.log(formError)
    return (
      <div className="container"  >
        <div className="card text-left" >
          <div className="card-header bg-dark text-white">
            <h3>Thông Tin Sinh Viên</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group col-6">
                  <span>Mã Sv</span>
                  <input className="form-control" data-type="maSV" value={formValue.maSV} name="maSV" onInput={handleChangeInput}></input>
                  {formError.maSV && <div className='alert alert-danger mt-2'>{formError.maSV}</div>}
                </div>
                <div className="form-group col-6">
                  <span>Họ tên</span>
                  <input className="form-control" data-type="name" name="hoTen" value={formValue.hoTen} onInput={handleChangeInput}></input>
                  {formError.hoTen && <div className='alert alert-danger mt-2'>{formError.hoTen}</div>}

                </div>
              </div>
              <div className="row">
                <div className="form-group col-6">
                  <span>Email</span>
                  <input className="form-control" data-type="email" name="email"value={formValue.email} onInput={handleChangeInput}></input>
                  {formError.email && <div className='alert alert-danger mt-2'>{formError.email}</div>}

                </div>
                <div className="form-group col-6">
                  <span>Số điện thoại</span>
                  <input className="form-control" data-type="number" name="soDienThoai" value={formValue.soDienThoai} onInput={handleChangeInput}></input>
                  {formError.soDienThoai && <div className='alert alert-danger mt-2'>{formError.soDienThoai}</div>}

                </div>
              </div>
              <div className="row">
              <div className="col-md-12 ">
              <button type='submit' className='btn btn-success m-2' disabled={!valid}>Thêm Sinh Viên</button>
              <button onClick={() => {
                handleUpdate()
            }} type='button' className='btn btn-primary m-2' disabled={!valid}>Update</button>
              </div>
              
              </div>
            </form>
            <div className="col-md-6 ">
              <input className="form-control" data-type="search" name="search" onInput={search}></input>
                <button className="btn btn-success m-2">Search</button>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
