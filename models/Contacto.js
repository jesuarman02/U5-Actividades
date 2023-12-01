const { Schema, model } = require("mongoose")

const contactoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio']
    },
    telefono: {
        type: String,
        required: [true, 'El telefono es obligatorio']
    }
})

module.exports = model('Contacto', contactoSchema)