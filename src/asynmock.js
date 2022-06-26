/*const products = [
  //  {id: '1', name: 'Crop Hoodie',price: '1.700', category: 'buzos-remeras', img: '/assets/products/CROP-HOODIE.jpg', stock: '10', description: 'Buzo Crop con capucha sin forro confeccionado 100% en algodón rústico. Sin rib.'},
  //  {id: '2', name: 'Jean Classic Blue', price: '2.700', category: 'jeans-pants', img: '/assets/products/JEAN-CLASSIC.jpg', stock: '10', description: 'Jean elastizado chupín. Bolsillos delanteros y traseros.'},
  //  {id: '3', name: 'Bermuda Ultra Wide', price: '1.100', category: 'jeans-pants', img: '/assets/products/BERMUDA-ULTRA-WIDE.jpg', stock: '10', description: 'Bermuda unisex tiro alto confeccionada 100% en algodón rústico. Calce oversize'},
  //  {id: '4', name: 'Hoodie Oversize', price: '1.800', category: 'buzos-remeras', img: '/assets/products/BUZO-OVER-RUSTICO.jpg', stock: '10', description: 'Buzo unisex con capcuha sin forro confeccionado 100% en algodon rustico.Sin bolsillos. Sin ribb.'},
  //  {id: '5', name: 'Campera de Jean Oversize', price: '4.500', category: 'jeans-pants', img: '/assets/products/CAMPERA-OVERSIZE.jpg', stock: '10', description: 'Campera de Jean rígido, calce oversize con bolsillos laterales e internos.'},
  //  {id: '6', name: 'Jean Mom', price: '2.700', category: 'jeans-pants', img: '/assets/products/JEAN-MOM.png', stock: '10', description: 'Jean rígido calce mom fit, tiro alto. Bolsillos delanteros y traseros.'},
  //  {id: '7', name: 'Remera Crop', price: '850', category: 'buzos-remeras', img: '/assets/products/REMERA-CROP.jpg', stock: '10', description: 'Remera Crop confeccionada un 100% en algodón. Modelo corto hasta la cintura con un calce Oversize.'},
  //  {id: '8', name: 'Remera Oversize', price: '900', category: 'buzos-remeras', img: '/assets/products/REMERON.jpg', stock: '10', description: 'La prenda esta confeccionada en un 100% de algodón. El calce del producto es Oversize, para más comodidad y un look canchero.'},
  //  {id: '9', name: 'Remera Manga Larga Blend', price: '1.150', category: 'buzos-remeras', img: '/assets/products/REMERA-BLEND-M-LARGA.jpg', stock: '10', description: 'Remera manga larga confeccionada 100% en algodon. El largo es tipo Blend, hasta la cadera/cintura.'},
  //  {id: '10', name: 'Jogger Regular Frisado', price: '2.250', category: 'jeans-pants', img: '/assets/products/JOGGER-REGULAR-FRIZADO.jpg', stock: '10', description: 'Jogger unisex tiro alto confeccionado 100% en algodón frisado. Bolsillos laterales y elásticos en cintura y puños. Calce regular, comodísimo.'},
  //  {id: '11', name: 'Medias', price: '650', category: 'accesorios', img: '/assets/products/MEDIAS.jpg', stock: '10', description: 'Medias 3/4'},
  //  {id: '12', name: 'Riñonera', price: '750', category: 'accesorios', img: '/assets/products/RINONERAS.jpg', stock: '10', description: 'Riñonera confeccionada en tela Cordura, con cierre delantero y correa ajustable.'},
  //  {id: '13', name: 'Top Ribb + Bermuda Ultra Wide', price: '1.950', category: 'outfits', img: '/assets/outfits/OUTFIT-39.jpg', stock: '10', description: 'La tonalidad del mismo color puede variar de prenda a prenda.'},
  //  {id: '14', name: 'Remeron + Bermuda Ultra Wide', price: '2.000', category: 'outfits', img: '/assets/outfits/OUTFIT-31.jpg', stock: '10', description: 'La tonalidad del mismo color puede variar de prenda a prenda.'},
  //  {id: '15', name: 'Remeron + Jogger Regular Frisado', price: '3.150', category: 'outfits', img: '/assets/outfits/OUTFIT-51.jpg', stock: '10', description: 'La tonalidad del mismo color puede variar de prenda a prenda.'},
  //  {id: '16', name: 'Top Ribb + Jean Mom', price: '3.550', category: 'outfits', img: '/assets/outfits/OUTFIT-41.jpg', stock: '10', description: 'La tonalidad del mismo color puede variar de prenda a prenda.'},
  //  {id: '17', name: 'Hoodie Oversize + Remera Oversize + Short de Algodon', price: '3.800', category: 'outfits', img: '/assets/outfits/OUTFIT-35.jpg', stock: '10', description: 'La tonalidad del mismo color puede variar de prenda a prenda.'},
  //  {id: '18', name: 'Jean Skinny Mujer + Remera Regular Fit Crop x 2', price: '4.400', category: 'outfits', img: '/assets/outfits/OUTFIT-38.jpg', stock: '10', description: 'La tonalidad del mismo color puede variar de prenda a prenda.'},
  //  {id: '19', name: 'Hoodie Oversize Frisado + Jogger Regular Frisado', price: '4.500', category: 'outfits', img: '/assets/outfits/OUTFIT-13.jpg', stock: '10', description: 'La tonalidad del mismo color puede variar de prenda a prenda.'},
  //  {id: '20', name: 'Remera Manga Larga Oversize + Buzo Sleeveless Frisado + Jean Skinny Mujer', price: '4.550', category: 'outfits', img: '/assets/outfits/OUTFIT-48.jpg', stock: '10', description: 'La tonalidad del mismo color puede variar de prenda a prenda.'},
  //  {id: '21', name: 'Maxicombo #5', price: '4.650', category: 'maxicombos', img: '/assets/maxicombos/MAXICOMBOS-5.jpg', stock: '5', description:'Los productos que contengan en su nombre la palabra “OUTLET” pueden contener algún tipo de falla de fabrica, encojen con el lavado y no tienen cambio ni devolución.'},
  //  {id: '22', name: 'Maxicombo #14', price: '5.050', category: 'maxicombos', img: '/assets/maxicombos/MAXICOMBOS-14.jpg', stock: '5', description:'Los productos que contengan en su nombre la palabra “OUTLET” pueden contener algún tipo de falla de fabrica, encojen con el lavado y no tienen cambio ni devolución.'},
  //  {id: '23', name: 'Maxicombo #13', price: '5.200', category: 'maxicombos', img: '/assets/maxicombos/MAXICOMBOS-13.jpg', stock: '5', description:'Los productos que contengan en su nombre la palabra “OUTLET” pueden contener algún tipo de falla de fabrica, encojen con el lavado y no tienen cambio ni devolución.'},
  //  {id: '24', name: 'Maxicombo #1', price: '5.600', category: 'maxicombos', img: '/assets/maxicombos/MAXICOMBOS-1.jpg', stock: '5', description:'Los productos que contengan en su nombre la palabra “OUTLET” pueden contener algún tipo de falla de fabrica, encojen con el lavado y no tienen cambio ni devolución.'},
  //  {id: '25', name: 'Maxicombo #12', price: '5.850', category: 'maxicombos', img: '/assets/maxicombos/MAXICOMBOS-12.jpg', stock: '5', description:'Los productos que contengan en su nombre la palabra “OUTLET” pueden contener algún tipo de falla de fabrica, encojen con el lavado y no tienen cambio ni devolución.'},
  //  {id: '26', name: 'Maxicombo #10', price: '6.250', category: 'maxicombos', img: '/assets/maxicombos/MAXICOMBO-10.jpg', stock: '5', description:'Los productos que contengan en su nombre la palabra “OUTLET” pueden contener algún tipo de falla de fabrica, encojen con el lavado y no tienen cambio ni devolución.'},
  //  {id: '27', name: 'Maxicombo #17', price: '6.350', category: 'maxicombos', img: '/assets/maxicombos/MAXICOMBO-17.jpg', stock: '5', description:'Los productos que contengan en su nombre la palabra “OUTLET” pueden contener algún tipo de falla de fabrica, encojen con el lavado y no tienen cambio ni devolución.'},
  //  {id: '28', name: 'Maxicombo #16', price: '6.350', category: 'maxicombos', img: '/assets/maxicombos/MAXICOMBO-16.jpg', stock: '5', description:'Los productos que contengan en su nombre la palabra “OUTLET” pueden contener algún tipo de falla de fabrica, encojen con el lavado y no tienen cambio ni devolución.'},
]
export const getProducts = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
             resolve(products);
        }, 1500)
    })
}

export const getProductsById = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
             resolve(products.find(prod => prod.id === id));
        }, 1500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
             resolve(products.filter(prod => prod.category === categoryId));
        }, 1500)
    })
}
*/