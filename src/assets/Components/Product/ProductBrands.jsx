import React from 'react'
import './ProductBrands.css'
import logoSancor from '../../images/icons/sancor.png'
import logoSanCristobal from '../../images/icons/sancristobal2.png'
import logoIapser from '../../images/icons/iapser.png'
import logoGaleno from '../../images/icons/galeno.png'
import logoRivadavia from '../../images/icons/rivadavia.png'
import logoPacifico from '../../images/icons/pacifico.png'
import logoNacion from '../../images/icons/nacion.png'
import logoProvincia from '../../images/icons/provincia.png'
import logoFederacionPatronal from '../../images/icons/federacionpatronal.png'
import logoSwissMedical from '../../images/icons/swissmedical.png'
import logoAsociart from '../../images/icons/asociart.png'
import logoAfianzadora from '../../images/icons/afianzadora.png'
import logoPrevencionART from '../../images/icons/prevencionart.png'
import logoIntegrity from '../../images/icons/integrity.png'

function ProductBrands() {
  return (
    <div>
        <h3>NOS RESPALDAN</h3>
        <h4 className='brandsSubtitle'>Las mejores aseguradoras del mercado</h4>
        
        <div className='brandsLogosContainer brandsMobile'>
          <img src={logoSancor} alt="" className='brandsLogos logoFirstLine'/>
          <img src={logoSanCristobal} alt="" className='brandsLogos logoFirstLine' />

          <img src={logoRivadavia} alt="" className='brandsLogos'/>
          <img src={logoFederacionPatronal} alt="" className='brandsLogos'/>
          <img src={logoIapser} alt="" className='brandsLogos'/>

          <img src={logoProvincia} alt="" className='brandsLogos' />
          <img src={logoPrevencionART} alt="" className='brandsLogos'/>
          <img src={logoNacion} alt="" className='brandsLogos bigBrand'/>
          
          <img src={logoAsociart} alt="" className='brandsLogos smallBrand'/>
          <img src={logoGaleno} alt="" className='brandsLogos ' />
          <img src={logoSwissMedical} alt="" className='brandsLogos' />

          <img src={logoIntegrity} alt="" className='brandsLogos bigBrand' />
          <img src={logoAfianzadora} alt="" className='brandsLogos' />
          <img src={logoPacifico} alt="" className='brandsLogos' />
        </div>

        <div className='brandsLogosContainer brandsDesktop'>
          <img src={logoSancor} alt="" className='brandsLogos logoFirstLine'/>
          <img src={logoSanCristobal} alt="" className='brandsLogos logoFirstLine' />
          <img src={logoRivadavia} alt="" className='brandsLogos logoFirstLine'/>
          <img src={logoIapser} alt="" className='brandsLogos logoFirstLine'/>
          
          <img src={logoFederacionPatronal} alt="" className='brandsLogos'/>
          <img src={logoProvincia} alt="" className='brandsLogos' />
          <img src={logoPrevencionART} alt="" className='brandsLogos'/>
          <img src={logoNacion} alt="" className='brandsLogos bigBrand'/>
          <img src={logoAsociart} alt="" className='brandsLogos smallBrand'/>

          <img src={logoPacifico} alt="" className='brandsLogos bigBrand' />
          <img src={logoIntegrity} alt="" className='brandsLogos bigBrand' />
          <img src={logoAfianzadora} alt="" className='brandsLogos' />
          <img src={logoSwissMedical} alt="" className='brandsLogos' />
          <img src={logoGaleno} alt="" className='brandsLogos ' />
        </div>

    </div>
  )
}

export default ProductBrands