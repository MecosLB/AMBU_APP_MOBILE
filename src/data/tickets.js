// TICKET de prueba
const ticket = {
    uid: '1ui98-1234io-923890',
    agent: 'Gerardo Diaz Olmedo',
    date: {
        creation: '12-04-2024',
        end: null,
    },
    area: 'Fauna',
    categorie: 'Especie en riesgo',
    status: 'Activo',
    priority: 'Alta',
    comments: 'Pato atorado',
    evidence: ['https://dummyimage.com/600x600/fafafa/000000'],
    coordinates: {
        lat: '20.659698',
        lng: '-103.349609',
    },
}

// Arreglo de TICKETS
export default [
    ticket, {
        ...ticket, uid: '1ui98-1234io-923893', categorie: 'Procreacion', comments: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque autem ad rerum sint assumenda modi consectetur est exercitationem facilis commodi explicabo deserunt necessitatibus quo ipsa numquam quod maxime, nisi excepturi!', status: 'Seguimiento', evidence: ['https://dummyimage.com/600x600/fafafa/000000', 'https://dummyimage.com/800x800/e3e3e3/000000', 'https://dummyimage.com/1200x600/000000/ffffff'],
    }, { ...ticket, uid: '1ui98-1234io-108276', categorie: 'Especie desplazada de su habitat natural endemica', status: 'Concluido', coordinates: {
        lat: '20.70959549962079',
        lng: '-103.40942984716972',
    }, }, { ...ticket, uid: '1ui98-1234io-923891' }, { ...ticket, uid: '1ui98-1234io-923892' }, { ...ticket, uid: '1ui98-1234io-923894' }, { ...ticket, uid: '1ui98-1234io-923895' }, { ...ticket, uid: '1ui98-1234io-923896' }, { ...ticket, uid: '1ui98-1234io-923897' }, { ...ticket, uid: '1ui98-1234io-923898' },
]