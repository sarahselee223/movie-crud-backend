const model = require('../models/movies_model.js')

function getAll (req, res, next){
    const result = model.getAll()
    res.status(200).json(result)
}

function getOne (req, res, next){
    const result = model.getOne(req.params.id)
    if(result.errors){
        return next({ status: 400, message: `Could not get a movie`, errors: result.errors  })
    }
    res.status(200).json(result) 
}

function create (req, res, next){
    const result = model.create(
        req.body.title,
        req.body.director,
        req.body.year,
        req.body.rating,
        req.body.url,
    )

    if(result.errors){
        return next({ status: 400, message: `Could not create new movie`, errors: result.errors })
    }
    res.status(201).json(result)
}

function deleteOne (req, res, next){
    const result = model.deleteOne(req.params.id)
    if(result.errors){
        return next({ status: 400, message: `Could not delete a movie`, errors: result.errors })
    }
    res.status(201).json(result)
}


function editOne (req, res, next){
    const result = model.editOne(
        req.params.id,
        req.body.title,
        req.body.director,
        req.body.year,
        req.body.rating,
        req.body.url,
    )
    if(result.errors){
        return next({ status: 400, message: `Could not update a movie`, errors: result.errors })
    }
    res.status(201).json(result)
}

  

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  editOne
}
