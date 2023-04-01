import React from 'react';

const User = ({user,getUser}) => {
    const {id, name, email} = user
    return (
        <div>
            <div>id:{id} </div>
            <div>name:{name} </div>
            <div>email:{email} </div>
            <button onClick={() => getUser(user)}>get User</button>


        </div>
    );
};

export default User;