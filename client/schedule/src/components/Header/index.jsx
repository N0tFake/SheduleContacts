import { Button } from '../Button'
import './styles.css'
import { useState } from 'react'

import {FormContact} from '../Form'

export const Header = () => {
    const [modalIsOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="subtitle">
            <h2>Contatos cadastrados</h2>
            <Button name={"Novo"} onClick={openModal}/>
            <FormContact modalIsOpen={modalIsOpen} closeModal={closeModal} />
        </div>
    )
}