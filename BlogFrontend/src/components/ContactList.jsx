import React from 'react'
import Contact from './Contact'

const ContactList = ({data,currentPage, getAllContacts}) => {
  return (
    <main className='main'>
        {data?.content?.length===0 && <div>No contacts</div>}

        <ul className="contact__list">
            {data?.content?.length>0 && data.content.map(contact=> <Contact contact={contact} key={contact.id}  />)}

        </ul>

        {data?.content?.length > 0 && data?.totalPages>1 &&             //here we are checking if data is present and  then if more than one page is present
            <div className="pagination">
                <a onClick={()=>getAllContacts(currentPage-1)} className={0=== currentPage ?'disabled':''}>     {/* if current page is 0 then we use disabled class( written in index.css) else we allow go to previous button */}
                    &laquo;
                </a>

                {
                    data && [...Array(data.totalPages).keys()].map((page,index)=>{
                        <a onClick={()=>getAllContacts(page)} className={currentPage===page?'active':''} key={page}>{page+1}</a>
                    })
                }

                <a onClick={()=>getAllContacts(currentPage+1)} className={data.totalPages=== currentPage+1?'disabled':''}>
                    &raquo;
                </a>

            </div>
        
        }
    </main>
  )
}

export default ContactList