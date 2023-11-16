// dbTest.js in the data directory
const db = require('./db-config'); // Correctly require db-config since it's in the same directory

db('cars').select('*')
  .then(cars => {
    console.log('Cars:', cars);
    process.exit(0); // Exit the process after logging the cars
  })
  .catch(err => {
    console.error('Error fetching cars:', err);
    process.exit(1); // Exit with an error code
  });
