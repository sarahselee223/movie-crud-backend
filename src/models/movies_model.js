const shortid = require('shortid')
const fs = require('fs')
const path = require('path')
const movieFilePath = path.join(__dirname, '../../db/movies.json')

function getAll(){
    const { movies } = readData()
    return movies
}

function getOne(id){
    const { movies } = readData() 
   
    const movie = movies.find(movie => {return movie.id === id})
    
    if (!movie) {
        return error('no matching id found')
    } 
    return movie
}

function create (title, director, year, rating, url){
    const { movies } = readData() 

    if (!title && !director && !year && !rating && !url) {
        return error('element is required')
    } 
    if (isNaN(Number(year)) || isNaN(Number(rating))){
        return error('year and rating have to be a number')
    } 
    if (Number(rating) > 5 || Number(rating) < 0){
        return error('rating has to be between 0 and 5')
    }
    const movie = {id: shortid.generate(), title, director, year, rating, url}
    movies.push(movie)

    writeData(movies)
    return movie
}

function deleteOne (id){
    const { movies } = readData() 

    const movieIndex = movies.findIndex(movie => {return movie.id === id})
    
    if (movieIndex === -1) {
        return error('no matching id found')
    }

    movies.splice(movieIndex, 1)
    
    writeData(movies)
    return movies
}

function editOne (id, title, director, year, rating, url){
    const { movies } = readData() 
   
    const movie = movies.find(movie => {return movie.id === id})
    
    if (!movie) {
        return error('no matching id found')
    } 
    if (title) {
        movie.title = title
    } 
    if (director) {
        movie.director = director
    }
    if (year) {
        movie.year = year
    }
    if (rating) {
        movie.rating = rating
    } 
    if (url) {
        movie.url = url
    }
    if (isNaN(Number(year)) || isNaN(Number(rating))){
        return error('year and rating have to be a number')
    } 
    if (Number(rating) > 5 || Number(rating) < 0){
        return error('rating has to be between 0 and 5')
    }
    writeData(movies)
    return movie
}

function error(msg) {
    return { errors: msg }
}

function readData(){
    return {movies: JSON.parse(fs.readFileSync(movieFilePath))}
}
function writeData(movies){
    return fs.writeFileSync(movieFilePath, JSON.stringify(movies, null, 4))
}

module.exports = {
  getAll,
  getOne,
  create,
  editOne,
  deleteOne
}
