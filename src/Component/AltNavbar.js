import React from 'react'
import "../Pages/All.css"



const AltNavbar = () => {
    return (
        <>
            <div className='kutu'>
                <div className='kutu_ic'>


                    <ul>
                        <h6>MK.app</h6>
                        <hr style={{ color: "white" }} />
                        <li>Bültenimize Katılın</li><br />
                        <li><input placeholder='E-posta Adresiniz' style={{ height: 50, outline: "none" }} type='text' /></li><br />
                    </ul>


                    <ul>
                        <h6>ÖZELLİKLER</h6>
                        <hr style={{ color: "white" }} />
                        <li>API Anahtar Yönetimi  </li><br />
                        <li>Geliştirici Portalı</li><br />
                        <li>Çoklu bulut</li><br />
                        <li>OpenAPI Yerel</li><br />
                        <li>Politikalar</li><br />
                        <li>Programlanabilir</li><br />
                        <li>Hız Sınırlaması</li><br />
                        <li>Sınırsız Ortamlar</li><br />




                    </ul>

                    <ul>
                        <h6>Geliştiriciler</h6>
                        <hr style={{ color: "white" }} />
                        <li>Dokümantasyon </li><br />
                        <li> Blog</li><br />
                        <li>Değişiklik günlüğü</li><br />
                        <li><h6>ÜRÜN</h6></li><br />
                        <li>Fiyatlandırma</li><br />
                        <li>Kayıt olmak</li><br />
                        <li>Müşteri Hikayeleri</li><br />
                        <li>Güven ve Uyumluluk</li><br />

                    </ul>


                    <ul>
                        <h6>ÜRÜN KARŞILAŞTIRMALARI</h6>
                        <hr style={{ color: "white" }} />
                        <li> Apigee'ye karşı </li><br />
                        <li> AWS API Ağ Geçidi ile Karşılaştırması</li><br />
                        <li> Azure API Yönetimi ile Karşılaştırması</li><br />
                        <li> Kong'a Karşı</li><br /><br /><br /><br /><br />
                        <li> Solo.io'ya karşı </li><br /><br />
                        <li>Tyk'a karşı</li><br /><br />
                        <li><h6>Şirket</h6></li><br /><br /><br />
                        <li>Hakkımıızda</li><br /><br />
                        <li>Kariyer</li><br /><br />
                    </ul>

                </div>

            </div>


        </>
    )
}

export default AltNavbar;
