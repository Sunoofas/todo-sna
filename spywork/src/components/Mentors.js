import Mentorsphoto from './assets/ajit-doval.avif';
import './Styles/Mentors.css';

export default function Mentors(){
  return(
      <div className="mentorship" style={{backgroundImage:`url(${Mentorsphoto})`}}>
          <h1>Our Mentors</h1>
          <p>Under the guidance of India's National Security Advisor Shri. Ajit Doval</p>
      </div>
  )   
}


