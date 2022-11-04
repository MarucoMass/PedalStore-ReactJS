const dataProducts = [
    {
        id: 1,
        title: "Ibanez TubeScreamer TS-9",
        price: 20000,
        stock: 35,
        categoryId: "od-ds",
        category:{
            name: "OD-DS",
            id: 1
        },
        description: "Este pedal permite generar un efecto overdrive que se caracteriza por ofrecer una saturación del sonido más respetuosa respecto de la señal original y permite enfatizar armónicos de segundo orden. Estas características hacen de este efecto uno de los preferidos para instrumentistas, sobre todo guitarristas y bajistas.",
        img: "https://images-na.ssl-images-amazon.com/images/I/41d3r7bO7CL._SX500_SY500_CR,0,0,500,500_.jpg"
    },
    {
        id: 2,
        title: "Nux Brownie Core",
        price: 8000,
        stock: 25,
        categoryId: "od-ds",
        category:{
            name: "OD-DS",
            id: 1
        },
        description: "Los tonos clásicos del rock británico de los años 70 en un pedal tamaño mini. Brownie tiene una etapa de entrada BJT especialmente diseñada que hace que se 'rompa' cuando la 'válvula' del preamplificador comienza a distorsionarse. También tiene un circuito de recorte asimétrico que le permite simular algunas de las características de un amplificador valvular real.",
        img: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/497302/15614930_800.jpg"
    },
    {
        id: 3,
        title: "Mooer Green Mile",
        price: 10000,
        stock: 15,
        categoryId: "od-ds",
        category:{
            name: "OD-DS",
            id: 1
        },
        description: "El pedal Green Mile produce un sonido de sobremarcha suave y cremoso a partir de una unidad pequeña y exquisita. La carcasa totalmente metálica cuenta con un verdadero interruptor de pedal de derivación, luz indicadora LED y entrada y salida monofónica de 1/4'. La Milla de Verde cuenta con dos modos de trabajo, Warm (Caliente) y Hot (Caliente). Reconstruye un sonido cálido y una respuesta dinámica agradable de un amplificador a válvulas clásico en modo caliente y cambia a caliente para obtener un sonido más potente y potente.",
        img: "https://files.soniccdn.com/images/products/original/616/mooer-green-mile-overdrive-22616.jpg"
    },
    {
        id: 4,
        title: "Boss Distortion DS-1",
        price: 30000,
        stock: 25,
        categoryId: "od-ds",
        category:{
            name: "OD-DS",
            id: 1
        },
        description: "Este pedal de efectos permite alterar el sonido de tu instrumento y, de esta manera, explorar nuevas posibilidades sonoras. ¡Creá con mayor libertad y disfrutá de la música! El efecto distortion permite lograr una saturación del sonido más prominente que el overdrive, generalmente similar al de los amplificadores a tubos de alta ganancia o a los amplificadores a transistores. Además, añade armónicos de tercer orden.",
        img: "https://static.roland.com/assets/images/products/gallery/ds1_D_gal.jpg"
    },
    {
        id: 5,
        title: "OCD Distortion V2",
        price: 30000,
        stock: 10,
        categoryId: "od-ds",
        category:{
            name: "OD-DS",
            id: 1
        },
        description: "Tonos OD clásicos en un pedal compacto con funcionamiento simple y sin complicaciones. Junto con los controles estándar de volumen, unidad y tono, el interruptor HP/LP (High Peak/Low Peak) del OCD lleva el pedal de un impulso limpio a una distorsión maníaca y sostenida. Conmutación de derivación verdadera. El pedal de sobremarcha Fulltone OCD V2 (Obsessive Compulsive Drive) incluye tonos OD clásicos en un pedal compacto con un funcionamiento simple y sin complicaciones. Desde fuertes crujidos ricos en matices y comentarios hasta limpiezas azucaradas, el TOC ofrece los sonidos de un gran amplificador de tubo, como se vende como la misma sensibilidad y respuesta a tu estilo de juego.",
        img: "https://clasesdeguitarra.com.co/wp-content/uploads/2017/08/Fulltone-OCD.jpg"
    },
    {
        id: 6,
        title: "Marshall Jackhammer JH-1",
        price: 21000,
        stock: 30,
        categoryId: "od-ds",
        category:{
            name: "OD-DS",
            id: 1
        },
        description: "El Jackhammer es el siguiente paso evolutivo en los pedales de distorisión de Marshall. El JH-1 contiene nuestros niveles de distorsión más impresionantes hasta la fecha. El control de Contour le permite no sólo hacer Scoop Out los medios, sino también elegir las frecuencias en la que la pala se produce sonido, lo que le permite personalizar a su necesidades individuales.",
        img: "https://bairesrocks.vteximg.com.br/arquivos/ids/207370-1500-1500/687045-MLA31086044704_062019-F.jpg?v=637313077817400000"
    },
    {
        id: 7,
        title: "Boss Super Chorus CH-1",
        price: 19000,
        stock: 28,
        categoryId: "modulation",
        category:{
            name: "Modulaciones",
            id: 2
        },
        description: "El pedal CH-1 Super Chorus ofrece un sonido de coro clásico limpio con agudos nítidos y un efecto estéreo único, variable entre los altavoces izquierdo y derecho.",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_958186-MLA45262295649_032021-F.webp"
        // img: "https://www.compraensanjuan.com/fotos_articulos/1485348_1.jpg"
    },
    {
        id: 8,
        title: "Mooer Chorus Ensemble King Mch1",
        price: 11000,
        stock: 33,
        categoryId: "modulation",
        category:{
            name: "Modulaciones",
            id: 2
        },
        description: "El pedal Ensemble King produce un sonido de chorus analógico puro debido a la circuitería analógica completa dentro de su pequeña y exquisita unidad. La carcasa totalmente metálica cuenta con un verdadero interruptor de pedal de derivación, luz indicadora LED y entrada y salida monofónica de 1/4'.",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_654440-MLA27134825586_042018-F.webp"
        // img: "https://http2.mlstatic.com/D_NQ_NP_786416-MLA25826137010_072017-O.jpg"
    },
    {
        id: 9,
        title: "Tc Electronic Corona Chorus",
        price: 37000,
        stock: 37,
        categoryId: "modulation",
        category:{
            name: "Modulaciones",
            id: 2
        },
        description: "Corona Chorus es tu pedal para todos tus trémulos y bondadosos atributos. Con dos configuraciones de chorus diferentes (el clásico pedal TC Electronic SCF de renombre mundial y un Tri-Chorus) y una configuración de TonePrint personalizada, Corona Chorus estará a tu lado sin importar la situación en que tu juego pueda llevarte. Corona Chorus cuenta con controles de velocidad, profundidad, color y nivel, diseño de bypass verdadero, tamaño reducido, puerta de acceso de batería de fácil acceso y está construido con componentes de la más alta calidad.",
        // img: "https://http2.mlstatic.com/D_NQ_NP_2X_846148-MLA29842126382_042019-F.webp"
        img: "https://static3.tcdn.com.br/img/img_prod/304884/tc_electronic_corona_chorus_pedal_para_guitarra_12838_4_20190703171432.jpg"
    },
    {
        id: 10,
        title: "Boss DD-7 Digital Delay",
        price: 42000,
        stock: 18,
        categoryId: "delay",
        category:{
            name: "Delays",
            id: 3
        },
        description: "El nuevo DD-7 adopta las mejores funciones de sus predecesores y amplía el potencial creativo con el modo Modulation Delay, el modo Analog Delay de modelado clásico, opciones de control de pedal externo, mayor tiempo de retardo, y mucho más.",
        img: "https://www.ecomusicweb.com/wp-content/uploads/2019/11/DD7.png"
    },
    {
        id: 11,
        title: "Mooer Reecho Delay",
        price: 12500,
        stock: 24,
        categoryId: "delay",
        category:{
            name: "Delays",
            id: 3
        },
        description: "El Reecho Digital Delay le da la opción de cambiar entre un sonido de eco cálido y suave creado por delay equipos analógicos clásicos con su opción de Modo Analógico, un sonido natural de Modo Eco Real o un dulce y espacioso Modo Eco de Cinta que suena como si viniera de una máquina de eco de vintage cinta. La pequeña y exquisita unidad está protegida por una carcasa metálica y cuenta con un verdadero pedal de bypass, luz indicadora LED y una entrada y salida monofónica de 1/4'.",
        img: "https://bairesrocks.vteximg.com.br/arquivos/ids/205612-1500-1500/894759-MLA32408774462_102019-F.jpg?v=637313071906200000"
    },
    {
        id: 12,
        title: "Mxr M-169 Carbon Copy Analog Delay",
        price: 36500,
        stock: 12,
        categoryId: "delay",
        category:{
            name: "Delays",
            id: 3
        },
        description: "El pedal de MXR Carbon Copy delay análogo cuenta con una ruta de audio analógico por completo para lograr un rico y calido delay, sólo posible gracias a la vieja escuela de la tecnología. Este diseño cuenta con un increíble delay de 600 ms con modulación a través de un interruptor y un diseño simple de tres perilla que controla el tiempo de retardo, Mix (mezcla seco / húmedo), y Regen (repeticiones de retardo). Todo esto en uno el pedal del tamaño de un Phase 90.",
        // img: "https://http2.mlstatic.com/D_NQ_NP_2X_973881-MLA31032823242_062019-F.webp"
        img: "http://www.fxdoctor.com/wp/wp-content/uploads/2020/10/mxr-carbon-copy.jpg"
    }
]

export default dataProducts;
// export const getProducts = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           return resolve(dataProducts);
//         }, 2000);
//     })
// }