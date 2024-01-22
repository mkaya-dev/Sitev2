import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import AltNavbar from '../Component/AltNavbar';
import "./All.css"

const Detail = () => {
    let { _id } = useParams()

    const [detay, setDetay] = useState([])

    useEffect(() => {
        const api_link = `https://api.disneyapi.dev/character/${_id}`
        axios.get(api_link)
            .then(response => {
                setDetay(response.data)
            })
    }, [_id])

    const Disnay=()=>{
        window.location="/Docs"
    }


    console.log(detay, "detay");
    return (
        <><br />
            <Navbar /><br/><br/><br/><br/><br/><br/>
            <button onClick={Disnay} className='btn btn-danger'>Geri</button>

            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">İsmi</th>
                        <th scope="col">Url</th>
                        <th scope="col">{detay.data?.name}e Ait Resim</th>
                        <th scope='col'>Filmi İsmi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{detay.data?._id}</th>
                        <td>{detay.data?.name}</td>
                        <td><Link to={detay.data?.sourceUrl}>Göz Atma Linki</Link></td>
                        <td><img style={{ width: 300 }} src={detay.data?.imageUrl} /></td>
                        <td>{detay.data?.films}</td>
                    </tr>
                </tbody>
            </table>

            <AltNavbar/><br/><br/><br/><br/><br/>
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

export default Detail;
