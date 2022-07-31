import Modal from 'react-modal'
import MaskedInput from "react-input-mask"
import { Controller, useForm } from 'react-hook-form'

import { Content } from './components/button/content_submit'
import { ContactContext } from '../../context/contacts_context'

import './styles.css'
import { useContext, useState } from 'react'
import { ButtonSubmit } from './components/button/button._submit'

const customStyles = {
    content: {
        width: '700px',
        height: '300px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

Modal.setAppElement('#root')

export const FormContact = ({modalIsOpen, closeModal}) => {

    const [ dispatch ] = useContext(ContactContext)
    const { register, control, handleSubmit, formState: { errors }, reset }  = useForm();
    const [imgBlob, setImgBlob] = useState()

    function handleCloseModal(){
        reset()
        closeModal()
    }

    const onSubmit = (data) => {

        const reader = new FileReader()
        reader.onload = (e) => {
            setImgBlob(e.target.result)
        }
        reader.readAsDataURL(data.photo[0])

        let temp = ''

        if(data.photo[0].name.includes('.png')){
            temp = imgBlob.replace('data:image/png;base64,', '')
        }else if (data.photo[0].name.includes('.jpg')){
            temp = imgBlob.replace('data:image/jpeg;base64,', '')
        }
        
        setImgBlob(temp)

        const name = data.name
        const email = data.email
        const phone = data.phone
        const date_nasc = data.date_nasc
        const photo_name = data.photo[0].name
        const photo_content = temp

        const contact = { name, email, phone, date_nasc, photo_name, photo_content }   

        fetch('add/contact', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contact)
        }).then(res => {
            console.log(res.json())
        }, [])

        reset()
        closeModal()
        dispatch({ type: 'reload' })

    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
        >
            <h2 >Novo contato</h2>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='container-first'>
                    <div className='container-name'>
                        <div>
                            <label>Nome: </label>
                            <input {...register('name', { required: true })} />
                        </div>
                        {errors.name && <span className='span-error'>Campo obrigatorio</span>}
                    </div>

                    <div className='container-email'>
                        <div>
                            <label>E-mail: </label>
                            <input {...register('email', {
                                require: true, 
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "E-mail invalido"
                                }
                            })} />
                        </div>
                        <span className='span-error'>{errors.email?.message}</span>
                    </div>
                </div>

                <div className='container-second'>
                    <div className='container-phone'>
                        <div>
                            <label>Telefone: </label>
                            <Controller
                                name="phone"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: true,
                                }}
                                render={({ field }) => (
                                    <MaskedInput
                                        mask="(99) 99999-9999"
                                        maskChar=""
                                        value={field.value}
                                        onChange={field.onChange}
                                    >
                                    {(inputProps) => (
                                        <input
                                        {...inputProps}
                                        type="text"
                                        />
                                    )}
                                    </MaskedInput>
                                )}
                            />
                        </div>
                        {errors.name && <span className='span-error'>Campo obrigatorio</span>}
                    </div>

                    <div className='container-date'>
                        <div>
                            <label>Data de nacimento: </label>
                            <input type={'date'} {...register('date_nasc', { required: true })}/>               
                        </div>
                        {errors.date_nasc && <span className='span-error'>Campo obrigatorio</span>}
                    </div>
                </div>

                <div className='container-photo'>
                    <div>
                        <label>Foto: </label>
                        <input {...register('photo', { required: true })} type='file'/>
                    </div>
                    {errors.photo && <span className='span-error'>Campo obrigatorio</span>}
                </div>

                <div className='container-btn'>
                    <button onClick={handleCloseModal}>Cancelar</button>
                    <ButtonSubmit>
                        <Content />
                    </ButtonSubmit>
                </div>
            </form>
        </Modal>
    )
}