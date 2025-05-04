async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  renderUsers(data);
}
fetchData();

const renderUsers = (users) => {
  const body = document.getElementsByTagName("tbody")[0];
  users.forEach((user, idx) => {
    const row = document.createElement("tr");
    row.innerHTML = `
         <td>${user.username}</td>
         <td>${user.email}</td>
         <td>${user.company.name}</td>
         <td>
            <table class="address-geo">
                <tr>
                    <td colspan="1">Latitude: </td> 
                    <td colspan="2">${user.address.geo.lat}</td> 
                </tr> 
                <tr>
                    <td colspan="1">Longitude: </td> 
                    <td colspan="2">${user.address.geo.lng}</td> 
                </tr> 
            </table>
         </td>
        `;
    if (idx % 2 != 0) {
      row.style.backgroundColor = "lightgray";
    }
    body.appendChild(row);
  });
};
