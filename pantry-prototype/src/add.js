import { useState } from 'react';
import './add.css';

function Add({setData}){
const [itemName, setItemName] = useState('');

const handleAdd = async(e)=>{
    e.preventDefault();
    const update = { itemName };
    console.log(update);
    try{
    const res = await fetch('http://ec2-52-205-56-216.compute-1.amazonaws.com:8080/post', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(update)
    });
    if(!res.ok){
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    setData(data.itemId);
    console.log(data);
    }
    catch(error){
        console.error("Error:",error);
    }
}
    return(
    <div className="form-group">
    <form onSubmit={handleAdd}>
    <label htmlFor="newItemName">Item:</label>
    <input 
        type="text" 
        id="item" 
        name="item" 
        placeholder="Enter new item name" 
        onChange={(e) => setItemName(e.target.value)}/>

    <button className="add-btn" type="submit">Add</button>
    </form>
    </div>
    )
}

export default Add;