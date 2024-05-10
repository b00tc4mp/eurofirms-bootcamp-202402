import { useState, useEffect } from 'react'
import { errors } from 'com'

import logic from '../logic'
import isUserLoggedIn from '../logic/isUserLoggedIn'



function Home({ onRegisterIn, onLoginIn, onRecursesIn, onDonateIn, onGalleryIn, onContactIn }) {
    const [refreshStamp, setRefreshStamp] = useState(null)
    const handleLogout = () => {
        logic.logoutUser()

        onUserLoggedOut()
    }

   
    console.log('Home render')

    return <div className="flex flex-col height-full   ">

        


       

    </div>
}

export default Home