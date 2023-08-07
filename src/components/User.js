import React from 'react'
import MakeTrans from './MakeTrans'
import UserDetails from './UserDetails'

const User = (props) => {
    return (
        <>
            <div>
                <div className="d-flex">
                    <div>
                        <UserDetails showAlert={props.showAlert} />
                    </div>
                    <MakeTrans showAlert={props.showAlert} />
                </div>
            </div>
        </>
    )
}

export default User
