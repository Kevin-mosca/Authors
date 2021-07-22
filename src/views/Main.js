import axios from 'axios';
import React, {useEffect, useState } from 'react';
import { Link } from '@reach/router';

import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';

export default () => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/author')
            .then(res=>{
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
            
    },[]);

    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id != authorId));
    }
    return(
        <div>
            <div>
            <Link to={"/author/create"}>
                Create New
            </Link>
            </div>
            <div>
            {loaded && <AuthorList author={author} removeFromDom={removeFromDom}/>}
            
            </div>
        </div>
    )
}