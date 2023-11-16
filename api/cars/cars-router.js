const Car = require('./cars-model.js');
const router = require('express').Router();
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
} = require('./cars-middleware.js');

router.get('/', (req, res) => {
  Car.getAll()
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: `Failed to retrieve cars: ${err.message}` });
    });
});

router.get('/:id', checkCarId, (req, res) => {
  Car.getById(req.params.id)
    .then(car => {
      if (car) {
        res.json(car);
      } else {
        res.status(404).json({ message: 'Failed to retrieve car' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: `Failed to retrieve car: ${err.message}` });
    });
});

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique,(req, res) => {
  Car.create(req.body)
    .then(newCarEntry => {
      res.status(201).json(newCarEntry);
    })
    .catch(err => {
      res.status(500).json({ message: `Failed to create car: ${err.message}` });
    });
});

module.exports = router;
