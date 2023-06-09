import React, {useState}  from "react";
import { v4 as uuid } from 'uuid';

function AddWatch({addNewWatch}) {

  const [cityName, setCityName] = useState('');
  const [UTCValue, setUTCValue] = useState('');

  const changeCityName = e => {
    setCityName(e.target.value)
  }
  
  const changeUTCValue = e => {
    setUTCValue(e.target.value)
  }

  const addWatch = e => {
    e.preventDefault();

    setCityName('');
    setUTCValue('');
    
    addNewWatch({
      id: uuid(),
      name: cityName,
      timestamp: Date.now() + UTCValue * 60 * 60 * 1000,
      UTC: UTCValue * 60 * 60 * 1000
    });
    
  }

  return (
    <div className="add-watch">      
      <form>
        <input onChange={changeCityName} value={cityName} placeholder="Saint Petersburg" />
        <input onChange={changeUTCValue} value={UTCValue} placeholder="+3" />
        <button onClick={addWatch}>Добавить</button>
      </form>
    </div>
  );
}

export default AddWatch;