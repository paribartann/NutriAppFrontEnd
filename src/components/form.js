import React, { Component } from 'react'
import {Form, Input, Button, Icon, Select} from 'antd';
import 'antd/dist/antd.css';
import '../css/form.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const { Option } = Select;

const API = 'http://localhost:3001/getValues';

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
        this.fetchValues = this.fetchValues.bind(this);
      }

      handleFormSubmit = (e) => {

        e.preventDefault();
    
        this.fetchValues();
      
        this.setState( {age:''} )
        this.setState( {height:''} )
        this.setState( {weight:''} )
        this.setState( {bmi:''} )

      }
      
      handleSelectChange = (value) => {
        console.log("Handle State Change ") 
        this.setState({gender: value});
      }


      fetchValues(){
        let data = {
           gender: this.state.gender,
           age: this.state.age, 
           height: this.state.height,
           weight: this.state.weight,
           bmi: this.state.bmi

        }

        fetch(API, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type' : 'application/json'
          }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
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