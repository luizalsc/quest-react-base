import Button from "../button/button"

const buttonLabel = ['Clique aqui', 'Saiba mais', 'Iniciar']


const Buttons = () => {
    return (
        <div>
            {buttonLabel.map((buttonLabel, index)=>(
                <Button key={index} label={buttonLabel}></Button>
            ))}
        </div>
    )
}

export default Buttons
