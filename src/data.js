const data = [
    {
        id: 1,
        title: "Ibanez TubeScreamer",
        price: 20000,
        img: "https://images-na.ssl-images-amazon.com/images/I/41d3r7bO7CL._SX500_SY500_CR,0,0,500,500_.jpg"
    },
    {
        id: 2,
        title: "Nux Brownie",
        price: 8000,
        img: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/497302/15614930_800.jpg"
    },
    {
        id: 3,
        title: "Mooer Green Mile",
        price: 10000,
        img: "https://files.soniccdn.com/images/products/original/616/mooer-green-mile-overdrive-22616.jpg"
    },
    {
        id: 4,
        title: "Boss Distortion",
        price: 30000,
        img: "https://static.roland.com/assets/images/products/gallery/ds1_D_gal.jpg"
    },
    {
        id: 5,
        title: "OCD Distortion",
        price: 30000,
        img: "https://clasesdeguitarra.com.co/wp-content/uploads/2017/08/Fulltone-OCD.jpg"
    },
    {
        id: 6,
        title: "Marshall Jackhammer jh-1",
        price: 21000,
        img: "https://bairesrocks.vteximg.com.br/arquivos/ids/207370-1500-1500/687045-MLA31086044704_062019-F.jpg?v=637313077817400000"
    }
]

export const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(data)
        }, 2000);
    })
}