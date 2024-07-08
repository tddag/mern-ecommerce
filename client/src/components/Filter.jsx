import React, { useEffect, useState } from 'react'
import { Select } from 'antd';
import { useSelector } from 'react-redux';

export const Filter = (props) => {

    const setFilter = props.setFilter;

    const [categoryList, setCategoryList] = useState([])
    const [sizeList, setSizeList] = useState([])
    const [colorList, setColorList] = useState([])

    const { searchBarFilter } = useSelector((state) => state.products)



    useEffect(() => {
        console.log("Product List Changed")

        populateCategoryList()
        populateSizeList()
        populateColorList()
    }, [props.productList])

    useEffect(() => {
        handleFilterChange("name", searchBarFilter.name)
    }, [searchBarFilter])

    const populateCategoryList = () => {
        if (!props.productList) return 
        let list = props.productList.map(product => product.category).filter(category => category)
        let set = new Set(list);
        list = Array.from(set);
        list = list.map(category => ({
            value: category.toLowerCase(),
            label: category.charAt(0).toUpperCase() + category.toLowerCase().slice(1)
        }))
        setCategoryList(list);
    }

    const populateSizeList = () => {
        if (!props.productList) return 
        let list = props.productList.map(product => product.size).filter(size => size)
        let set = new Set(list);
        list = Array.from(set);
        list = list.map(size => ({
            value: size.toLowerCase(),
            label: size.charAt(0).toUpperCase() + size.toLowerCase().slice(1)
        }))
        setSizeList(list);
    }    

    const populateColorList = () => {
        if (!props.productList) return 
        let list = props.productList.map(product => product.color).filter(color => color)
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
            case "name": 
                setFilter(f => ({...f, name: value}))
                break;                     
            default:                       
        }
    }
    
    return (
        <div>
            <div className="bg-pink-100 p-4 flex flex-col gap-2">
                Category
                <Select
                    className="w-20"
                    options={categoryList}
                    value={props.filter.category}
                    onChange={(value) => handleFilterChange('category', value)}
                />
            </div>

            <div className="bg-pink-100 p-4 flex flex-col gap-2">
                Size
                <Select
                    className="w-20"
                    options={sizeList}
                    value={props.filter.size}
                    onChange={(value) => handleFilterChange('size', value)}

                />                        
            </div>

            <div className="bg-pink-100 p-4 flex flex-col gap-2">
                Color
                <Select
                    className="w-20"
                    options={colorList}
                    value={props.filter.color}
                    onChange={(value) => handleFilterChange('color', value)}
                />                               
            </div>              
            <div className="flex w-full justify-center">
                <button className="bg-blue-100 p-2 mt-4 rounded-lg" onClick={() => setFilter([])}>Reset</button>
            </div>
        </div>
    )
}
