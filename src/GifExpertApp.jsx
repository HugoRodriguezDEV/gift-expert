import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategories = (newCategory) => {
    if (categories.includes(newCategory)) return;

    // console.log(newCategory);
    // categories.push(newCategory);
    setCategories([newCategory, ...categories]);

    // return categories;
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategories} />

      {
        // categories.map( (category, i) => {
        //   return (
        //     <div key={category}>
        //         <h3>{category}</h3>
        //         <li>{category}</li>
        //     </div>
        //   )
        // })
        categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))
      }
    </>
  );
};

export default GifExpertApp;
