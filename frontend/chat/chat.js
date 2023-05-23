const form = document.getElementById('messageForm');
const token = localStorage.getItem('token')
form.addEventListener('submit',postMessage)

window.addEventListener('DOMContentLoaded', async () => {
    try{
        const response = await axios.get('http://localhost:3000/chat/get',
        {headers: {'Authorization': token}});
        console.log(response.data.chat)
    }
    catch(err){
        console.log(err)
    }
})

async function postMessage(e){
    try{
        e.preventDefault();
        const token = localStorage.getItem('token')
        const message = document.getElementById('message').value;
        const obj = {message}
        const response = await axios.post('http://localhost:3000/chat/send',obj,{headers:{'Authorization':token}})
        console.log(response)
    }
    catch(err){
        console.log(err)

    }
}