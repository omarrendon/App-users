import React, {Component} from 'react'
import Form from './Form'
class ListUser extends Component{
    state = {
        user: {
            name : '',
            lastName : '',
            email : '',
            job : '',
        }
      };
    
      handleChange = e => {
        this.setState({
            user: {
              ...this.state.user,
              [e.target.name]: e.target.value
            }  
        });
      };
    
      handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        
      }
    
    render(){
        const {usuarios } = this.props
        return(
            <div>
                {
                    
                }
            </div>
        )
    }
}
export default ListUser;