import { Button } from '../Button'
import Modal from 'react-modal'
import MaskedInput from "react-input-mask"
import { Controller, useForm } from 'react-hook-form'
import './styles.css'
import { useState } from 'react'

import {FormContact} from '../Form'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

export const Header = () => {
    const [modalIsOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    } console.log('minha')

    return (
        <div className="subtitle">
            <h2>Contatos cadastrados</h2>
            <Button name={"Novo"} onClick={openModal}/>
            <FormContact modalIsOpen={modalIsOpen} closeModal={closeModal} />
        </div>
    )
}