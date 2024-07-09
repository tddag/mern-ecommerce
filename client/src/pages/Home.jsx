import React, { useEffect, useState } from 'react'
import { ProductListUser } from '../components/ProductListUser'
import { Filter } from '../components/Filter';
import { NavBar } from '../components/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { getProductListAsync } from '../state/products/productsSlice';

export const Home = () => {

    // const [productList, setProductList] = useState([])  
    const { productList } = useSelector((state) => state.products)
    const [filteredProductList, setFilteredProductList] = useState([]) 


    const [filter, setFilter] = useState({
        category: null,
        size: null,
        color: null,
        name: null
    })

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductListAsync());
    }, [])

    useEffect(() => {
        setFilteredProductList(productList)
    }, [productList])



    useEffect(() => {
        console.log("Filtered Changed")

        console.log(filter)

        if (isFilterReset()) {
            if (productList?.length > 0) setFilteredProductList(productList)
            return
        }
 
        let list = productList.filter(product => {
            if (filter.category && product.category.toLowerCase() !== filter.category.toLowerCase()) return false
            if (filter.size && product.size.toLowerCase() !== filter.size.toLowerCase()) return false
            if (filter.color && product.color.toLowerCase() !== filter.color.toLowerCase()) return false
            if (filter.name && product.name.toLowerCase() !== filter.name.toLowerCase()) return false
            return true
        })
        setFilteredProductList(list)
    }, [filter])

    const isFilterReset = () => {
        for (let field of Object.keys(filter)) {
            if (filter[field]) return false
        }
        return true
    }

    return (
        <div className="flex flex-col ">
            <NavBar searchEnabled={true}/>
            <div className=" h-full flex w-full">
                <div className="h-full  w-1/3 md:w-1/6 flex flex-col p-4 gap-4">
                    <Filter productList={productList} setFilter={setFilter} filter={filter}/>                      
                </div>
                <div className="flex pt-10 pl-5">
                    <ProductListUser productList={filteredProductList}/>
                </div>
            </div>

        </div>
    )
}
