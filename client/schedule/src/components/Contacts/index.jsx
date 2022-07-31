import { useContext, useEffect, useState } from 'react'
import { Button } from '../Button'
import { ImageProfile } from '../ImageProfile'
import { ContactContext } from '../../context/contacts_context'

import './styles.css'

export const Contacts = () => {

    const [ contacts, setContacts ] = useState()
    const [ state, dispatch ] = useContext(ContactContext)

    useEffect(() => {
        if( state.reload ){
            fetch('/contacts')
                .then(response => response.json())
                .then(data => {
                    setContacts(data)
                })
            dispatch({ type: 'reload' })
        }

    })

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
                                <ImageProfile imageName={data.photo_name} contacts={contacts} />
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

                            <div className='container-btn-contacts'>
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