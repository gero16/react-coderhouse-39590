const Products = [
    {
        id: '1',
        name: 'Laptop Dell Intel Core I7  Quad-Core 3.0 GHz',
        price: 1759,
        category: 'notebooks',
        img: "https://netpc.uy/wp-content/uploads/2022/03/1-83.jpg",
        stock: 12,
        grafica: "NVIDIA GeForce RTX 3060", 
        teclado: "retroiluminado y teclado númerico",
        color: "platino",
        marca: "HP",
        ram: "32GB",
        sistema: "Windows 11",
        procesador: "Intel Core i7-1165G7 Quad-Core 3.0 GHz",
        resolucion: "3072 x 1920",
        pantalla: "16'",
        disco: "SSD 1TB",
        redes: "Wi-Fi 6"
    },
    {
        id: '2',
        price: 1300, 
        name: 'Intel Core i7-1165G7 Quad-Core 2.8 GHz',
        category: 'notebooks',
        img: 'https://netpc.uy/wp-content/uploads/2022/02/1-130.jpg',
        stock: 12,
        grafica: "NVIDIA GeForce RTX 3060", 
        teclado: "retroiluminado y teclado númerico",
        color: "platino",
        marca: "Dell",
        ram: "DDR4 de 16 GB",
        sistema: "Windows 11",
        procesador: "Intel Core i7-1165G7 Quad-Core 2.8 GHz",
        resolucion: "1920 x 1080p",
        pantalla: "16'",
        disco: "HDD 1TB",
        redes: "No"
    },
    {
        id: '3',
        name: 'PC De Escritorio HP Pavilion Ryzen 3 ',
        price: 1500,
        category: 'PC',
        img: 'https://netpc.uy/wp-content/uploads/2022/05/4-37.jpg',
        stock: 20,
        grafica: "AMD Radeon RX 5500 4GB GDDR6", 
        teclado: "retroiluminado y teclado númerico",
        color: "Chasis gris ",
        marca: "Gateway",
        ram: "8gb DDR4-3200",
        sistema: "Windows 10 Home",
        procesador: "AMD Ryzen 3-5300G",
        frecuencia: "2.8 / 3.8 Ghzz",
        resolucion: "",
        pantalla: "",
        disco: "256GB SSD",
        redes: "LAN 10/100/1000 GbE integrada",
        peso: "5.96kg"
    },
    {
        id: '4',
        name: 'Tablet SAMSUNG TAB Android 12  One UI 4.1 ',
        price: 980,
        category: 'tablets',
        img: 'https://netpc.uy/wp-content/uploads/2022/06/3-12.jpg',
        stock: 20,
        grafica: "", 
        teclado: "retroiluminado y teclado númerico",
        color: "Chasis gris",
        marca: "Samsung",
        ram: "8gb",
        sistema: "Android 12, One UI 4.1",
        procesador: "Octa-core",
        frecuencia: "1×3.00 GHz Cortex-X2 & 3×2.50 GHz Cortex-A710 & 4×1.80 GHz Cortex-A510",
        resolucion: "11.0″ 350.9 cm2",
        pantalla: "1600 x 2560",
        disco: "128 GB",
        redes: "Wi-Fi 802.11 a/b/g/n/ac/6e, dual-band, Wi-Fi Direct, hotspot",
        peso: "503g",
        camara: "Cámara frontal : 12 MP, f/2.4, 120 (ultrawide)"
    },
    {
        id: '5',
        price: 2100,
        name: 'Apple Macbook Air 13 Pulgadas',
        category: 'notebooks',
        img: 'https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v3427391923621716552/products/100001446.00-macbook-pro-retina-apple-13.3-16gb-gris-espacial-1tb-mwp52ci-a-.jpg&quality=0.8&outputFormat=JPEG',
        stock: 20,
        grafica: "Intel Iris Plus Graphics", 
        procesador: "Intel Core i5 de cuatro núcleos",
        frecuencia: "2,0 GHz (Turbo Boost hasta 3,8 GHz)",
        disco: "SSD 512GB",
        teclado: "retroiluminado y teclado númerico",
        color: "platino",
        marca: "MAC",
        ram: "16GB",
        sistema: "macOS",
        pantalla: "13'",
        resolucion: "1024 x 780",
        redes: "Red inalámbrica Wi-Fi 802"
    },
    {
        id: '6',
        name: 'Notebook Gateway 15.6  1.6 Ghz″ ',
        price: 1800,
        category: 'notebooks',
        img: 'https://netpc.uy/wp-content/uploads/2022/07/gateway-r7-2.jpg',
        stock: 12,
        grafica: "Integrada", 
        teclado: "retroiluminado y teclado númerico",
        color: "Abyss Blue",
        marca: "Lenovo",
        ram: "12GB",
        sistema: "Windows 11",
        procesador: "INTEL CORE I7",
        frecuencia: "1.6 / 3.4 Ghz",
        resolucion: "1920px x 1080px",
        pantalla: "15'6",
        disco: "SSD 512GB",
        redes: "Wi-Fi 6",
        peso: "Peso: 1.6",

    },
    {
        id: '7',
        name: "Notebook ASUS Zenbook UX534 1",
        price: 1397,
        title: 'Laptop Dell Intel Core I7 Geforce Rtx 3060 32GB 1TB SSD',
        category: 'notebooks',
        img: 'https://netpc.uy/wp-content/uploads/2020/10/1-16-12.jpg',
        stock: 12,
        grafica: "Intel UHD Graphics", 
        teclado: "retroiluminado y teclado númerico",
        color: "Gris espacial",
        marca: "Gateway",
        ram: "32GB",
        sistema: "Windows 11",
        procesador: "AMD Ryzen™ 7 3700U",
        frecuencia: "1.6 / 3.4 Ghz",
        resolucion: "1920 x 1080 px",
        pantalla: "15'6",
        disco: "SSD 512GB",
        redes: "Wi-Fi 6"
    },
    {
        id: '8',
        name: 'Notebook Asus Gamer I7 2.8Ghz',
        price: 3400,
        category: 'notebooks',
        img: 'https://netpc.uy/wp-content/uploads/2020/10/ASUS-GAMER-I7-16GB-1TB-256GB-SSD-1.jpg',
        stock: 20,
        grafica: "NVIDIA GeForce GTX 1070M 8GB dedicados.", 
        teclado: "retroiluminado y teclado númerico",
        color: "Chasis gris ",
        marca: "Gateway",
        ram: "16GB DDR4",
        sistema: "Windows 10 Home",
        procesador: "Intel Core i7-7700HQ",
        frecuencia: "2.8 / 3.8 Ghz",
        resolucion: "1920×1080",
        pantalla: "17.3″ FULL HD",
        disco: "1TB + 256GB SSD",
        redes: "DUALBAND ac"
    },
    {
        id: '9',
        name: 'Notebook Gaming Alienware R5 i7',
        price: 3400,
        category: 'notebooks',
        img: 'https://netpc.uy/wp-content/uploads/2020/10/ALIENWARE-17-R5-3.jpg',
        stock: 20,
        grafica: "NVIDIA GeForce GTX 1070 8GB GDDR5", 
        teclado: "retroiluminado y teclado númerico",
        color: "Negro",
        marca: "Alienware",
        ram: "16GB DDR4",
        sistema: "Windows 10 Home",
        procesador: "Intel Core i7-7700HQ",
        frecuencia: "2.2 GHz – 4.1 GHz (Turbo Boost)",
        resolucion: "1920×1080",
        pantalla: " 17.3” FHD con retroiluminación LED IPS",
        disco: "1TB HDD + 256GB SSD ",
        redes: "Wifi 6 802.11ac"
    },
    {
        id: '10',
        name: 'PC de Escritorio HP ENVY',
        price: 2400,
        category: 'PC',
        img: 'https://netpc.uy/wp-content/uploads/2021/10/3-15.png',
        stock: 20,
        grafica: "NVIDIA GeForce GTX1660 SUPER 6G5", 
        teclado: "retroiluminado y teclado númerico",
        color: "Negro",
        marca: "HP",
        ram: "32GB DDR4 2933MH",
        sistema: "Windows 10 Home",
        procesador: "Intel Core 11700F 11va ",
        frecuencia: "Generación 2.5 GHz – 4.9 GHz (Turbo Boost)",
        resolucion: "1920 × 1080",
        pantalla: " 17.3” FHD con retroiluminación LED IPS",
        disco: "SATA de 1 TB a 7200 RPM",
        redes: "Wi-Fi 6 (2×2 / 160) Gig "
    },
    {
        id: '11',
        name: 'PC de Escritorio NVIDIA GeForce GTX 1070 8GB',
        price: 209,
        category: 'PC',
        img: 'https://netpc.uy/wp-content/uploads/2021/02/1-146.jpg',
        stock: 20,
        grafica: "", 
        teclado: "",
        color: "Blue",
        marca: "BLACKVIEW",
        ram: "4GB",
        sistema: "Android 10.0Wireless: 2.4G-IEEE 802.11a/b/g; 5G-IEEE 8.2.11a/n",
        procesador: "MT6762V/WD",
        frecuencia: "Generación 2.5 GHz – 4.9 GHz (Turbo Boost)",
        resolucion: "720 x 1520",
        pantalla: "6.2″ Inch HD+ IP",
        disco: "64GB",
        redes: "Wi-Fi 6 (2×2 / 160) Gig ",
        peso: "180g",
        camara: "13.0MP Sony",
    },
   
    {
        id: '13',
        name: 'Celular Xiaomi Redmi 9C',
        price: 199,
        category: 'celulares',
        img: 'https://servicios.zonatecno.com.uy/productos/Celular_Xiaomi_Redmi_9C_64GB_3GB_Midnight_Grey_Dual_Sim_tab_2.png',
        stock: 20,
        grafica: "", 
        teclado: "IPS LCD capacitiva, 16M colores",
        color: "Black",
        marca: "Xiaomi",
        ram: "3GB",
        sistema: "Android 10, MIUI 12",
        procesador: "MediaTek Helio G35 Octa-core (4x2.3 GHz Cortex-A53 4x1.8 GHz Cortex-A53",
        frecuencia: "Generación 2.5 GHz – 4.9 GHz (Turbo Boost)",
        resolucion: "720 x 1520",
        pantalla: "6.53'",
        disco: "64GB",
        redes: "Wi-Fi 6 (2×2 / 160) Gig ",
        peso: "180g",
        camara: "Triple 13 MP",
    },
    {
        id: '14',
        name: 'Xiaomi Redmi 10C Azul 64GB Libre',
        price: 1100,
        category: 'celulares',
        img: 'https://cellularcenter.com.uy/cache/cellularcenter/products/XR10C64BL-1-550x550.jpg',
        stock: 20,
        grafica: "", 
        teclado: "Si (IPS LCD)",
        color: "Blue",
        marca: "Xiaomi",
        ram: "4GB",
        sistema: "Android 10.0Wireless: 2.4G-IEEE 802.11a/b/g; 5G-IEEE 8.2.11a/n",
        procesador: "MT6762V/WD",
        frecuencia: "Generación 2.5 GHz – 4.9 GHz (Turbo Boost)",
        resolucion: "720 X 1650 px",
        pantalla: "6.2″ Inch HD+ IP",
        disco: "64GB",
        redes: "Wi-Fi 6 (2×2 / 160) Gig ",
        peso: "180g",
        camara: "dual tiene un lente principal de 50MP ",
    },
    {
        id: '15',
        name: 'Celular Apple Iphone 13 128GB',
        price: 1300,
        category: 'celulares',
        img: 'https://servicios.zonatecno.com.uy/productos/Celular_Apple_iPhone_13_256GB_4GB_Red_tab_1.png',
        stock: 20,
        grafica: "", 
        teclado: "",
        color: "Red",
        marca: "Apple",
        ram: "4GB",
        sistema: "iOS 15",
        procesador: "Chip A15 Bionic Nuevo CPU de 6 núcleos con 2 núcleos de rendimiento y 4 de eficiencia.",
        frecuencia: "Generación 2.5 GHz – 4.9 GHz (Turbo Boost)",
        resolucion: "1170 x 2532 pixeles",
        pantalla: "6.1",
        disco: "64GB",
        redes: "Wi-Fi 6 (2×2 / 160) Gig ",
        peso: "180g",
        camara: "12 MP",
    },
   
]





export default Products