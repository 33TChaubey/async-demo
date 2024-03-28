console.log('before');
getUser(1, (user) => {
   getRepository(user.gitHubUsername, (repos) =>{
    console.log('Repos', repos)
   });
});
console.log('after');

function getUser(id, callback){
    setTimeout(()=>{
        console.log('Reading the user from database');
        callback({id:id, gitHubUsername:'33TChaubey'});
    }, 2000);

}

function getRepository(username, callback){
    setTimeout(()=>{
        console.log('Reading the repository')
        callback (['repo1','repo2','repo3'])
    });  
};