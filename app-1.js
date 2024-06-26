// The task is to create a webpage that displays random user data, including 
//! the user's title, first name, last name, email, phone, and thumbnail image, within a framed container.

const button = document.querySelector("button")

button.addEventListener("click", () => {
    const getUser = async () =>{
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    console.log(data);
    randomUser(data.results)


}

getUser()
})



const randomUser = (users) => {
    const userContainer = document.querySelector(".container")
    console.log(users);

    userContainer.innerHTML = ""

    users.forEach((user)=>{
        console.log(user);
        console.log(user.name);
        console.log(user.name.title);

        userContainer.innerHTML += `
        <div class="card">

            <img src="${user.picture.large}" alt="User Image" class="user-image">
            
            <ul>
                <li>User: ${user.name.title} ${user.name.first} ${user.name.last}</li>
                <li>e-mail: ${user.email}</li>
                <li>Phone: ${user.phone}</li>
            </ul>
            
            <img src="${user.picture.thumbnail}" alt="thumbnail image">

        </div>        
        
        `
    })
}

randomUser()