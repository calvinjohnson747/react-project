import './pantry.css';
import { useState,useEffect } from 'react';


function Pantry({data, setData}){

    const [items, setItems] = useState([]);
    useEffect(() => {
        async function fetchData(){
            try{
                const res = await fetch('http://ec2-52-205-56-216.compute-1.amazonaws.com:8080/getitems');
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                console.log(data); 
                setItems(data);
            }
            catch (e) {
                console.error('Error:',e);
            }
        }
        fetchData();
    },[data]);

    const handleDelete = async(id) => {
        try{
        const res = await fetch('http://ec2-52-205-56-216.compute-1.amazonaws.com:8080/delete/'+id,{
            method: 'DELETE'
        })
        if(!res.ok){
            throw new Error(`HTTP error! status: ${res.status}`);
            }
            console.log("Delete Successful");
            setData(id);
        }
        catch(error){
            console.error('Error:',error);
        }
    }

    return(
        <div className="container"> 
        <h2>Items Table</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Items</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody> 
                    {items.map(item => <tr>
                        <td>{item.itemName}</td> 
                        <td><button className="delete-btn" onClick={()=>handleDelete(item.itemId)}>Delete</button></td>
                        </tr>)}
                    
            </tbody>
        </table>
        </div>
    );
}

export default Pantry;