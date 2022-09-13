import '../../stylesheets/Main/Form.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Form = () => {
    const[data,setData]=useState({
        user_name:'',
        user_email:'',
        user_phone:'',
        user_message:''
    });
const [mostrar, setMostrar] = useState(false);

    const handleInputChange = (event) => {
        console.log(event.target.value);

        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const imprimirValores = () =>{
        console.log(data.user_name,data.user_email,data.user_email,data.user_message);
        setMostrar(true);
    }

    return(
        
        <div className="container-form">
            
            <form>
            <h2>Contact Us!</h2>
                <ul>
                    <li>
                        <label htmlFor="user_name">Name</label>
                        <input 
                        className='data-enter' 
                        type="text" id="name" 
                        name="user_name" 
                        placeholder='John Cena'
                        onChange={handleInputChange}/>
                    </li>
                    <li>
                        <label htmlFor="user_email">Email</label>
                        <input 
                        className='data-enter' 
                        type="email" id="mail" 
                        name="user_email" 
                        placeholder='lionelmessi@hotmail.com'
                        onChange={handleInputChange}/>
                    </li>
                    <li>
                        <label htmlFor="ser_phone">Phone number</label>
                        <input 
                        className='data-enter' 
                        type="email" 
                        id="mail" 
                        name="user_phone" 
                        placeholder='+54 9 291 4578123'
                        onChange={handleInputChange}/>
                    </li>
                    <li>
                        <label htmlFor="user_message">Message</label>
                        <textarea 
                        className='msg-enter' 
                        id="msg" 
                        name="user_message" 
                        placeholder='A simple message'
                        onChange={handleInputChange}/>
                        
                    </li>
                </ul>
                <input onClick={imprimirValores} className='btn-form' type='button' value='Capturar Informacion'/>
            </form>
            <div className={`info-form ${mostrar == true ? 'visible' : 'hidden'}`}>
                <p>Thank you for your message <span>{data.user_name}</span>, we will contact you at number <span>{data.user_phone}</span> or at your email <span>{data.user_email}</span></p>
                <p className='msg-p'>(This form has no validations because is a test)</p>
                <Link to='/'><button className='cool-btn' onClick={()=>setMostrar(false)}>Cool</button></Link>
            </div>
        </div>
    )
}

export default Form;