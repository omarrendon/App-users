import React, { Component } from "react";
// import ListUsers from "../Components/ListUsers";
import Form from "../Components/Form";
class Registro2 extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: "",
  //     lastName: "",
  //     email: "",
  //     job: "",
  //     items: []
  //   };
  // }

  // onChange = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // };

  // onSubmit = event => {
  //   event.preventDefault();
  //   this.setState({
  //     name: "",
  //     lastName: "",
  //     email: "",
  //     job: "",
  //     items: [
  //       ...this.state.items,
  //       this.state.name,
  //       this.state.lastName,
  //       this.state.email,
  //       this.state.job
  //     ]
  //   });
  //   console.log(this.state);
  // };

  render() {
    // const {name, lastName, email, job} = this.state
    return (
      <>
        {/* <Form 
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          name={this.state.name}
          lastName={this.state.lastName}
          email={this.state.email}
          job={this.state.job}
        /> */}
        <Form/>
        {/* <ListUsers items={this.state.items} /> */}
      </>
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
