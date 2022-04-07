const dataProducts = [
    {
        id: 1,
        title: "Ibanez TubeScreamer TS-9",
        price: 20000,
        stock: 35,
        description: "Este pedal permite generar un efecto overdrive que se caracteriza por ofrecer una saturación del sonido más respetuosa respecto de la señal original y permite enfatizar armónicos de segundo orden. Estas características hacen de este efecto uno de los preferidos para instrumentistas, sobre todo guitarristas y bajistas.",
        img: "https://images-na.ssl-images-amazon.com/images/I/41d3r7bO7CL._SX500_SY500_CR,0,0,500,500_.jpg"
    },
    {
        id: 2,
        title: "Nux Brownie Core",
        price: 8000,
        stock: 25,
        description: "Los tonos clásicos del rock británico de los años 70 en un pedal tamaño mini. Brownie tiene una etapa de entrada BJT especialmente diseñada que hace que se 'rompa' cuando la 'válvula' del preamplificador comienza a distorsionarse. También tiene un circuito de recorte asimétrico que le permite simular algunas de las características de un amplificador valvular real.",
        img: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/497302/15614930_800.jpg"
    },
    {
        id: 3,
        title: "Mooer Green Mile",
        price: 10000,
        stock: 15,
        description: "El pedal Green Mile produce un sonido de sobremarcha suave y cremoso a partir de una unidad pequeña y exquisita. La carcasa totalmente metálica cuenta con un verdadero interruptor de pedal de derivación, luz indicadora LED y entrada y salida monofónica de 1/4'. La Milla de Verde cuenta con dos modos de trabajo, Warm (Caliente) y Hot (Caliente). Reconstruye un sonido cálido y una respuesta dinámica agradable de un amplificador a válvulas clásico en modo caliente y cambia a caliente para obtener un sonido más potente y potente.",
        img: "https://files.soniccdn.com/images/products/original/616/mooer-green-mile-overdrive-22616.jpg"
    },
    {
        id: 4,
        title: "Boss Distortion DS-1",
        price: 30000,
        stock: 25,
        description: "Este pedal de efectos permite alterar el sonido de tu instrumento y, de esta manera, explorar nuevas posibilidades sonoras. ¡Creá con mayor libertad y disfrutá de la música! El efecto distortion permite lograr una saturación del sonido más prominente que el overdrive, generalmente similar al de los amplificadores a tubos de alta ganancia o a los amplificadores a transistores. Además, añade armónicos de tercer orden.",
        img: "https://static.roland.com/assets/images/products/gallery/ds1_D_gal.jpg"
    },
    {
        id: 5,
        title: "OCD Distortion V2",
        price: 30000,
        stock: 10,
        description: "Tonos OD clásicos en un pedal compacto con funcionamiento simple y sin complicaciones. Junto con los controles estándar de volumen, unidad y tono, el interruptor HP/LP (High Peak/Low Peak) del OCD lleva el pedal de un impulso limpio a una distorsión maníaca y sostenida. Conmutación de derivación verdadera. El pedal de sobremarcha Fulltone OCD V2 (Obsessive Compulsive Drive) incluye tonos OD clásicos en un pedal compacto con un funcionamiento simple y sin complicaciones. Desde fuertes crujidos ricos en matices y comentarios hasta limpiezas azucaradas, el TOC ofrece los sonidos de un gran amplificador de tubo, como se vende como la misma sensibilidad y respuesta a tu estilo de juego.",
        img: "https://clasesdeguitarra.com.co/wp-content/uploads/2017/08/Fulltone-OCD.jpg"
    },
    {
        id: 6,
        title: "Marshall Jackhammer JH-1",
        price: 21000,
        stock: 30,
        description: "Durante más de 50 años, el nombre de Marshall ha sido sinónimo de género definir tonos de distorsión. Inicialmente, la manera de llegar al Classic Distortion Marshall was a naturalmente Overdrive Válvula de uno de nuestros amplificadores por manivela es hasta Full Volumen. Como pasó el tiempo, Marshall Master Volumen Heads permitido para aún más extrema los niveles de distorsión, como las válvulas de preamplificador se Driven más difícil. La primera generación de Marshall Pedales imitación de la válvula de diversos tipos de distorsiones en conveniencia, eficiente y rentable, cajas de Stomp. El Jackhammer es el siguiente paso evolutivo en Marshall distorsión Pedales. El JH-1 contiene nuestro más indignante niveles de distorsión hasta la fecha. El control de Contour le permite no sólo Scoop Out los medios, sino también elegir las frecuencias en la que la pala se produce sonido, lo que le permite personalizar a su necesidades individuales.",
        img: "https://bairesrocks.vteximg.com.br/arquivos/ids/207370-1500-1500/687045-MLA31086044704_062019-F.jpg?v=637313077817400000"
    }
]

module.exports = {
    dataProducts,
}
// export const getProducts = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           return resolve(dataProducts);
//         }, 2000);
//     })
// }