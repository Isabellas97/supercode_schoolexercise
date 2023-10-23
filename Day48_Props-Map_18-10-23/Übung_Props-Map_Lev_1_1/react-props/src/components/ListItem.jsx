import "./ListItem.css";
import ListProps from "./ListProps";

const ListItem = () => {
  const listArray = [
    { list: "Buy Grocerys" },
    { list: "Send eMails" },
    { list: "Finish Assigment" },
    { list: "Write Blog" },
    { list: "Bake Cake" },
  ];

  return (
    <div>
      <h1>ListItem</h1>
      <ul>
        <ListProps superList={listArray[0]} />
        <ListProps superList={listArray[1]} />
        <ListProps superList={listArray[2]} />
        <ListProps superList={listArray[3]} />
      </ul>
    </div>
  );
};

export default ListItem;
