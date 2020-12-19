const { XMLHttpRequest } = require('xmlhttprequest'); // Foi necessário instalar para que o Node não tomasse erro de CORS

const { ajax } = require('rxjs/ajax');
const { map, concatAll } = require('rxjs/operators');

const githubUser = 'DouglasAmarelo';

const fetchDataFromGitHub = ajax({
  createXHR: () => new XMLHttpRequest(),
  url: `https://api.github.com/users/${githubUser}/repos`,
});

fetchDataFromGitHub
  .pipe(
    map(resp => JSON.parse(resp.xhr.responseText)),
    concatAll(),
    map(repo => repo.full_name)
  )
  .subscribe(repoName => console.log(`Repo: ${repoName}`));
