import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';

export default props => {
    const { id } = props;
    const [name, setName] = useState('');
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
        .then(res => {
            setName(res.data.name);
        })

    }, [])
    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/author/' + id, {
            name
            
        })
        .then(res=>{
            console.log(res);
            navigate("/author")
        })
    }
    return(
        <div>
            <h1>Update an Author: </h1>
            <form onSubmit={updateAuthor}>
                <p>
                    <label>Name</label><br/>
                    <input type="text" name="name" value={name} onChange={(e) => { setName(e.target.value)}} />
                </p>
                <input type="submit" />
            </form>
            <div>
                <Link to={"/author"}>
                    Cancle
                </Link>
            </div>
            
        </div>
    )
}