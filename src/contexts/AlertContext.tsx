import { createContext, useState } from "react";
import { AlertType } from "../@types/alert";

interface IAlertProviderProps {
    children: React.ReactNode
}

interface IAlertContextData {
    alert: AlertType | null,
    setAlert: (alert: AlertType) => void,
    closeAlert: () => void
}


export const AlertContext = createContext<IAlertContextData>({} as IAlertContextData);

export const AlertProvider: React.FC<IAlertProviderProps> = ({ children } : IAlertProviderProps) => {
    const [alert, setAlert] = useState<AlertType | null>(null)


    function closeAlert()
    {
        setAlert(null)
    }
    
    return (
        <AlertContext.Provider value={{
            alert,
            setAlert, 
            closeAlert           
        }}>
            {children}
        </AlertContext.Provider>
    )
}