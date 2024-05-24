const products = [
  {
    id: 1,
    title: "Backpack",
    price: 210,
    description: "Este mochila es la compañera perfecta para tus actividades diarias y tus caminatas por el bosque. Fabricada con materiales de alta calidad, ofrece durabilidad y confort. Tiene múltiples compartimentos para organizar tus pertenencias y un diseño ergonómico para llevarla cómodamente durante largos periodos. Ideal para estudiantes, excursionistas y viajeros frecuentes.",
    category: "mens-clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    stock: 5,
  },
  {
    id: 2,
    title: "Slim Fit",
    price: 25,
    description: "Esta camiseta de estilo ajustado presenta un diseño moderno con mangas largas en contraste y un cierre de tres botones en el cuello. Hecha de un material suave y elástico, es perfecta para el uso diario y ocasiones casuales. Disponible en varios colores, combina fácilmente con jeans y pantalones chinos para un look relajado pero elegante.",
    category: "mens-clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    stock: 4,
  },
  {
    id: 3,
    title: "Jacket",
    price: 55,
    description: "Esta chaqueta de algodón es una excelente opción para la primavera, el otoño y el invierno. Con un diseño versátil, es adecuada para diversas actividades como trabajar, hacer senderismo y acampar. Ofrece una buena protección contra el viento y la lluvia ligera, y su diseño clásico asegura que nunca pase de moda. Incluye varios bolsillos para mayor funcionalidad.",
    category: "mens-clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    stock: 3,
  },
  {
    id: 4,
    title: "Slim Fit",
    price: 15,
    description: "Esta camiseta casual de corte ajustado es ideal para el uso diario. La diferencia en el color entre la pantalla y el producto real es mínima, garantizando que recibirás justo lo que esperabas. Fabricada con materiales de alta calidad, ofrece comodidad y durabilidad. Perfecta para combinar con cualquier atuendo casual, esta camiseta es un básico imprescindible en tu guardarropa.",
    category: "mens-clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    stock: 2,
  },
  {
    id: 5,
    title: "Naga Gold",
    price: 695,
    description: "Inspirado en el mítico dragón de agua que protege la perla del océano, este collar de la colección Legends es una pieza deslumbrante. Úsalo hacia adentro para recibir amor y abundancia, o hacia afuera para protección. Hecho con materiales de la más alta calidad, este collar es perfecto para ocasiones especiales y como regalo significativo para un ser querido.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    stock: 23,
  },
  {
    id: 6,
    title: "Micropave",
    price: 168,
    description: "Este anillo de oro sólido con micropavé es una elección elegante y sofisticada. Garantiza satisfacción, permitiendo devoluciones o cambios en un plazo de 30 días. Diseñado y vendido por Hafeez Center en los Estados Unidos, este anillo es ideal para compromisos, bodas y aniversarios. Su delicado diseño y brillante acabado lo convierten en un accesorio imprescindible.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    stock: 9,
  },
  {
    id: 7,
    title: "Princess",
    price: 15,
    description: "Este anillo de compromiso de solitario clásico, chapado en oro blanco, es el regalo perfecto para tu amor. Ideal para compromisos, bodas, aniversarios y el Día de San Valentín. Su diseño atemporal y su brillo deslumbrante lo convierten en una pieza de joyería que cualquier mujer estaría encantada de recibir y usar en cualquier ocasión especial.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    stock: 4,
  },
  {
    id: 8,
    title: "Plated Earrings",
    price: 15,
    description: "Estos pendientes de túnel de acero inoxidable chapados en oro rosa son una opción moderna y elegante para cualquier ocasión. Hechos de acero inoxidable 316L, ofrecen durabilidad y resistencia al deslustre. Su diseño de doble abocinamiento asegura un ajuste cómodo y seguro. Perfectos para añadir un toque de estilo a cualquier conjunto.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    stock: 4,
  },
  {
    id: 9,
    title: "WD 2TB",
    price: 65,
    description: "Este disco duro externo portátil de 2TB de WD es la solución perfecta para almacenar y transportar grandes cantidades de datos. Con compatibilidad USB 3.0 y 2.0, ofrece rápidas transferencias de datos y mejora el rendimiento de tu PC. Su alta capacidad es ideal para almacenar documentos, fotos, videos y más. Compatible con Windows 10, 8.1 y 7; puede requerir reformateo para otros sistemas operativos.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    stock: 56,
  },
  {
    id: 10,
    title: "SanDisk SSD",
    price: 109,
    description: "Este SSD interno SanDisk SSD PLUS de 1TB ofrece una actualización fácil para un arranque más rápido, tiempos de carga de aplicaciones reducidos y una respuesta general mejorada. Con velocidades de lectura/escritura de hasta 535MB/s y 450MB/s, es ideal para las cargas de trabajo típicas de PC. Equilibrio perfecto entre rendimiento y fiabilidad, mejorando significativamente la experiencia del usuario.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    stock: 74,
  },
  {
    id: 11,
    title: "Silicon Power",
    price: 109,
    description: "El SSD de 256GB de Silicon Power, con tecnología 3D NAND y caché SLC, ofrece velocidades de transferencia excepcionales y un rendimiento mejorado. Su diseño delgado de 7mm es adecuado para ultrabooks y notebooks ultra-delgados. Soporta comandos TRIM, tecnología de recolección de basura, RAID y ECC para proporcionar un rendimiento optimizado y una mayor fiabilidad.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    stock: 56,
  },
  {
    id: 12,
    title: "WD 4TB",
    price: 114,
    description: "Este disco duro portátil de 4TB para juegos de WD es perfecto para ampliar tu experiencia de juego en PS4. Con una configuración rápida y fácil, te permite llevar tus juegos a cualquier parte. Su diseño elegante y de alta capacidad viene con una garantía limitada del fabricante de 3 años, asegurando un almacenamiento confiable y duradero para todos tus juegos favoritos.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    stock: 9,
  },
  {
    id: 13,
    title: "Acer Monitor",
    price: 599,
    description: "El monitor Acer SB220Q bi de 21.5 pulgadas ofrece una experiencia visual impresionante con su pantalla Full HD IPS y tecnología Radeon FreeSync. Con una tasa de refresco de 75Hz y un diseño ultra delgado sin marco, es ideal para configuraciones de múltiples monitores. Su tiempo de respuesta rápido y amplia gama de colores aseguran imágenes claras y vibrantes desde cualquier ángulo.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    stock: 1,
  },
  {
    id: 14,
    title: "Samsung 49\"",
    price: 999,
    description: "El monitor curvo de gaming Samsung CHG90 de 49 pulgadas ofrece una experiencia de juego inmersiva con su pantalla super ultra ancha 32:9 y tecnología QLED. Con soporte HDR y una tasa de refresco de 144Hz, proporciona colores precisos y un rendimiento fluido. Ideal para jugadores serios, este monitor elimina el desenfoque de movimiento y reduce el retraso de entrada para una experiencia de juego inigualable.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    stock: 2,
  },
  {
    id: 15,
    title: "Snowboard Jacket",
    price: 56.99,
    description: "Esta chaqueta de snowboard 3 en 1 para mujeres es perfecta para el invierno. Diseñada con un tamaño estándar de EE. UU., ofrece una gran protección contra el frío y la nieve. Con múltiples capas que se pueden usar juntas o por separado, es versátil y funcional. Ideal para actividades al aire libre como el esquí, el snowboard y otras aventuras invernales.",
    category: "womens-clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    stock: 9,
  },
  {
    id: 16,
    title: "Moto Jacket",
    price: 29.95,
    description: "Esta chaqueta de motociclista de cuero sintético con capucha desmontable para mujeres es una combinación perfecta de estilo y funcionalidad. Hecha de 100% poliuretano en el exterior y 100% poliéster en el forro, ofrece un look elegante mientras proporciona comodidad y calidez. Ideal para el uso diario y para añadir un toque moderno a cualquier conjunto.",
    category: "womens-clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    stock: 7,
  },
  {
    id: 17,
    title: "Rain Jacket",
    price: 39.99,
    description: "Esta chaqueta de lluvia para mujeres es ligera y perfecta para viajes o uso casual. Con mangas largas, capucha con forro de algodón y cintura ajustable con cordones, proporciona un ajuste cómodo y elegante. Los bolsillos laterales son lo suficientemente grandes para llevar tus pertenencias esenciales. Su diseño a rayas añade un toque de estilo a esta práctica chaqueta.",
    category: "womens-clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    stock: 6,
  },
  {
    id: 18,
    title: "Boat Neck",
    price: 9.85,
    description: "Esta camiseta de manga corta para mujeres, con cuello de barco, es ideal para cualquier ocasión. Hecha de una mezcla de 95% rayón y 5% spandex, ofrece una gran elasticidad y confort. Fabricada en EE.UU. o importada, esta prenda es ligera y presenta un diseño acanalado en las mangas y el cuello, con doble costura en el dobladillo inferior para mayor durabilidad.",
    category: "womens-clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    stock: 24,
  },
  {
    id: 19,
    title: "Moisture Tee",
    price: 7.95,
    description: "Esta camiseta de manga corta para mujeres, hecha de 100% poliéster, es perfecta para mantenerte fresca y cómoda. Con tejido que absorbe la humedad, esta camiseta es ligera y espaciosa, con un cuello en V cómodo y un ajuste más delgado que proporciona una silueta femenina. Ideal para cualquier actividad física o como una prenda casual para el día a día.",
    category: "womens-clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    stock: 10,
  },
  {
    id: 20,
    title: "T Shirt",
    price: 12.99,
    description: "Esta camiseta casual de algodón y spandex para mujeres es una opción versátil para cualquier estación. Con un diseño de manga corta, cuello en V y estampado de letras, esta camiseta es perfecta para usar en la oficina, la playa, la escuela o en la calle. El tejido suave y elástico asegura comodidad durante todo el día, mientras que su estilo moderno la convierte en una prenda esencial para tu guardarropa.",
    category: "womens-clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    stock: 4,
  },
];

export const getProducts = () => {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id === parseInt(id, 10))); // Convertir id a número
    }, 500);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
 resolve(products.filter((product) => product.category === category));
    }, 500);
    
  });
};
