function printInfo(citiesAndInfo){
    const citiesInfoObject = {}

    citiesAndInfo.forEach(entry => {
        const [city, latitude, longitude] = entry.split(" | ")
        citiesInfoObject[city] = [Number(latitude).toFixed(2), Number(longitude).toFixed(2)];        
    });
    for (const city in citiesInfoObject) {
        console.log(`{ town: '${city}', latitude: '${citiesInfoObject[city][0]}', longitude: '${citiesInfoObject[city][1]}' }`)
    }
}



printInfo(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625']) //{ town: 'Sofia', latitude: '42.70', longitude: '23.33' }
                                                                               //{ town: 'Beijing', latitude: '39.91', longitude: '116.36' }

printInfo(['Plovdiv | 136.45 | 812.575'])                                      //{ town: 'Plovdiv', latitude: '136.45', longitude: '812.58' }