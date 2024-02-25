import React from 'react'
import Navbar from '../Component/Navbar';
import AltNavbar from '../Component/AltNavbar';

 const KayitOl = () => {
  return (
    <>
        <br/>
        <Navbar/><br/><br/><br/><br/><br/><br/>
        <div className='profil'><br/>
            <div className='profil_ic'>
              <h6 style={{textAlign:"center",color:"#DA0C81"}}>MK.app'e<br/> Hoşgeldiniz</h6><br/>
              <input style={{height:50,width:250,marginLeft:20,outline:"none"}} type='text' placeholder='Kullanıcı Adı' /><br/><br/>
              <input style={{height:50,width:250,marginLeft:20,outline:"none"}} type="email" placeholder='E-posta Adresi' /><br/><br/>
              <input style={{height:50,width:250,marginLeft:20,outline:"none"}} type="password" placeholder='Şifre ' /><br/><br/>
              <button style={{height:50,width:250,marginLeft:20,outline:"none"}}  className='buttonProfil btn btn-light'>Kayıt Ol</button>
            </div>
        </div>
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

export default KayitOl;
