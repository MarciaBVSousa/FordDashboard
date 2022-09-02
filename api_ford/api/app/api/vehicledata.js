const { VehicledataDao } = require("../infra");

const api = {};


api.list = async (req, res) => {
  let { valor } = req.query;
  valor = valor || "";
  console.log(`find vehicle data ${valor}`);
  const vehicledata = await new VehicledataDao(req.db).listAll(valor);
  const result = { vehicleData: vehicledata };
  res.json(result);
};

api.findById = async (req, res) => {
  const { vehicledataID } = req.params;
  console.log("####################################");
  console.log(`find vehicle data by ID ${vehicledataID}`);
  const vehicledata = await new VehicledataDao(req.db).findById(vehicledataID);
  if (vehicledata) {
    res.json(vehicledata);
  } else {
    res.status(404).json({ message: "vehicle data does not exist" });
  }
};

//Adicionado para funcionalidade de cadastro
api.register = async (req, res) => {
  const vehicleData = req.body;
  const vehicleId = await new VehicledataDao(req.db).add(vehicleData);
  res.status(204).end();
};

api.checkVinTaken = async (req, res) => {
  const { vin } = req.params;
  const vehicleData = await new VehicledataDao(req.db).findByVin(vin);
  res.json(!!vehicleData);
};

module.exports = api;
