
const knex = require('../../db/db')

function getAll(){
    return knex('movies')
}

function getOne(movieId){
   return knex('movies').where({ id: movieId })
}

// function create (title, director, year, rating, url){
    
// }

// function deleteOne (movieId){
    
// }

// function editOne (movieId, title, director, year, rating, url){
   
// }



module.exports = {
  getAll,
  getOne
//   create,
//   editOne,
//   deleteOne
}
