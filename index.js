console.log('before');
// getUser(1, (user) => {
//    getRepository(user.gitHubUsername, (repos) =>{
//     console.log('Repos', repos)
//    });
// });



const p = getUser(1);
p.then(user => console.log(user));

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
            callback(['commit'])
        }, 2000)
    });
};