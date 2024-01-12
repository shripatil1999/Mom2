import React from 'react'
import GlobalLayout from '../utils/hoc/globalLayout'

const Profile = () => {
    return (
        <GlobalLayout>
            <div className="flex gap-3">
                <div className="w-1/3">
                    <div className="card shadow flex flex-col items-center p-4">
                        <div className="img flex justify-center mt-2">
                            <img className='w-1/4' src="/images/icons/user.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-2/3">
                    <p>hii</p>
                </div>
            </div>
        </GlobalLayout>
    )
}

export default Profile
