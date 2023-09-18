import {  ApiItemTrated } from "./types.apiRertun";

export type ApiContextType = {
    data: ApiItemTrated[];
    setData: React.Dispatch<React.SetStateAction<ApiItemTrated[]>>;
    recentData: ApiItemTrated[];
    primaryNotice: ApiItemTrated[];
    setRecentData: React.Dispatch<React.SetStateAction<ApiItemTrated[]>>;
    storage: ApiItemTrated[];
    setStorage: React.Dispatch<React.SetStateAction<ApiItemTrated[]>>;
    renderization: boolean;
    setRenderization: React.Dispatch<React.SetStateAction<boolean>>
    
}