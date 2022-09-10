
const Form = () => {
    
    
    return(
        <div className="container-form">
            <form action="/my-handling-form-page" method="post">
                <ul>
                    <li>
                        <label for="name">Nombre:</label>
                        <input type="text" id="name" name="user_name"/>
                    </li>
                    <li>
                        <label for="mail">Correo electrónico:</label>
                        <input type="email" id="mail" name="user_mail"/>
                    </li>
                    <li>
                        <label for="msg">Mensaje:</label>
                        <textarea id="msg" name="user_message"></textarea>
                    </li>
                </ul>
                <input type='button' value='Capturar Informacion'/>
            </form>
        </div>
    )
}

export default Form;