export const getProductListService = () => {
    return new Promise(async (resolve, reject) => {
        let url = `${import.meta.env.VITE_BACKEND_URL}/api/products`

        try {
            let res = await fetch(url)
            
            if (res.ok) {
                res = await res.json();
                resolve(res)
            } else {
                throw new Error("Failed to fetch products")
            }
    
        } catch (e) {
            console.log("Failed to get products")
            reject([])
        }
    })

}