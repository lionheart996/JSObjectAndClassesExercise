function carCheck(arrayOfCommandsAndPlates) {
    // Use a Set to keep track of cars in the parking lot
    let parkingLot = new Set();

    // Process each command
    arrayOfCommandsAndPlates.forEach(entry => {
        let [command, plateNumber] = entry.split(', '); // Split command and plate number
        if (command === 'IN') {
            parkingLot.add(plateNumber); // Add the car to the parking lot
        } else if (command === 'OUT') {
            parkingLot.delete(plateNumber); // Remove the car from the parking lot
        }
    });

    // Convert the Set to an array, sort it, and print the results
    let sortedPlates = Array.from(parkingLot).sort();
    if (sortedPlates.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        console.log(sortedPlates.join('\n'));
    }
}

carCheck(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])	

    // CA2822UU
    // CA2844AA
    // CA9876HH
    // CA9999TT

carCheck(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'])	
    
    // Parking Lot is Empty