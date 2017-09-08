var apiKey = require('./../.env').apiKey;

Repos = function() {

}
Repos.prototype.getRepos = function() {
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response) {
    console.log(response);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};

exports.reposModule = Repos
