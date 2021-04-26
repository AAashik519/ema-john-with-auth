import React from 'react';
 
const Inventory = () => {
    const handelAddProduct= () =>{
        const product ={}
         fetch('http://localhost:8000/addProducts',{
             method :'POST',
             headers: {
                 'content-type':'application/json'
             },
             body :JSON.stringify(product)
         })
    }

    return (
        <div>
            <form action="">
            <p><span>Name</span><input type="text"/></p>
            <p><span>Price</span><input type="text"/></p>
            <p><span>Quantity</span><input type="text"/></p>
            <p><span>product image</span><input type="file"/></p>
            
            <button onClick= {handelAddProduct}>Add Product</button>
            </form>
        </div>
    );
};

export default Inventory;