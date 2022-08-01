import { useContext, useEffect, useState } from 'react'
import { Button } from '../Button'
import { ImageProfile } from '../ImageProfile'
import { ContactContext } from '../../context/contacts_context'

import './styles.css'
import { InnerBtn } from '../Button/inner'
import { FormContact } from '../Form'

export const Contacts = () => {

    const [ contacts, setContacts ] = useState()
    const [ state, dispatch ] = useContext(ContactContext)
    const [contactUpdate, setContactUpdate] = useState({
        name: 'null',
        email: 'null',
        phone: 'null',
        date_nasc: 'null'
    })

    const [modalIsOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        if( state.reload ){
            fetch('/contacts')
                .then(response => response.json())
                .then(data => {
                    setContacts(data)
                })
                dispatch({ type: 'reload'})
        }

    })

    async function handleEditContact(contact_id) {
        await fetch(`/contact/${contact_id}`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
            setContactUpdate(data)
        })
        if(contactUpdate){
            openModal()
        }
        dispatch({ type: 'reload'})
    }

    function handleDeleteContacts(contact_id) {
        fetch(`/contact/${contact_id}/delete`, {
            method: 'DELETE'
        })

        dispatch({ type: 'reload' })
    }


    return (
        <>
            <div>
                {contacts == null 
                    ? <h1>Loading . . .</h1> 
                        : contacts.length === 0 
                        ? <h1>Empty</h1> : contacts.map(data => {
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
                                    <Button name={"Editar"} onClick={() => handleEditContact(data.id)}>
                                        <InnerBtn name={"Editar"} />
                                    </Button>
                                    <Button name={"Excluir"} onClick={() => handleDeleteContacts(data.id)}>
                                        <InnerBtn name={"Excluir"} />
                                    </Button>
                                </div>
                            </div>
                        )
                })}
                
                <FormContact type={'update'}/*  contact={data} */ modalIsOpen={modalIsOpen} closeModal={closeModal} />
            </div>
        </>
    )
}