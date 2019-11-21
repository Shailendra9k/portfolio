import React, { Component } from "react";
import InitialMap from "./google_map";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: [
        {
          position: {
            lat: -34.397,
            lng: 150.644
          }
        }
      ]
    };
  }

  render() {
    return (
      <section id="contact">
        <div className="container">
          <h3 className="white-color">Contact Me</h3>
          <hr className="white-color sub" />
          <p className="text-faded contact">
            Technology is playing bigger role in connecting people turning whole
            world to common village.
          </p>
          <div className="row">
            <div className="col-md-7">
              <InitialMap
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `500px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                markers={this.state.markers}
              />
            </div>
            <div className="col-md-5">
              <ul>
                <li style={{ fontSize: "25px", color: "white" }}>
                  <i className="fa fa-phone" aria-hidden="true" />
                  &nbsp; +358 400268340
                </li>
                <li style={{ fontSize: "25px", color: "white" }}>
                  <i className="fa fa-at" aria-hidden="true" />
                  &nbsp; shailendrakushwaha9@gmail.com
                </li>
                <li style={{ fontSize: "25px", color: "white" }}>
                  <i className="fa fa-home" aria-hidden="true" />
                  &nbsp; Pasilanraitio 6A 07, 00240, Helsinki
                </li>
                <li style={{ fontSize: "25px", color: "white" }}>
                  <i className="fa fa-twitter" aria-hidden="true" />
                  &nbsp; @Shailendra
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;

// import React, { Component } from 'react';
// import axios from 'axios';

// export default class Contact extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       name: '',
//       message: '',
//       email: '',
//       subject: '',
//       response: '',
//       submit: false,
//       redMsg: false,
//       emailValid: true
//     }
//     this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     this.sendData = this.sendData.bind(this);
//     this.validEmail = this.validEmail.bind(this);
//   }

//   sendData(event){
//     event.preventDefault();

//     const { name, email, subject, message } = this.state;
//     let response = '';
//     let sendToServer = true;

//     if(!/\S/.test(name)){
//       this.setState({
//         response: 'Please enter a name',
//         redMsg: true
//       });
//       sendToServer = false;
//     } else if( this.emailRegex.test(email)===false){
//       this.setState({
//         response: 'Please enter a valid email',
//         redMsg: true,
//         emailValid: false
//       });
//       sendToServer = false;
//     } else if(!/\S/.test(subject)){
//       this.setState({
//         response: 'Please enter a subject',
//         redMsg: true
//       });
//       sendToServer = false;
//     } else if(!/\S/.test(message)){
//       this.setState({
//         response: 'Please enter a message',
//         redMsg: true
//       });
//       sendToServer = false;
//     }

//     if(sendToServer){

//       setTimeout(()=>{
//         this.submitCheck, 5000
//       });
//       axios.post('/contact', {name, email, subject, message}).then( resp => {
//         this.updateState(resp);
//       }).catch( err => {
//         this.errorResponse(err);
//       });
//       this.setState({
//         submit: true
//       });
//     }

//   }

//   submitCheck(){
//     const { submit } = this.state;
//     if(submit === false){
//       this.setState({
//         response: '404 Error. Message has not been sent!',
//         redMsg: true
//       });
//     }
//   }

//   errorResponse(error){
//     //let errorString = JSON.stringify(error);
//     this.setState({
//       response: 'There was an issue sending the email. Please try again!',
//       submit: false,
//       redMsg: true
//     });
//   }

//   updateState(response){
//     //console.log('repsonse', response);
//     if(response.data.success){
//       this.setState({
//         name: '',
//         message: '',
//         email: '',
//         subject: '',
//         response: response.data.message,
//         submit: false,
//         redMsg: false
//       });
//     } else {
//       this.setState({
//         response: response.data.message,
//         submit: false,
//         redMsg: true
//       });
//     }

//   }

//   validEmail(e){
//     let email = e.target.value;
//     if(this.emailRegex.test(email)===false){
//       this.setState({
//         email: email,
//         emailValid: false
//       });
//     } else {
//       this.setState({
//         email: email,
//         emailValid: true
//       });
//     }
//   }

//   render(){
//     const { name, subject, email, message, response, submit, redMsg, emailValid } = this.state;
//     let submitResult = {};
//     let emailStyle = {};

//     if(emailValid===false){
//       emailStyle = {
//         borderBottom: '1px solid #F44336',
//         boxShadow: '0 1px 0 0 #F44336'
//       }
//     }

//     if(submit){
//       submitResult = (
//         <div className="preloader-wrapper contact-response active">
//         <div className="spinner-layer spinner-blue-only">
//           <div className="circle-clipper left">
//             <div className="circle"></div>
//           </div><div className="gap-patch">
//             <div className="circle"></div>
//           </div><div className="circle-clipper right">
//             <div className="circle"></div>
//           </div>
//         </div>
//       </div>
//       );
//     } else {
//       submitResult = <div className={`${redMsg ? "red-text": "white-color"} contact-response`}>{response}</div>;
//     }

//     return(
//         <section id='contact'>
//         <div className="container">
//         <h3 className='white-color'>Contact Me</h3>
//             <hr className='white-color sub'/>
//             <p className='text-faded contact'>The world becomes a better place when people truly express themselves.</p>
//             <div className="row">

//         <form className="col s12" onSubmit={this.sendData}>
//           <div className="row">
//               <div className="input-field col s12 m6">
//                 <i className="material-icons prefix">account_circle</i>
//                 <input id="icon_prefix" type="text" className="validate" placeholder="Name" name="name" value={name} onChange={e => this.setState({name: e.target.value})}/>
//               </div>
//               <div className="input-field col s12 m6">
//                 <i className="material-icons prefix">email</i>
//                 <input id="icon_email" type="text" style={emailStyle} className="validate" placeholder="Email" name="email" value={email} onChange={e => this.validEmail(e)}/>
//               </div>
//             </div>
//             <div className="row">
//               <div className="input-field col s12">
//                 <i className="material-icons prefix">mode_edit</i>
//                 <input id="icon_prefix2" className="validate" type="text" placeholder="Subject" name="subject" value={subject} onChange={e => this.setState({subject: e.target.value})}/>
//               </div>
//             </div>
//             <div className="row">
//             <div className="input-field col s12">
//               <textarea id="textArea1" className="materialize-textarea validate" type="text" placeholder="Message" value={message} name="message" onChange={e => this.setState({message: e.target.value})}/>
//             </div>
//           </div>
//         <button className="btn waves-effect waves-light" type="submit" name="action">Submit<i className="material-icons right">send</i>
//         </button>
//         {submitResult}
//           </form>
//             </div>
//         </div>
//         </section>
//     );
//   }
// }
