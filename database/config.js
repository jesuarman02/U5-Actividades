const { default: mongoose } = require("mongoose"); //Importacion ES6

const connect = async() => {
    try {
        await mongoose.connect("mongodb+srv://jesuarman74:Olgaolivia02@cluster0.qsgayaz.mongodb.net/agenda");
        console.log('La Base de Datos se conecto correctamente');
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la base de datos');
    }
}

module.exports = connect; // Exportamos en ES6