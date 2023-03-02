// const url = "https://jsonplaceholder.typicode.com/users";

// const fetchUsers = () => {
//   return fetch(url, {
//     method: "GET",
//   })
//     .then((response) => response.json())
//     .catch((err) => {
//       throw err;
//     });
// };

const url = "https://jsonplaceholder.typicode.com/users";

const fetchUsers = () => {
  return fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
};

export default fetchUsers;
