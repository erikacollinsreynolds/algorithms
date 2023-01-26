const { Pool } = require('pg');
// v-- REPLACE THE EMPTY STRING WITH YOUR LOCAL/MLAB/ELEPHANTSQL URI
const myURI = 'postgres://quebumvf:7epYG0GU2Gx4Zzc0h97R9MEYp1bLjgvu@peanut.db.elephantsql.com/quebumvf';

// UNCOMMENT THE LINE BELOW IF USING MONGO
// const URI = process.env.MONGO_URI || myURI;

// UNCOMMENT THE LINE BELOW IF USING POSTGRESQL
const URI = process.env.PG_URI || myURI;

// create new pool for db queries
const pool = new Pool({
  connectionString: URI,
});

// return query function from pool to connect to db
module.exports = {
  query: (queryStr, params) => {
    console.log('successfully executed query');
    return pool.query(queryStr, params);
  }
}; // <-- export your model
