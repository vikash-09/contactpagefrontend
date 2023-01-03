import React from 'react';
import './AddContact.css';
import ContactList from './ContactList';

export default function AddContact() {
    const Contacts=
    [
        {
            name: "bjmn",
            email: "bjmr@gmail.com"
        },
        {
            name: "mnne",
            email: "mnne@gmail.com"
        },
    ];

  return (
    <div className='addContact'>
        <h1>Add Contact</h1>
        <form className='details'>
            <div className='email'>
                <label htmlFor="email">Name</label>
                <input type="text" name='name' placeholder='Enter Your Name'/>
            </div>

            <div className='email'>
                <label htmlFor="email">Email</label>
                <input type="email" name='name' placeholder='Enter Your Email Address'/>
            </div>

            <button id='btn' type='submit'>Submit</button>
        </form>
        {Contacts.map((Contact) =>{
           return <ContactList data={Contact}></ContactList>
        })}
        <hr />
        
    </div>
  )
}
