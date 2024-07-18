// Add your code here
const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
};

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(formData),
};

fetch("http://localhost:3000/dogs", configurationObject)
    .then(response => response.json())
    .then(object => console.log(object))
    .catch(error => {
        alert("An error occurred!");
        console.log(error.message);
    });
document.getElementById("dog-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
        dogName: document.getElementById("dogName").value,
        dogBreed: document.getElementById("dogBreed").value,
    };

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    };

    fetch("http://localhost:3000/dogs", configurationObject)
        .then(response => response.json())
        .then(object => console.log(object))
        .catch(error => {
            alert("An error occurred!");
            console.log(error.message);
        });
});
function submitData(name, email) {
    const formData = {
        name: name,
        email: email,
    };

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then(response => response.json())
        .then(object => {
            document.body.innerHTML = object.id;
        })
        .catch(error => {
            document.body.innerHTML = error.message;
        });
}
submitData("John Doe", "john.doe@example.com");
