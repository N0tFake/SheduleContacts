import { Subtitle } from "../Subtitle"
import { Contacts } from '../Contacts'

import './styles.css'

export const ListContact = () => {

    return (
        <div className="Container-Contacts">
            <Subtitle />
            <div className="Container-List-Contacts">
                <Contacts/>
            </div>
        </div>
    )
}