function Stats({ items }) {
  if(!items.length)
    return(
  <p className="stats">
    <em>
      Start adding some items to your packing list
    </em>
  </p>)
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <div>
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You got everything! Ready to Go!"
            : `You have ${numItems} items on your list, and you already packed ${numPacked} which is ${percentage}% of total`}
        </em>
      </footer>
    </div>
  );
}

export default Stats;
