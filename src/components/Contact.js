const Contact = () => {
    return(
    <div className="contactBox Contenedor">
        <h1>Contáctate<br/> con nosotros</h1>
        <form action="" method="" className="formDeContacto">
            <input type="text" id="nombre" className="btn"placeholder="Tu nombre"/>
            <input type="text" id="apellido" className="btn"placeholder="Tu apellido"/>
            <input type="email"  id="email" className="btn" placeholder="Tu email"/>
            <textarea id="consulta" cols="30" rows="5" className="btn" placeholder="Tu consulta"></textarea>
            <input type="submit" id="send" className="btnSend" placeholder="Enviar" />
        </form>
    </div>
    );
}
export default Contact;