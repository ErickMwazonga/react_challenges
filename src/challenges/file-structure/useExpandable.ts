import { useState } from 'react';

const useExpandable = () => {
    const [expandables, setExpandables] = useState<string[]>([])

    const inExpandables = (fileId: string) => {
        return expandables.includes(fileId)
    }

    const toggleExpandable = (fileId: string) => {
        if (!inExpandables(fileId)){
            setExpandables(prev => ([...prev, fileId]))
        } else {
            const updatedExpandables = expandables.filter(expandable => expandable !== fileId)
            setExpandables(updatedExpandables)
        }
    }

    return { expandables, inExpandables, toggleExpandable }
}

export default useExpandable;