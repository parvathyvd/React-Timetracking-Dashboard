import data from './data.json';
import Card from './Card';
import Footer from './Footer';
import { useState } from 'react';



function App() {
  console.log(data);
  const [fieldSelected, setFieldSelected] = useState('weekly');
  const [active, setActive] = useState(true);

  const onClickHandler = (e)=>{
    console.log('clcked', e.target.value);
    setFieldSelected(e.target.value);
    setActive(true);
  }

  return (
    <>
    <section className="fitness__wrapper">
      <div className="profile">
        <div className="profile__name">
          <img src="./images/image-jeremy.png" alt="jeremy" />
          <div className="profile__name__details">
          <p className='report__for'>Report for</p>
            <h1>Jeremy<span>Robson</span></h1>
          </div>
        </div>
        <div className="report">
          <button className={`btn ${active && fieldSelected === 'daily' ? 'active': ''}`} onClick={onClickHandler} value='daily'>Daily</button>
          <button className={`btn ${active && fieldSelected === 'weekly' ? 'active': ''}`} onClick={onClickHandler} value='weekly'>Weekly</button>
          <button className={`btn ${active && fieldSelected === 'monthly' ? 'active': ''}`} onClick={onClickHandler} value='monthly'>Monthly</button>
        </div>
      </div>
      {
        data.map(field => {
          return <Card field={field} fieldSelected={fieldSelected}/>
        })
      }
    </section>
    <Footer/>
    </>
  );
}

export default App;
