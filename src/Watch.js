function Watch({watches, removeWatch}) {

  const remove = (e) => {
    removeWatch(e.target.dataset.id);
  }

  const result = watches.map(watch => {
    
    const date = new Date(watch.timestamp);
    
    return <div className="watch-wrap" key={watch.id}>
      <div className="watch-remove"><span data-id={watch.id} onClick={remove}>x</span></div>
      <div className="watch-name">{watch.name}</div>
      <div className="watch-time">{date.toLocaleTimeString('ru-Ru')}</div>      
    </div>
  })

  return (
    <div className="watches">
      {result}
    </div>
  );
}

export default Watch;