
exports.seed = function(knex, Promise) {

  return knex('movies').del()
    .then(function () {

      return knex('movies').insert([
        {
          id: 1,
          title: 'Amelie',
          director: 'Jean-Pierre Jeunet',
          year: 2002,
          rating: 4,
          url: 'http://www.gstatic.com/tv/thumb/v22vodart/28319/p28319_v_v8_ae.jpg'
        },
        {
          id: 2,
          title: 'Ex Machina',
          director: 'Alex Garland',
          year: 2015,
          rating: 4,
          url: 'http://www.gstatic.com/tv/thumb/v22vodart/11007806/p11007806_v_v8_aa.jpg'
        },
        {
          id: 3,
          title: 'Forrest Gump',
          director: 'Robert Zemeckis',
          year: 1994,
          rating: 5,
          url: 'http://www.gstatic.com/tv/thumb/v22vodart/15829/p15829_v_v8_ab.jpg'
        },
        {
          id: 4,
          title: 'Cinema Paradiso',
          director: 'Giuseppe Tornatore',
          year: 1988,
          rating: 5,
          url: 'https://panandslam.files.wordpress.com/2016/02/cinema-paradiso-poster.jpg'
        }
    ])
  })
    .then(() => {
        return knex.raw(
            `SELECT setval('movies_id_seq', (SELECT MAX(id) FROM movies));`
        ) 
    })
}
