import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const {filtered_products: products, grid_view } = useFilterContext();
  if(products.lengtg < 1){
    return (
    <h5 style={{textTransform: 'mone'}}>
      Sorry no podcasts matches your search criteria.
    </h5>
    )
  }

  return <GridView products={products}>Product List</GridView>
}

export default ProductList
