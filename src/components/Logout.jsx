import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Logout({user, setUser}) {
    const navigate = useNavigate()
    if(!user){
        navigate('/')
    }
    
    useEffect(()=>{
        fetch('http://localhost:3030/users/logout', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Authorization": user,
            },})
        .then(response => {
            console.log(response.status)
            console.log(response.headers.get("content-type"));
            if (response.status === 204) {
                return;
            }
        }).finally(()=>{
            setUser('')
            navigate('/')
        });
    }, []);

}