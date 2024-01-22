import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar';
import axios from 'axios';
import AltNavbar from '../Component/AltNavbar';

const Galeri = () => {

    const [resim, setResim] = useState([])
    const [riky, setRiky] = useState([])

    useEffect(() => {
        const api_link = "https://api.disneyapi.dev/character"
        axios.get(api_link)
            .then(response => {
                setResim(response.data)
            })
    }, [])

    console.log(resim, "resim");


   useEffect(()=>{
    const api_Link="https://rickandmortyapi.com/api/character"
    axios.get(api_Link)
    .then(response=>{
        setRiky(response.data)
    })
   },[])

   console.log(riky,"asas");

    


    return (
        <><br />
            <Navbar /><br /><br /><br /><br /><br /><br />
            <div className='container'>
                {
                    resim.data?.map((re, i) =>
                        <img key={i} src={re.imageUrl} />
                    )
                }


                {
                    riky.results?.map((rez,i)=>
                    <img src={rez.image} />
                    )

                }
            </div>

            <AltNavbar/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            
            <div className='altmetin'>
                <div class="containerr text-center">
                    <div class="row">
                        <div class="col">
                            <p style={{ color: "white" ,fontSize:13 }}> © 2024 MK.app. Bütün hakları saklıdır. </p>

                        </div>
                        <div class="col">
                            <p style={{color:"white",fontSize:12}}>Gizlilik Politikası</p>
                        </div>
                        <div class="col">
                            <p style={{color:"white",fontSize:12}}>Kullanım Şartları</p>
                        </div>
                        <div class="col">
                            <p style={{color:"white",fontSize:12}}>Güven ve Uyumluluk</p>
                        </div>
                        <div class="col">
                            <button className='btn btn-dark'><i class="fa-brands fa-youtube"></i></button>
                            <button className='btn btn-dark'><i class="fa-brands fa-github"></i></button>
                            <button className='btn btn-dark'><i class="fa-brands fa-discord"></i></button>
                            <button className='btn btn-dark'><i class="fa-brands fa-linkedin-in"></i></button>
                            <button className='btn btn-dark'><i class="fa-brands fa-x-twitter"></i></button>
                        </div>
                        <div className='col'>
                           <a href='#'><button className='yukarı btn btn-light'>Yukarı Çık^</button></a> 
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Galeri;
