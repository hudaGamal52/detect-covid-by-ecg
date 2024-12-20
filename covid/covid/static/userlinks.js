function fetchUserDataAndCreateLinks() {
  fetch('/users')
    .then(response => response.json())
    .then(users => {
      const userList = document.getElementById("userList");

      if (users.length === 0) {
        const messageItem = document.createElement("li");
        messageItem.textContent = "There are no registered users.";
        userList.appendChild(messageItem);
      } else {
        users.forEach(user => {
          const listItem = document.createElement("li");
          const link = document.createElement("a");
          // Assuming user's name is stored in 'name' property
          link.textContent = user.name;
          // Assuming user's ID is stored in 'id' property
          link.href = `doctorfeedback.html?id=${user.id}`;
          listItem.appendChild(link);
          userList.appendChild(listItem);
        });
      }
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    });
}

// Call the function when the page is loaded
document.addEventListener("DOMContentLoaded", fetchUserDataAndCreateLinks);
