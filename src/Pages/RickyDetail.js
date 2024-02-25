import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AltNavbar from '../Component/AltNavbar';

const RickyDetail = () => {
    const navigate = useNavigate();
    let { id } = useParams()
    const [detay, setDetay] = useState([])

    useEffect(() => {
        const api_Link = `https://rickandmortyapi.com/api/character/${id}`
        axios.get(api_Link)
            .then(response => {
                setDetay(response.data)
            })
    }, [id]);

    return (
        <><br/>
            <Navbar /><br/><br/><br/><br/><br/><br/>
            <button onClick={() => navigate('/Ricky')} className='btn btn-danger'>Geri</button>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">İsim</th>
                        <th scope="col">Url</th>
                        <th scope="col">{detay?.name}e Ait Resim</th>
                        <th scope='col'>Film İsmi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{detay?.id}</th>
                        <td>{detay?.name}</td>
                        <td><Link to={detay?.url}>Göz Atma Linki</Link></td>
                        <td><img style={{ width: 300 }} src={detay?.image} /></td>
                        <td>{detay.origin?.name}</td>
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

export default RickyDetail;
