import axios from "axios";

const api=axios.create({
    baseURL:1 ? "https://reqres.in":"http://localhost:3000",
    headers:{
        responseType:"application/json"
    }
})

class Api{
    static getUsers(page=1){
        return api.get("/api/users",{
            params:{
                page
            }
        })
    }
}

export default Api