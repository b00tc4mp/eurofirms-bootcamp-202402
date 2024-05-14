import { useState, useEffect } from 'react'
import { errors } from 'com'

import logic from '../logic'
import isUserLoggedIn from '../logic/isUserLoggedIn'



function Home() {

    console.log('Home render')

    return <div className="flex flex-col height-full   ">
        <main className=' bg-green-500 w-full h-50'>
            <h1 className=' mt-40 text-center text-white'>HOME</h1>


        </main>


    </div>
}

export default Home