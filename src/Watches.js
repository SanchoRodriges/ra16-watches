import React, { useEffect, useState, useId } from "react";
import { v4 as uuid } from 'uuid';
import Watch from "./Watch";
import AddWatch from "./AddWatch";

function Watches() {

  const [watches, setWatch] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setWatch(prev => {
        watches.forEach(watch => {
          watch.timestamp = Date.now() + watch.UTC;
        })
        return [...prev];
      });

    }, 1000);
    return () => clearInterval(timer);
  });


  return (
    <div className="Watch">
      <AddWatch 
        addNewWatch={(newWatch) => {
          setWatch( prev => [...prev, newWatch ] )
        }}
      />
      <Watch
        watches={watches}
        removeWatch={(watchId) => {
          setWatch( prev => prev.filter(item => item.id !== watchId) )
        }}
      />
    </div>
  );
}

export default Watches;