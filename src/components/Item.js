function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <div>
      <li>
        <input type='checkbox' value={item.packed} onChange={()=> onToggleItems(item.id)} />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>👈🏻</button>
      </li>
    </div>
  );
}

export default Item;
