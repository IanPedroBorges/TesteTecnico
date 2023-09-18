import { useEffect, useState } from "react";
import { ApiContext } from "./apiContext";
import { ApiItemTrated } from "../../types/types.apiRertun";
import { apiResponse } from "../../components/services/apiResponsee";

export default function ApiProvider({ children}: { children: React.ReactNode}) {
    const [data, setData] = useState<ApiItemTrated[]>([]);

    useEffect(() => {
        const api = async () => {
            const data = await apiResponse();
            setData(data);
        }
        api();
    }, [])
    const shared = {
        data,
        setData,
    }
  return (
    <ApiContext.Provider value={shared}>
        {children}
    </ApiContext.Provider>
  )
}
