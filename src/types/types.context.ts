import { ApiItemTrated } from "./types.apiRertun";

export type ApiContextType = {
    data: ApiItemTrated[];
    setData: (data: ApiItemTrated[]) => void;
    recentData: ApiItemTrated[];
    primaryNotice: ApiItemTrated[];
}