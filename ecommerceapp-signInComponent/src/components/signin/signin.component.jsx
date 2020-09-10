import React from 'react';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    submitHandler = event =>{
        event.preventdefault();


        this.setState({email: '', password: ''})
    }

    changeHandler = event =>{
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                

                <form onSubmit={this.submitHandler}>
                    <input
                     name = 'email'
                     type = 'email'
                     value = {this.state.email}
                     onChange = {this.changeHandler}
                     required
                    />
                    <label>Email</label>
            
                     <input
                     name = 'password'
                     type = 'password'
                     value = {this.state.password}
                     onChange = {this.changeHandler}
                     required
                    />
                    <label>Password</label>
                    <input
                     type = 'submit'
                     value = 'submit'
                    />
                </form>
            </div>
        )
    }
}

export default SignIn;