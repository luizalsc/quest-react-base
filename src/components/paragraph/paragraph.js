const Paragraph = ({color, changeTextColor})=>{

    return (
        <p 
        className="paragraph" 
        style={{color: color}} 
        onClick={() => changeTextColor()}>
            De fato, inserir qualquer texto de fantasia ou um texto famoso, seja um poema, um discurso, uma passagem literária, o texto de uma música, etc., nosso gerador de texto fornecerá a extração aleatória de termos e etapas para compor o seu exclusivo Lorem Ipsum.
        </p>
        
    )
}

Paragraph.defaultProps = {
    color: 'black'
}

export default Paragraph