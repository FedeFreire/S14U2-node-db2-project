const Car = require('./cars-model');
const vinValidator = require('vin-validator');




async function checkCarId(req, res, next) {
  const { id } = req.params;
  try {
    const car = await Car.getById(id);
    if (!car) {
      return res.status(404).json({ message: `car with id ${id} is not found` });
    }
    next();
  } catch (err) {
    next(err);
  }
}

function checkCarPayload(req, res, next) {
  const { vin, make, model, mileage } = req.body;
  if (!vin) {
    return res.status(400).json({ message: "vin is missing" });
  }
  if (!make) {
    return res.status(400).json({ message: "make is missing" });
  }
  if (!model) {
    return res.status(400).json({ message: "model is missing" });
  }
  if (!mileage) {
    return res.status(400).json({ message: "mileage is missing" });
  }
  next();
}


function checkVinNumberValid(req, res, next) {
  const { vin } = req.body;
  const isValidVin = vinValidator.validate(vin);
  if (!isValidVin) {
    return res.status(400).json({ message: `vin ${vin} is invalid` });
  }
  next();
}

async function checkVinNumberUnique(req, res, next) {
  const { vin } = req.body;
  try {
    const existingCar = await Car.getByVin(vin);
    if (existingCar) {
      return res.status(400).json({ message: `vin ${vin} already exists` });
    }
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};
