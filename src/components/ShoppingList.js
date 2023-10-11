import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items,addNewItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const[searchText, setSearchText] = useState('')
  
  function handleSearchText(e){
    setSearchText(e.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
    .filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  })
    .filter((item)=>{
      return item.name.toLowerCase().includes(searchText.toLowerCase())
    })

  return (
    <div className="ShoppingList">
      <ItemForm 
        onItemFormSubmit={addNewItem} />
      <Filter 
        search={searchText}
        onSearchChange={handleSearchText}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id}  category={item.category} name={item.name} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;