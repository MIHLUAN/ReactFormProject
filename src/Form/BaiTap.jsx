import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import TableSinhVien from './TableSinhVien'


export default class BaiTap extends Component {
    state={
        formValue:{
            maSV:'',
            hoTen:'',
            soDienThoai:'',
            email:''
        },
        formError:{
            maSV:'',
            hoTen:'',
            soDienThoai:'',
            email:''
        },
        valid: false,
        arrSinhVien: [
            {  maSV:1,
            hoTen:'luan',
            soDienThoai:'0789213',
            email:'kk@gmail.com' },
            {  maSV:2,
                hoTen:'tieu Vy',
                soDienThoai:'0789213',
                email:'kk@gmail.com' }
        ],
         searchTerm:"",
    }
    checkFormValid = () => {
        //return true | false : true khi form hợp lệ, false khi form không hợp lệ
        /*
            form hợp lệ khi: Các trường formError = rỗng, và các trường value tưng ứng phải khác rỗng 
        */
        let { formError, formValue } = this.state;
        for (let key in formError) {
            if (formError[key] !== '' || formValue[key] === '') {
                return false;
            }
        }


        return true;
    }
    
    handleChangeInput = (e) => {
        let { value, name } = e.target;
       
        let dataType = e.target.getAttribute('data-type');
        let newFormValue = this.state.formValue;
        newFormValue[name] = value;
        let newFromError = this.state.formError;
        let message = '';
        if (value.trim() === '') {
            message = name + ' không được để trống !';
        } else {
            if (dataType == 'number') {
                let regexNumber = /^\d+(,\d{1,2})?$/;
                if (!regexNumber.test(value)) {
                    message = name + ' không đúng định dạng!';
                }
            }
            if (dataType == 'email') {
                let regexNumber = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
                if (!regexNumber.test(value)) {
                    message = name + ' không đúng định dạng!';
                }
            }
            if (dataType == 'name') {
                let regexNumber = /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\ ]+$/;
                if (!regexNumber.test(value)) {
                    message = name + ' không đúng định dạng!';
                }
            }
            if (dataType == 'maSV') {
                let regexNumber = /[a-z0-9]/;
                if (!regexNumber.test(value)) {
                    message = name + ' không đúng định dạng!';
                }
            }
        }
        newFromError[name] = message;
        this.setState({
            formValue: newFormValue,
            formError: newFromError
        }, () => {
            this.setState({
                valid: this.checkFormValid()
                

            })
        })


        console.log(name, value);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.checkFormValid()) {
            alert('Form is invalid!');
            return; 
        }
        let arrSinhVien = this.state.arrSinhVien;
        let newSinhVien = { ...this.state.formValue };
        arrSinhVien.push(newSinhVien);
        this.setState({
            arrSinhVien: arrSinhVien,
            formValue:{
                maSV:'',
                hoTen:'',
                soDienThoai:'',
                email:''
            }
        })
        // console.log('submit',this.state.formValue);
    }
    handleEditSinhVien = (prodClick) => {
        this.setState({
            formValue: prodClick
        }, () => {
            this.setState({
                valid: this.checkFormValid()
            })
        })

    }
    handleUpdate = () => {
        let { arrSinhVien, formValue } = this.state;
        let sinhVienUpdate = arrSinhVien.find(pro => pro.maSV === formValue.maSV);

        if (sinhVienUpdate) {
            for (let key in sinhVienUpdate) {
                if (key !== 'maSV') {
                    sinhVienUpdate[key] = formValue[key];
                }
            }
        }
        this.setState({
            arrSinhVien: arrSinhVien,
            formValue:{
                maSV:'',
                hoTen:'',
                soDienThoai:'',
                email:''
            }
          
        })

    }
    handleDel = (idClick) => {
        console.log(idClick)
        let arrSinhVien = this.state.arrSinhVien.filter(prod => prod.maSV !== idClick);

        this.setState({
            arrSinhVien: arrSinhVien
        })
    }
    
    search=(e)=>{
        let { value, name } = e.target;
        const xx={...this.state.arrSinhVien}
        console.log(name, value);
            console.log(this.state.arrSinhVien)
            let arrSinhVien = this.state.arrSinhVien.filter(prod => prod.hoTen.match(value) );
            
            this.setState({
                arrSinhVien: arrSinhVien
            })
        
    }
  render() {
   
    return (
      <div className='container'>
      <h3>Bài tập form</h3>
        <FormSinhVien search={this.search} handleUpdate={this.handleUpdate} handleSubmit={this.handleSubmit} formError={this.state.formError} handleChangeInput={this.handleChangeInput} valid={this.state.valid} formValue={this.state.formValue} />
        <TableSinhVien handleDel={this.handleDel} arrSinhVien={this.state.arrSinhVien} handleEditSinhVien={this.handleEditSinhVien}/>
      </div>
    )
  }
}

