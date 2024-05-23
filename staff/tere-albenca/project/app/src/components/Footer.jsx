import React from 'react';

function Footer({ onLogout }) {
    return (
        <footer className='w-full bg-[white] p-3 px-1 fixed bottom-0 flex justify-between items-center left-0'>
            <div></div>
            <div className='mr-[5px]'>
                <button className='bg-[white] hover:bg-[gainsboro] text-{#333333} border-0 px-[10px] py-1 rounded-xl' onClick={onLogout}>
                    Logout
                </button>
            </div>
        </footer>
    );
}

export default Footer;
