const FortuneCard = ({data}) => {
    return(
        <div className="titulo__app">
            <h1>GALLETAS DE LA FORTUNA</h1>
            <p className="sub__titulo">Descubre cuál es tu fortuna, aquí y ahora</p>
            <div className="message__content">
                <p className="message">{data.phrase}</p>
                <p className="autor">{data.author}</p>
            </div>
        </div>
    )
}
export default FortuneCard