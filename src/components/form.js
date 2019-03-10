import React, { Component } from 'react'
import {Form, Input, Button, Icon, Select} from 'antd';
import 'antd/dist/antd.css';
import '../css/form.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const { Option } = Select;

 class Formcomponent extends Component {
  
  constructor(props) {
        super(props);
         this.state = { 
          gender:'Select gender ',
          age: '',
          height: '',
          weight: '',
          bmi: ''
        }

        this.handleSelectChange = this.handleSelectChange.bind(this);
      }

      handleFormSubmit = (e) => {

        e.preventDefault();
        console.log(this.state.gender);
        console.log(this.state.age);
        console.log(this.state.weight);
        console.log(this.state.height);
        console.log(this.state.bmi);
      
        this.setState( {age:''} )
        this.setState( {height:''} )
        this.setState( {weight:''} )
        this.setState( {bmi:''} )
       
      

      }


      handleSelectChange = (value) => {
        console.log("Handle State Change ") 
        this.setState({gender: value});
      }
    
  render() {
    return (
      <div>

       <br />
       <br />

        <h1 style={{ textAlign: "center" }}><Icon type="contacts" /> Welcome Form</h1>

                <br />
                <div>
                    <Form action="#" labelCol={{ span: 5 }} wrapperCol={{ span: 5 }}>
          
                        <Form.Item label="Gender">
                          <Select placeholder='Select Gender' onChange={this.handleSelectChange}>
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                          </Select>
                          
                        </Form.Item>

                        <Form.Item label="Age">
                          <Input type="text" id="name" name="name" placeholder="Please enter your age."
                              onChange={e => this.setState({ age: e.target.value })}
                              value={this.state.age}
                          />
                        </Form.Item>

                      
                        <Form.Item label="Height">
                          <Input type="text" id="name" name="name" placeholder="Please enter your height."
                          onChange={e => this.setState({ height: e.target.value })}
                          value={this.state.height}
                          />
                        </Form.Item>

                        <Form.Item label="Weight">
                          <Input type="text" id="name" name="name" placeholder="Please enter your weight."
                          onChange={e => this.setState({ weight: e.target.value })}
                          value={this.state.weight}
                          />
                        </Form.Item>

                        <Form.Item label="BMI">
                            <Input type="text" id="name" name="name" placeholder="Please enter your BMI."
                            onChange={e => this.setState({ bmi: e.target.value })}
                            value={this.state.bmi}
                        />
                        </Form.Item>

                        <Button type ="primary" htmlType="submit" onClick={e => this.handleFormSubmit(e)}> Submit </Button> 
                        
                    </ Form >
              </ div>
        
      </div>
    )
  }
}



export default Formcomponent;