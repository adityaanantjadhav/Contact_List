import React from 'react'

const Header = ({toggleModal, nbOfContacts}) => {               //Here instead of writing props and then writing props.toggleMode we directly destructured it.
  return (
    <header className='header'>
        <div className="container">
            <h3>Contact List ({nbOfContacts})</h3>
            <button className='btn' onClick={()=>toggleModal(true)}><i className='bi bi-plus-square'></i>Add new Contact</button>

        </div>
    </header>
  )
}

export default Header