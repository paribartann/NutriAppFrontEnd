import React, { Component } from 'react'
// import {Form, Input, Button, Radio,} from 'antd';
// import 'antd/dist/antd.css';



export default class formComponent extends Component {
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);
        }
        });
    }



  render() {
    return (
      <div>
        <form>
            First name:<br/>
            <input type="text" name="firstname" /><br />
            Last name:<br />
            <input type="text" name="lastname" />
        </form>
      </div>
    )
  }
}
