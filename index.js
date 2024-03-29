// console.log('before');
// // getUser(1, (user) => {
// //    getRepository(user.gitHubUsername, (repos) =>{
// //     console.log('Repos', repos)
// //    });
// // });


// // getUser(1)
// // .then(user => getRepository(user.gitHubUsername))
// // .then(repos => getCommits(repos[0]))
// // .then(commits => console.log('Commits', commits))
// // .catch(err => console.log('Error', err.message))


// // Async and Await Approach
// async function displayCommits() {
//     try{
//         const user = await getUser(1);
//     const repos = await getRepository(user.gitHubUsername);
//     const commits = await getCommits(repos[0]);
//     console.log(commits);
//     }
//     catch{
//         console.log('Error', err.message);
//     }
    
// };

// displayCommits();

// console.log('after');


// function getUser(id){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log('Reading the user from database');
//             resolve({id:id, gitHubUsername:'33TChaubey'});
//         }, 2000);
//     })
// }

// function getRepository(username, callback){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log('Reading the repository')
//             reject(new Error('Could not get the repos'));
//         }, 2000);
//     });
      
// };

// function getCommits(repo, callback){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log('Calling Github API ...');
//             resolve(['commit'])
//         }, 2000)
//     });
// };

async function notifyCustomer(){


    const customer = await getCustomer(1);
    console.log('Customer: ', customer);
    if  (customer.isGold){
        const movies = await getTopMoview();
        console.log('Movies: ', movies);
        await sendEmail(customer.email, movies);
        console.log('Email sent...');
    }
}
notifyCustomer();

function getCustomer(id){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve({
                id:1,
                name:"Trilokinath Chaubey",
                email:"email.com",
                isGold: true
            });
        },4000);
    })
    
}

function getTopMoview(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(['movie1', 'movie2'])
        },4000);
    });
    
}


function sendEmail(email, movies){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve();
        },4000);
    });
    
}