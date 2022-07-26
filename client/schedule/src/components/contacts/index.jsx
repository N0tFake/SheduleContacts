import { useEffect } from 'react'
import { useState } from 'react'

import './style.css'

export const Contacts = () => {

    const [ contacts, setContacts ] = useState()

    useEffect(() => {
        fetch('/contacts')
            .then(response => response.json())
            .then(data => {
                setContacts(data)
            })

    },[contacts])

    function addContact(){
        const name = 'Teste'
        const email = 'este@sdas.s'
        const phone = '123456789'
        const date_nasc = '2000-12-21'

        const contact = { name, email, phone, date_nasc }   

        fetch('/contact', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contact)
        }).then(res => {
            console.log(res.json())
        }, []) 
    }

    return (
        <>
            <div>
                {contacts == null ? <h1>Empyt</h1> : contacts.map(data => {
                    return (
                        <div key={data.id} className="card">
                            <div>    
                                <span>Nome: </span>
                                <span>{data.name}</span>
                            </div>
                            <div>   
                                <span>E-mail: </span>
                                <span>{data.email}</span>
                            </div>
                            <div>    
                                <span>Telefone: </span>
                                <span>{data.phone}</span>
                            </div>
                            <div>    
                                <span>Data de nacimento: </span>
                                <span>{data.date_nasc}</span>
                            </div> 
                        </div>
                    )
                })}
            </div>
            <div>
                <button onClick={addContact}>ADD</button>
            </div>
        </>
    )
}