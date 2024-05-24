const Thing = require('../models/things');
const fs = require('fs');

// exports.createThing = (req , res , next) => {
//     const thing = new Thing({
//         _id: req.params.id,
//         title: req.body.title,
//         description: req.body.description,
//         imageUrl: req.body.imageUrl,
//         price: req.body.price,
//         userId: req.body.userId,
//     });
//     thing.save()
//         .then(() => res.status(201).json({message: 'Post saved successfully !'}))
//         .catch(error => res.status(400).json({ error }));
// }
exports.createThing =  ( req ,res , next ) => {

    const thingObject = req.body;
    const thing = new Thing({
        ...thingObject,
        imageUrl:`${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    thing.save()
        .then(() => res.status(201).json({message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error })); 
};

exports.getAllThings = async (req , res , next) => {
    await Thing.find()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({ error }));
}

exports.getOneThing = (req , res , next)=>{
    Thing.findOne({ _id: req.params.id})
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(404).json({ error }));
}

// exports.modifyThing = (req , res , next) => {
//     const thing = new Thing({
//         _id: req.params.id,
//         title: req.body.title,
//         description: req.body.description,
//         imageUrl: req.body.imageUrl,
//         price: req.body.price,
//         userId: req.body.userId,
//     })

//     Thing.updateOne({ _id: req.params.id} , thing)
//         .then(()=> res.status(200).json({messsage: "Objet modifié !"}))
//         .catch(error => res.status(400).json({ error }));
// }

exports.modifyThing = (req , res , next) => {
    const thingObject = req.file ?
    {
        ...JSON.parse(req.body.thing),
        imageUrl:`${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : {
        ...req.body
    };

    Thing.updateOne({ _id: req.params.id} , { ...thingObject, _id: req.params.id})
        .then(()=> res.status(200).json({messsage: "Objet modifié !"}))
        .catch(error => res.status(400).json({ error }));
}

// exports.deleteThing = (req , res , next) => {
//     Thing.deleteOne({ _id: req.params.id})
//         .then(() => res.status(200).json({message:"Objet supprimé !"}))
//         .catch(error => res.status(400).json({ error }));
// }

exports.deleteThing = (req , res , next) => {
    Thing.findOne({ _id: req.params.id})
        .then(thing => {
            const filename = thing.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`,()=>{
                thing.deleteOne({_id: req.params.id})
                    .then(()=> res.status(200).json({message: 'Objet supprimé !'}))
                    .catch( error => res.status(400).json({ error }));
            })
        })
}