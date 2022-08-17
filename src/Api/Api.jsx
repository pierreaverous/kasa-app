import Accommodation from './Data/Accommodation.json'

const fetchAll = async () => {
    return Accommodation
}

const fetchById = async (id) => {

   /* for(let i=0; i< Accommodation.length; i++){
        console.log(Accommodation[i].id)
    }*/
     const fetchId = Accommodation.filter(accommodationId => accommodationId.id === accommodationId.id)
    console.log(fetchId)

    return fetchId
    // return Accommodation[0].id
}

export {fetchAll, fetchById}