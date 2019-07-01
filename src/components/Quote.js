import React from 'react';

const Quote = (prop) => {
    return(
        <div>
            {
                prop.error
                    ? (
                    <p> Unable to fetch quote, please try again...</p>
                    ) : (
                    <div>
                    <p>{prop.quote}</p>
                    <p className="quote_author">- {prop.author}</p>
                    </div> 
                    )
                }
                  <button onClick={prop.getQuote} className="container__box-btn">More</button>
                </div>
    );
};

export default Quote;