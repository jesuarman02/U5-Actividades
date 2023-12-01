const contacto = require('../models/Contacto');


const obtenerContactos = async(req, res) => {
    const contactos = await contacto.find({});

    res.json({
        msg: "Contactos Obtenidos Correctamente",
        contactos: contactos
    })
};

const crearContactos = async(req, res) => {
    const contacto = new contacto(req.body);

    await contacto.save();

    res.json('contacto guardado');
};

const actualizarContactos =  async(req, res) => {

    const contactoId = req.params.id;

    await contacto.findByIdAndUpdate(contactoId, req.body)
    res.json({
        msg:'contacto actualizado correctamente'
    });
};

const eliminarContactos = async(req, res) => {

    const contactoId = req.params.id;

    await contacto.findByIdAndDelete(contactoId)
    res.json({
        msg:'contacto eliminado correctamente'
    });
}

module.exports = {
    obtenerContactos,
    crearContactos,
    actualizarContactos,
    eliminarContactos
}