import { Contacts } from '../Contacts'

import './styles.css'
import { Header } from "../Header"

export const ListContact = () => {

    return (
        <div className="Container-Contacts">
            <Header />
            <div className="Container-List-Contacts">
                <Contacts/>
            </div>
        </div>
    )
}