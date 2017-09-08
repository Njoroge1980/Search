var Repos = require('./../js/search.js').reposModule;

$(document).ready(function() {
  var newRepo = new Repos
  $('#btn').click(function() {
    var name = $('#name')
    // return (name)
    newRepo.getRepos();
  });
});
