import { Button } from '../Button'
import './styles.css'

export const Subtitle = () => {

    function handleAddContacts() {
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
        <div className="subtitle">
            <h2>Contatos cadastrados</h2>
            <Button name={"Novo"} onClick={handleAddContacts}/>
        </div>
    )
}