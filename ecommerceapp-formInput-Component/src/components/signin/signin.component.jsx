import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/customButton.component';
import '../signin/signin.styles.scss';

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
                    <FormInput
                     name = 'email'
                     type = 'email'
                     value = {this.state.email}
                     onChange = {this.changeHandler}
                     label = 'Email'
                     required
                    />
                  
                     <FormInput
                     name = 'password'
                     type = 'password'
                     value = {this.state.password}
                     onChange = {this.changeHandler}
                     label = 'Password'
                     required
                    />
     
                    <CustomButton
                     type = 'submit'
                     
                    >
                        Sign In
                     </CustomButton>   

                </form>
            </div>
        )
    }
}

export default SignIn;