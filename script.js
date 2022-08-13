const h2 = document.createElement("h2");
h2.textContent = "This content added by javascript";
document.querySelector("body").appendChild(h2);

const h3 = document.createElement("h3");
h3.textContent = "And I think Dyes is just the man for the job";
document.querySelector("body").appendChild(h3);

let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "<strong>Hi there!</strong> You are now an alien.";
document.querySelector("body").appendChild(div);
