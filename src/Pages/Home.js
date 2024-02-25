import React from 'react'
import Navbar from '../Component/Navbar';
import "./All.css"
import resim from "../Images/k4.png"
import Card from '../Component/Card';
import mavi from "../Images/k1.png"
import yesil from "../Images/k2.png"
import kırmızı from "../Images/k3.png"
import AltNavbar from '../Component/AltNavbar';
import { useNavigate } from 'react-router-dom'




const Home = () => {
    const navigate = useNavigate()

    return (
        <><br />
            <Navbar /><br /><br /><br /><br /><br /><br />
            <div style={{ marginLeft: 180 }} className='sol'>
                <h1 style={{ color: "white", fontSize: 80 }}>Geliştirici Portalı</h1>
                <p style={{ color: "white" }}>Zuplo tarafından yönetilen API'ler, son kullanıcıların API belgelerini<br /> görüntüleyebildiği, API Anahtarlarını yönetebildiği ve kullanım analizlerini<br /> görüntüleyebildiği güzel bir geliştirici portalıyla dağıtılabilir.</p>
                <button className='button2 btn btn-light'>Bir Örnnege Bakın</button>
                <button className='button3 btn btn-light'>Dokümanlar</button>

            </div>
            <div style={{ marginRight: 200 }} className='sag'>
                <img src={resim} width={200} height={400} />
            </div>
            <Card />

            <div style={{ marginLeft: 180 }} className='sol'>
                <h1 style={{ color: "white", fontSize: 60 }}>Otomatik Dokümantasyon</h1>
                <p style={{ color: "white" }}>Zuplo API'leri OpenAPI spesifikasyonlarından<br /> oluşturulmuştur ve bu spesifikasyonlar müşteriler,<br /> çalışanlar veya iş ortakları için güzel API belgeleri<br /> oluşturmak için kullanılır.</p>
                <button className='button4 btn btn-light'>OpenAPI spesifikasyonları</button>
            </div>
            <div style={{ marginRight: 200 }} className='sag'>
                <img src={mavi} width={20} height={400} />
            </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            <div style={{ marginLeft: 180 }} className='sol'>
                <img src={yesil} width={200} height={400} />
            </div>

            <div style={{ marginRight: 200 }} className='sag'>
                <h1 style={{ color: "white", fontSize: 80 }}>API Anahtar Yönetimi</h1>
                <p style={{ color: "white" }}>API'nizin güvenliğini sağlamak için Zuplo'nun API<br /> Anahtarı kimlik doğrulamasını kullanırken, yetkili <br /> kullanıcılar API anahtarlarını doğrudan Geliştirici<br /> Portalından görüntüleyebilir, oluşturabilir ve<br /> yönetebilir.</p>
                <button className='button5 btn btn-light'>API Anahtar Yönetimi</button>
            </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            <div style={{ marginLeft: 180 }} className='sol'>
                <h1 style={{ color: "white", fontSize: 80 }}>Kamu veya Özel</h1>
                <p style={{ color: "white" }}>Zuplo destekli geliştirici portalınız tamamen herkese <br /> açık olabilir veya erişimi kendi yetkilendirme <br /> kurallarınıza göre kontrol edebilirsiniz. Herkesin<br /> dokümanları okumasına izin verebilirsiniz, ancak <br /> yalnızca belirli kullanıcıların API anahtarları <br /> oluşturmasına izin verebilirsiniz; aksi takdirde<br /> dokümanlarınız tamamen özel olabilir. Seçim senin.</p>
                <button className='button6 btn btn-light'>Geliştirici Portalı kimlik doğrulaması</button>

            </div>
            <div style={{ marginRight: 200 }} className='sag'>
                <img src={kırmızı} width={200} height={400} />
            </div>

            <div className='padding'>
                <div className='sol'>
                    <h2 style={{ fontSize: 60, padding: 100 }}>Geliştiriciler için Tasarlandı,<br /> İleri Teknolojiler İçin Üretildi</h2>
                </div>
                <div style={{ padding: 60, marginTop: 60 }} className='sag'>
                    <button onClick={() => navigate("/KayıtOl")} className='button7 btn btn-light'>Ücretsiz Başlayın</button><br /><br />
                    <button className='button8 btn btn-light'>Dokümanları okuyun</button>
                </div>

            </div>
            <div>
                <AltNavbar />
            </div><br /><br /><br /><br/>
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
                           <a href='#'><button  className='yukarı btn btn-light'>Yukarı Çık ^</button></a> 
                        </div>
                      
                    </div>
                </div>
            </div>









        </>
    )
}

export default Home;
