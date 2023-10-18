import React from 'react'
import ProductSlider from '../../Components/Product/ProductSlider'
import '../../Components/Product/ProductSlider.css'
import ProductBrands from '../../Components/Product/ProductBrands'

function Product() {
  return (
    <div id='product'>
      <h3 className='productTitle'>NUESTROS PRODUCTOS</h3>
      <ProductSlider/>
      <ProductBrands/>
    </div>
  )
}

export default Product