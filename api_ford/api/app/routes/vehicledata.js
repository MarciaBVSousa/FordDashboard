const { vehicledataAPI } = require("../api");

const { wrapAsync, auth } = require("../infra");

module.exports = (app) => {
  app
    .route("/vehicledata")
    .get(wrapAsync(vehicledataAPI.list));

  app.route("/vehicledata/:vehicledataID")
    .get(wrapAsync(vehicledataAPI.findById));

  // Adicionado para funcionalidade de cadastro de vehiclesData
  app.route('/vehicledata/register')
    .post(wrapAsync(vehicledataAPI.register)); 

  app.route('/vehicledata/exists/:vin')
    .get(wrapAsync(vehicledataAPI.checkVinTaken));


};
