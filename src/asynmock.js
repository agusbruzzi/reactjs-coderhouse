const products = [
    {id: '1', name: 'Crop Hoodie',price: '1.700', category: 'buzos', img: '/assets/products/CROP-HOODIE.jpg', stock: '10', description: 'Buzo Crop con capucha sin forro confeccionado 100% en algodón rústico. Sin rib.'},
    {id: '2', name: 'Jean Classic Blue', price: '2.700', category: 'jeans', img: '/assets/products/JEAN-CLASSIC.jpg', stock: '10', description: 'Jean elastizado chupín. Bolsillos delanteros y traseros.'},
    {id: '3', name: 'Bermuda Ultra Wide', price: '1.100', category: 'pants', img: '/assets/products/BERMUDA-ULTRA-WIDE.jpg', stock: '10', description: 'Bermuda unisex tiro alto confeccionada 100% en algodón rústico. Calce oversize'},
    {id: '4', name: 'Hoodie Oversize', price: '1.800', category: 'buzos', img: '/assets/products/BUZO-OVER-RUSTICO.jpg', stock: '10', description: 'Buzo unisex con capcuha sin forro confeccionado 100% en algodon rustico.Sin bolsillos. Sin ribb.'},
    {id: '5', name: 'Campera de Jean Oversize', price: '4.500', category: 'jeans', img: '/assets/products/CAMPERA-OVERSIZE.jpg', stock: '10', description: 'Campera de Jean rígido, calce oversize con bolsillos laterales e internos.'},
    {id: '6', name: 'Jean Mom', price: '2.700', category: 'jeans', img: '/assets/products/JEAN-MOM.png', stock: '10', description: 'Jean rígido calce mom fit, tiro alto. Bolsillos delanteros y traseros.'},
    {id: '7', name: 'Remera Crop', price: '850', category: 'remeras', img: '/assets/products/REMERA-CROP.jpg', stock: '10', description: 'Remera Crop confeccionada un 100% en algodón. Modelo corto hasta la cintura con un calce Oversize.'},
    {id: '8', name: 'Remera Oversize', price: '900', category: 'remeras', img: '/assets/products/REMERON.jpg', stock: '10', description: 'La prenda esta confeccionada en un 100% de algodón. El calce del producto es Oversize, para más comodidad y un look canchero.'},
    {id: '9', name: 'Remera Manga Larga Blend', price: '1.150', category: 'remeras', img: '/assets/products/REMERA-BLEND-M-LARGA.jpg', stock: '10', description: 'Remera manga larga confeccionada 100% en algodon. El largo es tipo Blend, hasta la cadera/cintura.'},
    {id: '10', name: 'Jogger Regular Frisado', price: '2.250', category: 'buzos', img: '/assets/products/JOGGER-REGULAR-FRIZADO.jpg', stock: '10', description: 'Jogger unisex tiro alto confeccionado 100% en algodón frisado. Bolsillos laterales y elásticos en cintura y puños. Calce regular, comodísimo.'},
    {id: '11', name: 'Medias', price: '650', category: 'accesorios', img: '/assets/products/MEDIAS.jpg', stock: '10', description: 'Medias 3/4'},
    {id: '12', name: 'Riñonera', price: '750', category: 'accesorios', img: '/assets/products/RINONERAS.jpg', stock: '10', description: 'Riñonera confeccionada en tela Cordura, con cierre delantero y correa ajustable.'},
]

export const getProducts = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
             resolve(products);
        }, 2000)
    })
}