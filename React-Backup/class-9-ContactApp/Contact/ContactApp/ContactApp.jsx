import React, { Component } from 'react'
import Axios from 'axios'
import ContactList from '../ContactList/ContactList'
import ContactDetails from '../ContactDetails/ContactDetails'
class ContactApp extends Component {
    state = {
        contacts :{},
        selectedData : {}
    }

    getSelectedContactData = (contact)=>{
        console.log("test")
     console.log(contact.firstName)
     this.setState({selectedData : contact})
    }

    

    componentDidMount(){
        Axios.get('https://dummyjson.com/users').then((resp)=>this.setState({contacts : resp.data})).catch((err)=>{})
    }
  render() {
    return (
      <div>
        <h1>Contact App</h1>
{/*         <pre>{JSON.stringify(this.state.contacts)}</pre>
        <pre>{JSON.stringify(this.state.selectedData)}</pre>
 */}        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    {
                        Object.keys(this.state.contacts).length > 0 ? 
                        <> 
                            <ContactList contacts={this.state.contacts} selectedData ={this.getSelectedContactData}/>      {/* sending contacts object as props to ContactList */} 
                        </> : null
                    }
                </div>
                <div className="col-md-4">
                    {
                        Object.keys(this.state.selectedData).length > 0 ? 
                        <>
                             <ContactDetails selContact ={this.state.selectedData}/>
                        </> : null
                    }

                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default ContactApp