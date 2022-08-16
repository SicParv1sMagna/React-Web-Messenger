import React from 'react';

const TextContainer = ({ users }) => {
    return (
        <div className="textContainer">
            {users ? (
                <div>
                    <h1>Users online:</h1>
                    <div className="userList">
                        {users.map(user => (
                            <div key={user.id} className="user">
                                <p>{user.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    <h1>No users online</h1>
                </div>
            )}
        </div>
    )
}

export default TextContainer;