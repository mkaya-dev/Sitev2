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
                <li onClick={() => navigate('/Docs', { replace: true })}>Disnay Dökümanları</li>
                <li onClick={() => navigate('/Ricky', { replace: true })}>Rick ve Morty Bilgileri</li>
                <li onClick={() => navigate('/Galeri', { replace: true })}>Galeri</li>
                <li onClick={() => navigate('/KayitOl', { replace: true })}>  Kayıt Olmak</li>
                <li><button onClick={() => navigate('/KayitOl', { replace: true })} className='button1 btn btn-light'>Ücretsiz Başlayın</button></li>
            </ul>
         </nav>
        </>
    )
}

export default Navbar;
