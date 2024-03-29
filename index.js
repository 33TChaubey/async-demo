console.log('before');
// getUser(1, (user) => {
//    getRepository(user.gitHubUsername, (repos) =>{
//     console.log('Repos', repos)
//    });
// });


getUser(1)
.then(user => getRepository(user.gitHubUsername))
.then(repos => getCommits(repos[0]))
.then(commits => console.log('Commits', commits))
.catch(err => console.log('Error', err.message))


// Async and Await Approach
const user = await getUser(1);
const repos = await getRepository(user.gitHubUsername);
const commits = await getCommits(repos[0]);
console.log(commits);

console.log('after');


function getUser(id){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('Reading the user from database');
            resolve({id:id, gitHubUsername:'33TChaubey'});
        }, 2000);
    })
}

function getRepository(username, callback){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('Reading the repository')
            resolve (['repo1','repo2','repo3'])
        }, 2000);
    });
      
};

function getCommits(repo, callback){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('Calling Github API ...');
            resolve(['commit'])
        }, 2000)
    });
};