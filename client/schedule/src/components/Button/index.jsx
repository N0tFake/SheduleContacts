import { PlusCircle, PencilSimple, Trash } from 'phosphor-react'
import './styles.css'

const Icon = ({ name }) => {
    switch(name){
        case 'Novo':
            return <PlusCircle size={28} className="Icons" id='icon-new'/>
        case 'Editar':
            return <PencilSimple size={25} className="Icons" id="icon-edit" />
        case 'Excluir':
            return <Trash size={25} className="Icons" id='icon-delete' />
        default:
            return null
    }
}

export const Button = ({ name, onClick }) => {

    function setIdName() {
        switch(name){
            case 'Novo':
                return  'novo-id'
            case 'Editar':
                return 'editar-id'
            case 'Excluir':
                return 'excluir-id'
            default:
                return 'default'
        }
    }

    const idName = setIdName()

    return (
        <button className={name} onClick={() => onClick}>
            <div className='inner'>
                <Icon name={name}/>
                <span className='SpanBtn' id={idName}>{name}</span>
            </div>
        </button>
    )
}