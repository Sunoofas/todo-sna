import './Styles/Contact.css';
import ContactImg from './assets/train.jpg';

export default function Contact(){
    return(
        <div className='contactus' style={{backgroundImage:`url(${ContactImg})`}}>
            <h1>Contact Us</h1>
            <p>Lodhi Road, Shahjahanpur, NewDelhi 111111</p>
        </div>
    )
}

