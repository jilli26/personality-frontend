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

  static register () {

  }

}


export default PersonalityApi
