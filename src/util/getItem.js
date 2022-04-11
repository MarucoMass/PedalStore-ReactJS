
let validation = true;
const getItem = ( data ) => {
        return new Promise((resolve, reject) => {
            if (validation) {
                setTimeout(() => {
                resolve(data);
                }, 2000);
            } else {
                reject('Hubo un error');
            }
        })
    }

export default getItem;