import { useEffect, useState } from "react";
import useAuth from "./useAuth";


const useAdmin = () => {
    const { user } = useAuth();
    const [admin, setAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/user/admin/${user?.email}`, {
                method: 'GET',
                headers: {
                    authorization: `BEAREER ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data.admin);
                    setAdmin(data.admin)
                    setIsAdminLoading(false)
                })
        }
    }, [user])

    return [admin, isAdminLoading]
};

export default useAdmin;