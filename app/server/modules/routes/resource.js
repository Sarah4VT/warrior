var models = require('../models');
var Resource = models.Resource;

module.exports = function(app) {
  // Return a list of matching resources
  app.get('/resources', function(req, res) {
    models.sequelize.sync().on('success', function() {
      Resource.findAll().success(function(resources) {
        res.json(resources);
      });
    });
  });
};
