const getCurrentUser = async () => {
    const current_token = localStorage.getItem("access_token");
    const response = await fetch(
      new Request("https://localhost:5000/api/users/current_user", {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer ${JSON.parse(current_token)}`,
        }),
      })
    )
      .then((res) => res.json())
      .catch((error) => console.log(error));
    return response;
  };
  
  export default getCurrentUser;
  