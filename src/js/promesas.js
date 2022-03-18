const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reacciona alergica a las picaduras de arañas'
    },
}

let heros = [];


export const CreateHero = ( heroe ) => {
    var hero_aux = JSON.stringify(heroe);
    heros.push(hero_aux);
    return new Promise( ( resolve, reject ) => {
        if( heros ) {
            setTimeout(() => resolve( heros ), 1000);
        } else {
            reject(`No se pudo agregar al heroe ${ heroe }`);
        }
    }).catch( err => {
        alert(err)
    }).finally( () => {
        console.log(`Se agregó al héroe ${ heroe.name }`);
    });
    ;
}


export const CreateHeroAsync = async( heroe ) => {
    var hero_aux = JSON.stringify(heroe);
    heros.push(hero_aux);
    console.log(`Sí se pudo agregar al heroe ${ heroe.name }`);
    console.log(heros);
    if( heros ) {
        return heros;
    } else {
        throw `No se pudo agregar al heroe ${ heroe.name }`;
    }
    
}

export const buscarHeroe = ( id ) => {
    
    const heroe = heroes[id];

    return new Promise( ( resolve, reject ) => {
        if( heroe ) {
            
            setTimeout(() => resolve( heroe ), 1000);

        } else {
            reject(`No existe un héroe con el id ${ id }`);
        }
    });
}


export const buscarHeroeAsync = async( id ) => {
    
    const heroe = heroes[id];

    if( heroe ) {
        return heroe;
    } else {
        throw `No existe un héroe con el id ${ id }`;
    }
}


 
export const MostrarHeroe = ( heroe ) => {
    let olList  = document.querySelector('ol');
    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${ heroe.name }</b>: ${ heroe.name }`;
    olItem.classList.add('list-group-item');

    olList.append(olItem);

}

export const getInfo = () => { 

    var alumno= {
     nombre : 'Raúl',
     apellido : 'Armas',
     edad : 24
    }
    return new Promise((resolve,reject) => {
      var alumno_respu = JSON.stringify(alumno);
      setTimeout(() => resolve( alumno_respu ), 1000);
    }).then(
        data => {
            console.log(data);
        }
    ).catch( err => {
        alert(err)
    }).finally( () => {
        console.log('Se termino la promesa getInfo');
    });

}

const promesaLenta = new Promise( ( resolve, reject ) => {
    setTimeout(() => resolve('Promesa Lenta') , 2000);
});

const promesaMedia = new Promise( ( resolve, reject ) => {
    setTimeout(() => resolve('Promesa Media') , 1500);
});

const promesaRapida = new Promise( ( resolve, reject ) => {
    setTimeout(() => resolve('Promesa Rápida') , 1000);
});


export {
    promesaLenta,
    promesaMedia,
    promesaRapida,
}
