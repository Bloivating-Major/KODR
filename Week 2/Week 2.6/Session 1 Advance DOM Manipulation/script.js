let peoples = document.querySelector('.peoples');
let input = document.querySelector('.search input');

const data = [
  {
    name: "Harsh",
    src: "https://i.pinimg.com/736x/60/5b/9b/605b9b86a82dd0147ed8aa612381326f.jpg",
  },
  {
    name: "Harshit",
    src: "https://i.pinimg.com/736x/1a/6b/a2/1a6ba23c1b17b1ee7db84c0370c04e7f.jpg",
  },
  {
    name: "Harshita",
    src: "https://i.pinimg.com/736x/84/73/c8/8473c89e310c69fd9bfc5d466862eaa1.jpg",
  },
  {
    name: "Harshu",
    src: "https://i.pinimg.com/736x/09/95/78/09957834ac22964a6ae2e00eea371818.jpg",
  },
  {
    name: "Hitesh",
    src: "https://i.pinimg.com/736x/18/6c/2e/186c2e67f8439b005116769fad461a6b.jpg",
  },
  {
    name: "Harkirat",
    src: "https://i.pinimg.com/736x/6e/a6/6f/6ea66fc510c5b2da5017614788c8738d.jpg",
  },
  {
    name: "Harish",
    src: "https://i.pinimg.com/736x/f0/06/bd/f006bd3543814495d46b8f5f2c9b6318.jpg",
  },
];

const renderUsers = (users) => {
  let person = '';
  users.forEach((user) => {
    person += `
      <div class="userCard">
        <img src="${user.src}" alt="${user.name}" />
        <h2>${user.name}</h2>
      </div>
    `;
  });
  peoples.innerHTML = person;
};

// Initial render of all users
renderUsers(data);

input.addEventListener('input', () => {
  const searchValue = input.value.trim().toLowerCase(); // Case-insensitive search
  
  const matching = data.filter((user) =>
     user.name.toLowerCase().startsWith(searchValue)
  );

  // If no input, show all users
  if (searchValue === '') {
    renderUsers(data);
  } else {
    renderUsers(matching);
  }
});
