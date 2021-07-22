import axios from 'axios';
import React, {useEffect, useState } from 'react';
import { Link } from '@reach/router';


import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';

export default () => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/author/create')
            .then(res=>{
                setAuthor(res.data);
                setLoaded(true);
            });
            
    },[]);

    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id != authorId));
    }
    return(
        <div>
            <AuthorForm />
            <div>
                <Link to={"/author"}>
                    Cancle
                </Link>
            </div>
        </div>
    )
}