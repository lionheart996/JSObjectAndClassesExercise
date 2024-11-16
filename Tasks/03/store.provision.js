
function showProvisions(provisionsBefore, provisionsAfter) {
    const combinedArray = provisionsBefore.concat(provisionsAfter);

    const productsAndProvisions = {}

    for (let i = 0; i < combinedArray.length; i += 2) {
        const product = combinedArray[i];
        const provisions = Number(combinedArray[i + 1]);

        // Update the provision count for each product
        if (productsAndProvisions[product]) {
            productsAndProvisions[product] += provisions;
        } else {
            productsAndProvisions[product] = provisions;
        }
    }

    for (const product in productsAndProvisions) {
        console.log(`${product} -> ${productsAndProvisions[product]}`)
    }
}




showProvisions(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])	   
//             Chips -> 5
//             CocaCola -> 9
//             Bananas -> 44
//             Pasta -> 11
//             Beer -> 2
//             Flour -> 44
//             Oil -> 12
//             Tomatoes -> 70

showProvisions(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'])	

//              Salt -> 2
//              Fanta -> 4
//              Apple -> 21
//              Water -> 4
//              Juice -> 5
//              Sugar -> 44
//              Oil -> 12
//              Tomatoes -> 7
//              Bananas -> 30