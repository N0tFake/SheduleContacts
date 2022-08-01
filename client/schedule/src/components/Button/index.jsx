import './styles.css'


export const Button = ({ name, onClick, children }) => {
    return (
        <button className={name} onClick={onClick}>
            {children}
        </button>
    )
}