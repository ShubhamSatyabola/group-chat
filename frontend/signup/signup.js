const form = document.getElementById('addform');


form.addEventListener('submit', signup)

async function signup(e){
    try{
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const number = document.getElementById('number').value;
        const password = document.getElementById('password').value;

        const obj = {name, email, number, password};
        console.log(obj)
    }
    catch(err){
        console.log(err)
    }
    

}