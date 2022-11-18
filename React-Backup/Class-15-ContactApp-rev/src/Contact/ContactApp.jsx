import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import ContactList from './ContactList'
import ContactDetails from './ContactDetails'

const ContactApp = () => {
    let [contact, setContact] = useState({})
    useEffect(()=>{
        Axios.get('https://dummyjson.com/users')
        .then((resp)=>{
            setContact({contact : resp.data})
        })
        .catch((err)=>{})
    },[])
  return (
    <div>
        <h1>Contact App</h1>
        <pre>{JSON.stringify(contact)}</pre>
        <pre>{JSON.stringify(contact.contact)}</pre>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <ContactList contacts ={contact.contact}/>
                </div>
                <div className="col-md-4">
                    <ContactDetails />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactApp