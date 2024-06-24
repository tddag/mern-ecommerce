import React, { useEffect, useState } from 'react'
import { ProductLlistUser } from '../components/ProductLlistUser'
import { Select } from 'antd';

export const Home = () => {

    const [productList, setProductList] = useState([])  
    const [filteredProductList, setFilteredProductList] = useState([]) 
    const [filter, setFilter] = useState({
        category: null,
        size: null,
        color: null
    })
    const [categoryList, setCategoryList] = useState([])
    const [sizeList, setSizeList] = useState([])
    const [colorList, setColorList] = useState([])

    useEffect(() => {
        getProductList();
    }, [])

    useEffect(() => {
        console.log("Product List Changed")

        populateCategoryList()
        populateSizeList()
        populateColorList()
    }, [productList])

    useEffect(() => {
        console.log("Filtered Changed")

        if (isFilterReset()) {
            return
        }
 
        let list = productList.filter(product => {
            if (filter.category && product.category.toLowerCase() !== filter.category.toLowerCase()) return false
            if (filter.size && product.size.toLowerCase() !== filter.size.toLowerCase()) return false
            if (filter.color && product.color.toLowerCase() !== filter.color.toLowerCase()) return false
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

    const getProductList = async () => {
        let url = `http://localhost:8000/api/products`

        try {
            let list = [
                {
                    "_id": "6678e3241e21d9b17c584f5e",
                    "name": "New product 1",
                    "price": 100,
                    "category": "shirt",
                    "color": "black",
                    "size": "M",
                    "images": [
                        "https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-6169d.appspot.com/o/0b51f07a-5dd3-40c8-86d5-ea9fa4187525?alt=media",
                        "https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-6169d.appspot.com/o/4070658b-85a6-4a40-9803-8c0696da6f83?alt=media",
                        "https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-6169d.appspot.com/o/af891257-57b9-4a53-a8c6-7dbadf0ff346?alt=media"
                    ],
                    "createdAt": "2024-06-24T03:08:20.386Z",
                    "updatedAt": "2024-06-24T03:08:20.386Z",
                    "__v": 0
                },
                {
                    "_id": "6678ed2d086e1e1a586b9f22",
                    "name": "Pant",
                    "price": 200,
                    "category": "Bottom",
                    "color": "grey",
                    "size": "M",
                    "images": [
                        "https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-6169d.appspot.com/o/9b2a0c55-80ce-4044-8a41-37f82d48a84b?alt=media",
                        "https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-6169d.appspot.com/o/65a703ea-4aa8-49d2-a1d5-937284466f93?alt=media"
                    ],
                    "createdAt": "2024-06-24T03:51:09.196Z",
                    "updatedAt": "2024-06-24T03:51:09.196Z",
                    "__v": 0
                },
                {
                    "_id": "6678f2f8086e1e1a586b9f39",
                    "name": "Hat",
                    "price": 50,
                    "category": "Hat",
                    "color": "blue",
                    "size": "S",
                    "images": [
                        "https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-6169d.appspot.com/o/e692a0ed-13be-47fa-9854-587a25e96b93?alt=media",
                        "https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-6169d.appspot.com/o/99cee7c6-8a62-4a6c-b5ec-bf99d0f3c485?alt=media"
                    ],
                    "createdAt": "2024-06-24T04:15:52.819Z",
                    "updatedAt": "2024-06-24T04:15:52.819Z",
                    "__v": 0
                },
                {
                    "_id": "6678fc0603049160749f01ac",
                    "name": "Bomber",
                    "price": 150,
                    "category": "Bomber",
                    "color": "black",
                    "size": "M",
                    "images": [
                        "https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-6169d.appspot.com/o/d0856be4-9ade-4759-9189-1f12e13fc90d?alt=media",
                        "https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-6169d.appspot.com/o/37fda0be-b744-471f-8da2-1219afe21b67?alt=media"
                    ],
                    "createdAt": "2024-06-24T04:54:30.133Z",
                    "updatedAt": "2024-06-24T04:54:30.133Z",
                    "__v": 0
                }
            ]
            setProductList(list)
            setFilteredProductList(list)
        } catch (e) {
            console.log(e)
        }
    }

    const populateCategoryList = () => {
        if (!productList) return 
        let list = productList.map(product => product.category)
        let set = new Set(list);
        list = Array.from(set);
        list = list.map(category => ({
            value: category.toLowerCase(),
            label: category.charAt(0).toUpperCase() + category.toLowerCase().slice(1)
        }))
        setCategoryList(list);
    }

    const populateSizeList = () => {
        if (!productList) return 
        let list = productList.map(product => product.size)
        let set = new Set(list);
        list = Array.from(set);
        list = list.map(size => ({
            value: size.toLowerCase(),
            label: size.charAt(0).toUpperCase() + size.toLowerCase().slice(1)
        }))
        setSizeList(list);
    }    

    const populateColorList = () => {
        if (!productList) return 
        let list = productList.map(product => product.color)
        let set = new Set(list);
        list = Array.from(set);
        list = list.map(color => ({
            value: color.toLowerCase(),
            label: color.charAt(0).toUpperCase() + color.toLowerCase().slice(1)
        }))
        setColorList(list);
    }       

    const handleFilterChange = (filterField, value) => {
        switch(filterField) {
            case "category": 
                setFilter(f => ({...f, category: value}))
                break;
            case "size": 
                setFilter(f => ({...f, size: value}))
                break;      
            case "color": 
                setFilter(f => ({...f, color: value}))
                break;     
            default:                       
        }
    }



    return (
        <div className="flex flex-col bg-blue-200">
            <div className="flex justify-between p-2 items-center">
                <div>
                    TD STORE
                </div>
                <div className="bg-green-300 p-2">
                    Cart
                </div>
            </div>
            <div className="bg-red-200 h-full flex w-full">
                <div className="h-full bg-yellow-200 w-1/3 md:w-1/6 flex flex-col p-4 gap-4">
                    <div className="bg-pink-100 p-4 flex flex-col gap-2">
                        Category
                        <Select
                            className="w-20"
                            options={categoryList}
                            onChange={(value) => handleFilterChange('category', value)}
                        />
                    </div>

                    <div className="bg-pink-100 p-4 flex flex-col gap-2">
                        Size
                        <Select
                            className="w-20"
                            options={sizeList}
                            onChange={(value) => handleFilterChange('size', value)}

                        />                        
                    </div>

                    <div className="bg-pink-100 p-4 flex flex-col gap-2">
                        Color
                        <Select
                            className="w-20"
                            options={colorList}
                            onChange={(value) => handleFilterChange('color', value)}

                        />                               
                    </div>                    
                    
                </div>
                <div className="flex pt-10 pl-5">
                    <ProductLlistUser productList={filteredProductList}/>
                </div>
            </div>

        </div>
    )
}
