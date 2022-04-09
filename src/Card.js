import React from 'react';

const Card = ({field, fieldSelected}) => {
    console.log(fieldSelected, field.timeframes);

    const timeFramesArray = Object.entries(field.timeframes);
    const selected = timeFramesArray.filter(item => item[0] === fieldSelected)
        selected.map((selItem => {
            console.log('actual', selItem[1].current)
        }))
    const fieldTitle = field.title.toLowerCase().replace(/\s/g, '-')
    return (
        <article className='card'>
            <div className={`${fieldTitle} icon-img`}>
                <img src={`./images/icon-${fieldTitle}.svg`} alt={field.title} />
            </div>
            <div className="details">
                <div className="details__name">
                <h3>{field.title}</h3>
            <img className='dots' src='./images/icon-ellipsis.svg' alt='dots' />
                </div>
                    { selected.map((selItem => {
                          console.log('actual', selItem[1].current)
                          return(
                            <div className='hours'>
                            <h1 className='current'>{selItem[1].current}hrs</h1>
                                  <p className='previous'>Last Week - {selItem[1].previous}hrs</p>
                              </div>
                          )
                }))}
            </div>
                    
        </article>
    );
};

export default Card;