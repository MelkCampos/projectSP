
const SurvivorModel = require('../Models/Survivor');

module.exports = {

    Query: {
        
        // list all the survivos
        survivors: () => SurvivorModel.find(),

        // list just one survivor by - ID -
        survivor: (_, { id }) => SurvivorModel.findById(id),


    },



    Mutation: {
        // Create a survivor
        createRegister: (_, { name, age, sex, latitude, longitude, infected ,items }) => SurvivorModel.create({
            name,
            age,
            sex,
            latitude,
            longitude,
            infected,
            items
        }),

        // update localization about 'latitude' and 'longitude' by - ID -
        updateLocalization:(_, { id, latitude ,longitude }) => SurvivorModel.updateMany({

            id,
            latitude,
            longitude
        }),


        updateStateAboutInfection:(_, { id, infected }) => SurvivorModel.updateMany({

            id,
            infected
        }),

      
    }
}