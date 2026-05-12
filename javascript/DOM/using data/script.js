const userCard = document.getElementById("userCard");
//const userId = userCard.getAttribute("data-user-id");
//const userRole = userCard.getAttribute("data-user-role");
//console.log(userRole);
//console.log(userId);

//modifying
userCard.setAttribute("data-user-id", "145");
userCard.setAttribute("data-user-position", "ENG");
console.log(userCard);

const userRole2 = userCard.dataset.userRole;
const userId2 = userCard.dataset.userId;
console.log(userId2);
