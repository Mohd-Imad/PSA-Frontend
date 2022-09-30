import React, { Component } from 'react'

class ContactList extends Component {
  getDetails = (contact)=>{
    console.log(contact)
    this.props.selectedData(contact);
  }
  render() {
    // let { contacts } = this.props;
    return (
      <div>
        <h1>Contact List</h1> 
{/*         <pre>{JSON.stringify(this.props)}</pre>
 */}        <table className='table table-hover'>
            <thead className='bg-danger text-white'>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Age</td>
                    <td>Gender</td>
                    <td>Blood Group</td>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.contacts.users.map((contact,index)=>{
                        return <tr key={index} onMouseOver={this.getDetails.bind(this,contact)}>
                            <td>{contact.id}</td>
                            <td>{contact.firstName + " " + contact.lastName}</td>
                            <td>{contact.email}</td>
                            <td>{contact.age}</td>
                            <td>{contact.gender}</td>
                            <td>{contact.bloodGroup}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}

export default ContactList