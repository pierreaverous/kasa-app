import Accommodation from './Data/Accommodation.json'
//fetch de l'api 
const fetchAll = async () => {
    return Accommodation
}

const fetchById = async (id) => {






     const accommodation = Accommodation.find(accommodation => id === accommodation.id)

    return accommodation
}

export {fetchAll, fetchById}