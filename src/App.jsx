import {useGetUsersQuery} from "./services/users.js";
import {useEffect, useState} from "react";

function App() {
    const {data, error, isLoading} = useGetUsersQuery()
    const user = {name: '', email: '', gender: ''}

    if (data) {
        const result = data?.results[0];
        user.gender = result?.gender
        user.name = `${result?.name?.title} ${result?.name?.first} ${result?.name?.last}`
        user.email = result?.email
    }

    console.log(user)


    return (
        <div>
            <h1>{user.name}</h1>
            <a href={`mailto:${user.email}`}>{user.email}</a>
        </div>
    )
}

export default App
