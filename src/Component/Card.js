import React from 'react'
import guncel from "../Images/guncel.avif"
import ozel from "../Images/ozel.avif"
import hızlı from "../Images/hızlı.avif"


const Card = () => {
    return (
        <>

            <div style={{ marginTop: 500, padding: 100 }}>
                <div class="card-group">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Daima Güncel <img src={guncel} style={{ float: "right",width:40 }}  /> </h5>
                            <p class="card-text">Zuplo, OpenAPI yereldir, dolayısıyla API'nizi tanımlayan yapılandırma, belgelerinizi oluşturmak için kullanılanla aynıdır. Güncelliğini yitirmiş API belgelerine elveda. </p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Özelleştirilebilir <img src={ozel} style={{ float: "right",width:40  }} /></h5>
                            <p class="card-text">

                                Geliştirici portalınızı markanıza uyacak şekilde tasarlayın. Tuhaf bir WYSIWYG editörü yok, sadece normal CSS. </p>
                        </div>

                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Hızlı <img src={hızlı} width={40} style={{ float: "right",width:40  }} /></h5>
                            <p class="card-text">Zuplo'da yaptığımız her şey gibi Geliştirici Portalınız da hızlı. Küresel uç CDN'mize dağıtıldı ve harika bir kullanıcı deneyimi ve SEO için optimize edildi.</p>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Card;
