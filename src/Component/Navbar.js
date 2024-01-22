import React from 'react'
import "../Pages/All.css"
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const GaleriYon=useNavigate()
    const Kayıt=useNavigate()

    const Docs=()=>{
        window.location="/Docs"
    }

    const Tıkla=()=>{
        window.location="/Ricky"
    }

    const login=useNavigate()

   

    const Home=useNavigate()


    return (
        <>
         <nav className='arkaplanNav'>
            <h3 style={{cursor:"pointer"}} onClick={()=>Home("/")} className='logo'>MK.app</h3>
            <ul>
                <li onClick={Docs}>Disnay Dökümanları</li>
                <li onClick={Tıkla}>Rick ve Morty Bilgileri</li>
                <li onClick={()=>GaleriYon("/Galeri")}>Galeri</li>
                <li onClick={()=>Kayıt("/KayıtOl")}>  Kayıt Olmak</li>
                <li><button onClick={()=>login("/KayıtOl")} className='button1 btn btn-light'>Ücretsiz Başlayın</button></li>

            </ul>
         </nav>


        </>
    )
}

export default Navbar;
