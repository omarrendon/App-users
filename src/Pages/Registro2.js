import React, { Component } from "react";
import ListUsers from "../Components/ListUsers";

class Registro2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          lastName: '',
          email: '',
          job: '',
          items: []
        };
      }
    
      onChange = (event) => {
        this.setState({ 
          [event.target.name]: event.target.value
        });
      }
    
      onSubmit = (event) => {
        event.preventDefault();
        this.setState({
          name: '',
          lastName: '',
          email: '',
          job: '',
          items: [...this.state.items, this.state.name, this.state.lastName, this.state.email, this.state.job]
        });
      }
    
      render() {
        const {name, lastName, email, job} = this.state
        return (
          <div>
            <form className="App" onSubmit={this.onSubmit}>
              <input 
                value={name}
                name = 'name'
                placeholder = 'Nombre'
                onChange={this.onChange} 
              />

              <input 
                value={lastName}
                name = 'lastName'
                placeholder = 'Apellidos'
                onChange={this.onChange} 
              />

              <input 
                value={email}
                name = 'email'
                placeholder = 'email'
                onChange={this.onChange} 
              />

              <input 
                value={job} 
                name = 'job'
                placeholder = 'Puesto de trabajo'
                onChange={this.onChange} 
              />

              <button type='submit'>Submit</button>
            </form>
            <ListUsers items={this.state.items} />
          </div>
        );
      }
//   constructor(props) {
//     super(props);
//     this.state = {
//       item: [],
//       user: {
//         name: "",
//         email: "",
//         job: ''
//       }
//     };
//   }
//   handleChange = e => {
//     this.setState({
//       user: {
//         [e.target.name]: e.target.value
//       }
//     });
//     //   console.log(this.state);
//   };

//   handleSubmit = e => {
//     e.preventDefault();
    
//     this.setState({
//     item : [...this.state.item, this.state.user],
//       user: {
//         name: "",
//         email: "",
//         job: "",
//       },
//     });
//     console.log(this.state.user);
//   };

//   render() {
//     const { name, email, job } = this.state.user;

//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             id="name"
//             name="name"
//             placeholder="name"
//             type="text"
//             value={name}
//             onChange={this.handleChange}
//           ></input>
//           <input
//             id="email"
//             name="email"
//             value={email}
//             placeholder="email"
//             type=" email"
//             onChange={this.handleChange}
//           ></input>
//           <input
//             id="job"
//             name="job"
//             placeholder="job"
//             type="text"
//             value={job}
//             onChange={this.handleChange}
//           ></input>

//           <button type="submit">Guardar</button>
//         </form>
//         <ListUsers
//             item={this.state.item}
//         />
        
//         {/* <ul>
//           {this.state.item.map(usr => {
//           return (
//             <li >{usr.item}</li>
//           )
//           })}
//         </ul> */}
//       </div>
//     );
//   }
}

export default Registro2;
