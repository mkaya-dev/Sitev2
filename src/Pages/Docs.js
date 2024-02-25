import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar';
import axios from "axios"
import "./All.css"
import { useNavigate } from 'react-router-dom';
import Detail from './Detail';
import AltNavbar from '../Component/AltNavbar';

const Docs = () => {
    const [karakter, setKarakter] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const api_link = "https://api.disneyapi.dev/character"
        axios.get(api_link)
            .then(response => {
                setKarakter(response.data)
            })
    }, [])

    return (
        <><br />
            <Navbar /><br /><br /><br /><br/>

            <div className="sol btn-group-vertical" role="group" aria-label="Vertical button group">
                {
                    karakter.data?.map((liste, i) =>
                        <button key={i} onClick={() => navigate(`/Docs/Detail/${liste._id}`)} style={{textAlign:"left"}} type="button" class="btn btn-dark">
                            {liste.name}
                        </button>
                    )
                }
            </div>

            <div className=' container sag'>
                    {
                        karakter.data?.map((resim,i)=>
                        <img src={resim.imageUrl} />
                        )
                    }
            </div>

            <AltNavbar/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Docs;
