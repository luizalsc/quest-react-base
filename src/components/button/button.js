const alertLabelName = (label)=>{
    
    alert(`A label desse botão é ${label}`)
}

function Button({label}) {
    return (
        <button className="btn" onClick={() => alertLabelName(label)}>{label}</button>
    )
}

Button.defaultProps ={
    label: 'Não clique!'
}

export default Button