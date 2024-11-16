function inventory(heroes) {
    // Convert the input into an array of hero objects
    let heroList = heroes.map(element => {
        const [heroName, level, inventory] = element.split(' / ');
        return {
            heroName,
            level: Number(level), // Convert level to a number
            inventory
        };
    });

    // Sort heroes by level
    heroList.sort((a, b) => a.level - b.level);

    // Print sorted heroes
    heroList.forEach(hero => {
        console.log(`Hero: ${hero.heroName}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.inventory}`);
    });
}


inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])	
    // Hero: Hes
    // level => 1
    // items => Desolator, Sentinel, Antara
    // Hero: Derek
    // level => 12
    // items => BarrelVest, DestructionSword
    // Hero: Isacc
    // level => 25
    // items => Apple, GravityGun

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ])	
    // Hero: Batman
    // level => 2
    // items => Banana, Gun
    // Hero: Superman
    // level => 18
    // items => Sword
    // Hero: Poppy
    // level => 28
    // items => Sentinel, Antara