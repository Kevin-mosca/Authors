import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios'

export default props => {
    const { removeFromDom } = props;
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
    }
    return(
        <div>
            {props.author.map((author, index)=>{
                return <table>
                    <tr>
                        <th> Name </th>
                        <th> Actions </th>
                    </tr>
                    <tr>
                        <td><p key={index}><Link to ={"/author/" + author._id}> {author.name}</Link></p></td>
                        <td>
                            <button onClick={(e)=>{deleteAuthor(author._id)}}> Delete </button>
                            <button><Link to={"/author/" + author._id + "/edit"}>Edit</Link></button>
                        </td>
                    </tr>
                </table>
            })}
        </div>
    )
}