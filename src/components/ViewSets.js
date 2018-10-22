import React from 'react';
import './ViewSets.css';

function ViewSets (props){

    return(
        <div>
        <h1>MY SETS</h1>
        <div className='sets'>
        <h3 className='set_container'>{props.sets.map((value, index, array)=>{
            console.log(value)
            return(<div style={{border: '3px solid white'}}>
                <h2>{value.set}</h2>
                <h3>{value.songs}</h3>
             <button onClick={()=>props.delete(value.id)}>Delete Set</button>
             <button>Edit Set</button>
            </div>)
        })}</h3>
       
       </div>
        </div>
    )

}

export default ViewSets;