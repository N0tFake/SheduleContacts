import { useEffect, useState } from 'react'
import { Button } from '../Button'

import './styles.css'

export const Contacts = () => {

    const [ contacts, setContacts ] = useState()

    useEffect(() => {
        fetch('/contacts')
            .then(response => response.json())
            .then(data => {
                setContacts(data)
            })

    },[contacts])

    function handleEditContact() {
        console.log('teste')
    }

    function handleDeleteContacts() {
        console.log('teste')
    }

    return (
        <>
            <div>
                {contacts == null ? <h1>Empyt</h1> : contacts.map(data => {
                    return (
                        <div key={data.id} className="card">
                            
                            <div className='container-profile'>
                                <div className='img-profile'></div>

                                <div className='container-info'>
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

                            </div>

                            <div className='container-btn'>
                                <Button name={"Editar"} onClick={handleEditContact}/>
                                <Button name={"Excluir"} onClick={handleDeleteContacts}/>
                            </div>

                        </div>
                    )
                })}
            </div>
        </>
    )
}