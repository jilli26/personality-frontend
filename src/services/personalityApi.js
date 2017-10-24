class PersonalityApi {

  static login(userObj) {
    const data = JSON.stringify(userObj)
    return fetch('http://localhost:3000/api/v1/login', {
      method: "post",
      body: data,
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }

    })
      .then(res => res.json())
  }

  static signUp(user) {
    console.log(user);
    console.log("User JSON String: " + JSON.stringify(user))
    return fetch(`http://localhost:3000/api/v1/users`, {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    }).then(res => res.json())
  }

  static submitWritingSample(userObj) {

    return fetch(`http://localhost:3000/api/v1/insights`, {
      method: "post",
      body: JSON.stringify(userObj),
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json",
        "Authorization":`Bearer ${localStorage.getItem('personalityToken')}`
      }
    }).then(res => res.json())
  }

}


export default PersonalityApi
