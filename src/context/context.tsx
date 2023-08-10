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
}

export const AppContext = createContext<AppContextType>({
    userId: "",
    setUserId: () => {},
    email: "",
    setEmail: () => {},
    isCompany: false,
    setIsCompany: () => {},
    uniqUserId: "",
    setUniqUserId: () => {}
});

export const AppProvider = ({children}: {children: ReactNode}) => {

    const [userId, setUserId] = useState<string>("")
    const [email, setEmail] = useState<string>("");
    const [uniqUserId, setUniqUserId] = useState("");
    const [isCompany, setIsCompany] = useState<boolean>(false);

    const contextValue: AppContextType = {
        userId,
        setUserId,
        email,
        setEmail,
        isCompany,
        setIsCompany,
        uniqUserId,
        setUniqUserId
    };

    return (
        <AppContext.Provider
            value={contextValue}
        >
            {children}
        </AppContext.Provider>
    )
}