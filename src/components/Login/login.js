import React, { Component } from 'react'
import "../Login/login.css";
import image from "../../assets/illustration.png";
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';


 class Login extends Component {

  
  

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      
    };
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = event => {
    //prevent the page from refreshing
    console.log("Submitted!!");
    event.preventDefault();

   
    //const {history} = this.props;
    // const { navigate } = this.props.useNavigate;

    
    
    //making the JSON body
    const userLogin = {
        'email' : this.state.email, 
        'password' : this.state.password,
    }
    
    // making the API call
    console.log(userLogin);
    axios.post('http://localhost:8080/admin/login', userLogin)
        .then(res => {

            
            console.log(res.data);
            localStorage.setItem('userEmail', (res.data) ? this.state.email : 'null');
            console.log(localStorage.getItem('userEmail'));

            if(res.data) alert('Logged in Succsesfully');
            else alert("Invalid Username/password");
            if(localStorage.getItem('userEmail') === 'admin') {
                
                this.props.navigation.navigate("home")
                console.log("home");
            } else if (localStorage.getItem('userEmail') != 'null'){

                console.log("home");
                this.props.navigate("/home");
            }

        })
        .catch(err => {
            alert("Server refused to connect, please try later");
            console.log(err);
        }).finally(console.log('history'));
}



  

  render() {
    return (
      <div className="main">
        <section className='container1'>
            <div className='login-container'>
                <div>
                    <div className='form-container'>
                    <img
                        src={image}
                        alt="illustration"
                        class="illustration"
                    />
                    <h1 class="opacity">Admin Login</h1>
                    <form  onSubmit={this.handleSubmit} > 
                        <input type="email"    placeholder="Email-Id"  onChange={this.handleEmailChange}    value={this.email}/>
                        <input type="password" placeholder="Password"  onChange={this.handlePasswordChange} value={this.password}/>
                        <button class="opacity">SUBMIT</button>
                    </form>
                    <div className='sign-in opacity'>
                      <Link className='link' to="/SalesLogin">Sales Login</Link>
                    </div>
                    </div>                    
                </div>
            </div>
        </section>

      </div>
    )
  }
}

function WithNavigate(props) {
  let navigate = useNavigate();
  return <Login {...props} navigate={navigate} />
}

export default WithNavigate;