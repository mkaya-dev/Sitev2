import React from 'react'
import "../Pages/All.css"
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate()
    return (
        <>
         <nav className='arkaplanNav'>
            <h3 style={{cursor:"pointer"}} onClick={() => navigate('/')} className='logo'>MK.app</h3>
            <ul>
                <li onClick={() => navigate('./Docs')}>Disnay Dökümanları</li>
                <li onClick={() => navigate('./Ricky')}>Rick ve Morty Bilgileri</li>
                <li onClick={() => navigate('./Galeri')}>Galeri</li>
                <li onClick={() => navigate('./KayitOl')}>  Kayıt Olmak</li>
                <li><button onClick={() => navigate('./KayitOl')} className='button1 btn btn-light'>Ücretsiz Başlayın</button></li>
            </ul>
         </nav>
        </>
    )
}

export default Navbar;
