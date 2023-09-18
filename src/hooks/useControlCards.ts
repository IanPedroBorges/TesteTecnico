import { useContext, useEffect, useState } from "react"
import { ApiContext } from "../context/apicontext/apiContext";
import { ApiItemTrated } from "../types/types.apiRertun";

export const useControlCards = () => {
    const [controlCards, setControlCards] = useState(0)
    const { data, setRecentData, storage, setStorage, primaryNotice } = useContext(ApiContext);
    useEffect(() => {
        switch (controlCards) {
            case 0:
                setRecentData(data.sort((a, b) => Number(a.data_publicacao) - Number(b.data_publicacao)).filter((item) => item !== primaryNotice[0]))
                break;
            case 1:
                setRecentData(data.filter((item) => item.tipo === 'Release'))
                break;
            case 2:
                setRecentData(data.filter((item) => item.tipo === 'Notícia'))
                break;
            case 3:
                setRecentData(storage)
                break;
            default:
                break;
        }
    }, [controlCards])

    const storageControlVerification = (item: ApiItemTrated) => {
        storage.includes(item) ? setStorage(storage.filter((itemStorage) => itemStorage !== item)) : setStorage([...storage, item])
    }

    return { controlCards, setControlCards, storageControlVerification }
}