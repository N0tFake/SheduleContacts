import { Button } from '../Button'
import './styles.css'
import { useState } from 'react'

import {FormContact} from '../Form'
import { InnerBtn } from '../Button/inner'

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
            <Button name={"Novo"} onClick={openModal}>
                <InnerBtn name={"Novo"} />
            </Button>
            <FormContact type={'create'} modalIsOpen={modalIsOpen} closeModal={closeModal} />
        </div>
    )
}