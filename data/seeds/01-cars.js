// STRETCH
exports.seed = async function (knex) {
    await knex("cars").truncate();
    await knex("cars").insert([
      { vin: "1HGBH41JXMN109186", make: "Hyundai", model: "Accent", mileage: 2000 },
      { vin: "2T3BK4DV2BW235789", make: "Toyota", model: "Camry", mileage: 3000 },
      { vin: "3YVHZ8DH4FM103672", make: "Ford", model: "Explorer", mileage: 4000},
    ]);
  };
  