const ChangeTextColor = (color)=>{
    console.log(color)
}

const Button = ()=>{
    return (
        <button className="btn" onClick={ChangeTextColor}>Transformar texto</button>
    )
}

export default Button