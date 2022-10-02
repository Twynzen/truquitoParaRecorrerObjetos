const pcGamer = {
        screen: 'samsung',
        board: 'Asus TUF Gaming B550 Plus',
        graphicCart: 'RTX Geforce 3070',
        ramMemory: '16gb',
        ssdDrives: {
            disc1: '1tb',
            disc2: '500gb'
        },
        keyboard: 'red dragon'
    }
    //Nos convierte los objetos en arrays
let discs;
Object.entries(pcGamer).forEach((value, key) => {
    // console.log(key, "llaves", value, "valores");
    if (key === 4) {
        discs = value[1];
    }

})
console.log(discs, "discos");