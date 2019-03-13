import React, { Component } from 'react'
import { Tabs, Icon } from 'antd';
import {Form, Input, Button} from 'antd';
import 'antd/dist/antd.css'



const API = 'http://localhost:3001/register';
const NAPI = 'http://localhost:3001/login';


const TabPane = Tabs.TabPane;

 class Mainpage extends Component {

     constructor(props) {
      super(props);

      this.state = {
        fname: "",
        lname:"",
        email: "",
        username: "",
        password: ""
      };

      this.fetchRegisterData = this.fetchRegisterData.bind(this);
      this.fetchLoginData = this.fetchLoginData.bind(this);
      
     }

     fetchRegisterData(){
         let data={fname:this.state.fname,
             lname:this.state.lname,
             email:this.state.email,
             username:this.state.username,
             password:this.state.password }

         fetch(API, {
             method : 'POST',
             body : JSON.stringify(data),
             headers:{
              
                'Content-Type': 'application/json'
            }
         }).then(res => res.json())
         .then(response => console.log('Success:', JSON.stringify(response)))
         .catch(error => console.error('Error:', error));
     }


     fetchLoginData(){
         let data={
             username:this.state.username,
             password:this.state.password }

         fetch(NAPI, {
             method : 'POST',
             body : JSON.stringify(data),
             headers:{
              
                'Content-Type': 'application/json'
            }
         }).then(res =>  res.json() )
         .then( data => {
            console.log(data)
            if (data.code === 200)
            {
              console.log('here!')
              this.props.history.push('/welcomePage');
             }
            else if (data.code === 204)
            {
              console.log('Email and password do not match');
            }
            else
            {
              console.log("no account exits");
            }
         })
         .catch(error => console.error('Error:', error));
     }



     loginTab() {

     return(<div>



            <Form action="#" labelCol={{ span: 5 }} wrapperCol={{ span: 5 }}>  

              

              <Form.Item label="Username">
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="text" id="username" name="username"
                        placeholder="Username" 
                          onChange={e => this.setState({ username: e.target.value })}
                          value={this.state.username}
                      />
              </Form.Item>

              <Form.Item label="Password">
                      <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password" id="password" name="password" placeholder="Please enter your password."
                          onChange={e => this.setState({ password: e.target.value })}
                          value={this.state.password}
                      />
              </Form.Item>

            <Form.Item>
          
              <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.fetchLoginData} >
                Login
              </Button>
            
            </Form.Item>

            </Form>
          </div>)
        
     }


     signupTab() {
       return (
         
        <Form action="#" labelCol={{ span: 5 }} wrapperCol={{ span: 5 }}>
              <Form.Item label="First Name">
                      <Input prefix={<Icon type="user-add" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          type="text" id="fname" name="fname" placeholder="Please enter your first name."
                          onChange={e => this.setState({ fname: e.target.value })}
                          value={this.state.fname}
                      />
              </Form.Item>


              <Form.Item label="Last Name">
                      <Input prefix={<Icon type="user-add" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          type="text" id="lname" name="lname" placeholder="Please enter your last name."
                          onChange={e => this.setState({ lname: e.target.value })}
                          value={this.state.lname}
                      />
              </Form.Item>



              <Form.Item label="Email">
                      <Input prefix={<Icon type="contacts" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          type="email" id="email" name="email" placeholder="Please enter your email."
                          onChange={e => this.setState({ email: e.target.value })}
                          value={this.state.email}
                      />
              </Form.Item>

              <Form.Item label="Username">
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          type="text" id="username" name="username"
                          placeholder="Username" 
                          onChange={e => this.setState({ username: e.target.value })}
                          value={this.state.username}
                      />
              </Form.Item>

              <Form.Item label="Password">
                      <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          type="password" id="password" name="password" placeholder="Please enter your password."
                          onChange={e => this.setState({ password: e.target.value })}
                          value={this.state.password}
                      />
              </Form.Item>

            <Form.Item>
            
              <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.fetchRegisterData} >
                Register Now
              </Button>
              
          </Form.Item>
          </Form>
          )

      
     }
      


     



  render() {

    return (
      
        <div>
             <Tabs defaultActiveKey="2">
              <TabPane tab={<span><Icon type="arrow-up" />Sign Up</span>} key="1">
                  {this.signupTab()}
              </TabPane>
              <TabPane tab={<span><Icon type="login" />Login</span>} key="2">
                   {this.loginTab()}
              </TabPane>
            </Tabs>

          
        
        </div>
 
    )
  }
}




export default Mainpage;