import React from 'react'
import Layout from '../../../components/layout/Layout'
import CategoryCard from '../../../components/category/CategoryCard'
import CategoryImg from '../../../assets/caroutline.png'

export const Category = () => {
  return (
    <Layout className={'grid md:grid-cols-7 sm:grid-cols-3 grid-cols-2 md:gap-12 sm:gap-5 gap-4'}>
        <CategoryCard img={CategoryImg}/>
        <CategoryCard img={CategoryImg}/>
        <CategoryCard img={CategoryImg}/>
        <CategoryCard img={CategoryImg}/>
        <CategoryCard img={CategoryImg}/>
        <CategoryCard img={CategoryImg}/>
        <CategoryCard img={CategoryImg}/>
    </Layout>
  )
}


export default Category