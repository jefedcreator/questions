import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  const[questdata, setQuestData] = useState(data)
  const newData = questdata.map(datum => <SingleQuestion key={datum.id} {...datum}/>)

  return (
    <div className='container'>
      <h3>questions and answers about login</h3>
      <section className='info'>
        {newData}
      </section>
    </div>
  );
}

export default App;
