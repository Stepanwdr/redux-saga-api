import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsersRequest} from "../store/actions/users";
import {Link,useRouteMatch} from "react-router-dom";
import _ from "lodash";
const Users = () => {
    const dispatch=useDispatch()
    const {params}=useRouteMatch()
    console.log(params.page)
    const {usersList,usersRequestStatus,usersListData}=useSelector(state=>state.users)
    useEffect(()=>{
        dispatch(getUsersRequest(params.page))
    },[params.page])

    if(usersRequestStatus==="request"){
        return (
            <div>Loadingg</div>
        )
    }

    return (
        <div>
<ul>
    {usersList.map(user=>(
        <li>{user.first_name} {user.last_name} <img src={`${user.avatar}`} alt=""/></li>
    ))}
</ul>
            <ul>
                {_.range(1,usersListData.total_pages + 1 ).map(page=>(
                    <li><Link to={`/page/${page}`}>{page}</Link></li>
                ))}
            </ul>
        </div>
    );
};

export default Users;