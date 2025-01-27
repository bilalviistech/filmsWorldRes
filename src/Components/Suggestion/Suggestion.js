import React, { useEffect, useState } from 'react'
import SideNavbar from '../SideNav/SideNavbar';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { baseURL } from '../../Utils/Utils';

const Suggestion = () => {
    const token = useSelector(state => state.user.token)
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${baseURL}api/admin/get-suggestion`,
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data.data);
                setSuggestions(response.data.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])
    console.log('suggestions:', suggestions.length)

    return (
        <div className="container-fluid">
            <div className="row">
                <SideNavbar />
                <div className="col-md-9 col-sm-12">

                    <div className="row roww">
                        <div className='col-lg-12 formdiv'>

                            <h3 className="text-center text-danger shadow-lg" style={{ fontFamily: "fantasy", textDecoration: "underline" }}>SUGGESTIONS LIST</h3>
                            <div id='suggestionTableDiv' style={{ borderRadius:"20px" }}>
                                {
                                    suggestions.length > 0 ? (
                                        <table className="table table-striped table-dark" style={{ textAlign: "center" }} id='suggestionTable'>
                                            <thead>
                                                <tr >
                                                    <th scope="col">#</th>
                                                    <th scope="col">User Name</th>
                                                    <th scope="col">User Email</th>
                                                    <th scope="col">Suggestions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {suggestions.map((value, index) => {
                                                    return (
                                                        <tr>
                                                            <th scope="row">{index+1}</th>
                                                            <td>{value.name}</td>
                                                            <td>{value.email}</td>
                                                            <td>{value.AnySuggestion}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <p style={{textAlign:"center",fontWeight:600,fontSize:"22px",paddingTop:"40px",paddingBottom:"40px"}}>Loading suggestions list data ... </p>
                                    )
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Suggestion
