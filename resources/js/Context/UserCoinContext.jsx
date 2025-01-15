import {createContext, useEffect, useState} from "react";

const UserCoinContext = createContext();

export const UserCoinProvider = ({children}) => {
    const [coin, setCoin] = useState([]);

    useEffect(() => {
        setUserCoin();
    }, []);
    const setUserCoin = () => {
        setCoin(
            localStorage.getItem("coin")
                ? JSON.parse(localStorage.getItem("coin"))
                : 0
        );
    };
    const updateUserCoin = (coin) => {

        localStorage.setItem(
            "coin",
            JSON.stringify(coin)
        );
        setUserCoin();
    };

    return (
        <UserCoinContext.Provider value={{coin, updateUserCoin}}>
            {children}
        </UserCoinContext.Provider>
    );
};
export default UserCoinContext;
