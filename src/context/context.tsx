import { ReactNode, createContext, useState, Dispatch, SetStateAction } from "react";

export interface AppContextType {
    userId: string;
    setUserId: Dispatch<SetStateAction<string>>;
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    isCompany: boolean;
    setIsCompany: Dispatch<SetStateAction<boolean>>;
    uniqUserId: string,
    setUniqUserId: Dispatch<SetStateAction<string>>;
    isLogged: boolean,
    setIsLogged:  Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType>({
    userId: "",
    setUserId: () => {},
    email: "",
    setEmail: () => {},
    isCompany: false,
    setIsCompany: () => {},
    uniqUserId: "",
    setUniqUserId: () => {},
    isLogged: false,
    setIsLogged: () => {}
});

export const AppProvider = ({children}: {children: ReactNode}) => {

    const [userId, setUserId] = useState<string>("")
    const [email, setEmail] = useState<string>("");
    const [uniqUserId, setUniqUserId] = useState("");
    const [isCompany, setIsCompany] = useState<boolean>(false);
    const [isLogged, setIsLogged] = useState<boolean>(false);

    const contextValue: AppContextType = {
        userId,
        setUserId,
        email,
        setEmail,
        isCompany,
        setIsCompany,
        uniqUserId,
        setUniqUserId,
        isLogged,
        setIsLogged
    };

    return (
        <AppContext.Provider
            value={contextValue}
        >
            {children}
        </AppContext.Provider>
    )
}