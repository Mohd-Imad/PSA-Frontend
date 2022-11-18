import React from 'react'

const ContactList = (props) => {
  return (
    <div>
        <h1>Contact List</h1>
        <pre>{JSON.stringify(props.contacts)}</pre>
        <table className='table table-hover'>
          <thead className='bg-info'>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              props.contacts.users.map((contact)=>{
                return <tr>
                  <td>{contact.id}</td>
                </tr>
              })
            }
          </tbody>
        </table>
    </div>
  )
}

export default ContactList