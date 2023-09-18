import { useEffect, useState } from "react";
import { ApiContext } from "./apiContext";
import { ApiItemTrated } from "../../types/types.apiRertun";
import { apiResponse } from "../../services/apiResponsee";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function ApiProvider({ children}: { children: React.ReactNode}) {
    const [data, setData] = useState<ApiItemTrated[]>([]);
    const [recentData, setRecentData] = useState<ApiItemTrated[]>([]);
    const [primaryNotice, setPrimaryNotice] = useState<ApiItemTrated[]>([]);
    const [storage , setStorage] = useLocalStorage('favorites', []);
    const [renderization, setRenderization] = useState<boolean>(false);

    useEffect(() => {
        const api = async () => {
            const data = await apiResponse();
            setData(data);
            if(data.length !== 0) {
                const recentData = data.sort((a, b) => Number(a.data_publicacao) - Number(b.data_publicacao));
                const [primaryNotice, ...rest] = recentData;
                setRecentData(rest);
                setPrimaryNotice([primaryNotice]);
            }
        }
        api();
    }, [])
    const shared = {
        data,
        setData,
        recentData,
        primaryNotice,
        setRecentData,
        storage,
        setStorage,
        renderization,
        setRenderization
    }
  return (
    <ApiContext.Provider value={shared}>
        {children}
    </ApiContext.Provider>
  )
}
