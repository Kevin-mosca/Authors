import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

export default () => {
    const [name, setName] = useState("");

    const [errors, setErrors] = useState([]);
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/author/create/new', {
            name
        })
            .then(res=>{
                console.log(res);
                navigate("/author")
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })     
    }
    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Name </label>
                    <input type = "text" onChange={(e)=>setName(e.target.value)} value={name}/><br/>
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}