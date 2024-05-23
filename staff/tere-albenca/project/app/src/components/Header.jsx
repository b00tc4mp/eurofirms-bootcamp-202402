import SearchWork from './SearchWork'

function Header({ onHomeClick, onCreateClick, onProfileClick }) {
    return (
        <>
            <header className='max-h-[50px] border-b border-black fixed top-0 left-0 w-full bg-[#00929E] box-border'>
                <div className='flex justify-between'>
                    <div>
                        <a onClick={onHomeClick}>
                            <img src='../src/assets/images/logo-cabecera-alalluna.png' alt='logo alalluna' className='max-h-[45px]' />
                        </a>
                    </div>
                    <div className='flex flex-row'>
                        <button onClick={onCreateClick} className='w-10 h-10 mr-2.5 rounded-sm shadow cursor-pointer hover:bg-[lightgray]'>➕</button>
                        <a onClick={onProfileClick} className='w-10 h-10 mr-2.5 rounded-sm shadow cursor-pointer hover:bg-[lightgray]'>
                            <img src='../src/assets/images/login.png' alt='perfil' className='max-h-[45px]' />
                        </a>
                    </div>
                </div>
            </header>
            <nav className='bg-[#e8e7e7] mt-[50px] max-w-[100%] flex justify-center items-center'>
                <div><SearchWork placeholder='Search title...' /></div>
            </nav>
        </>
    )
}

export default Header
