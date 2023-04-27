import { FileNodes } from "../types"
import DisplayWrapper from "./DisplayChildren"

interface Props {
    data: FileNodes,
    inExpandables: (fileId: string) => boolean
    toggleExpandable: (fileId: string) => void
}

const Sidebar: React.FC<Props> = ({ data, inExpandables, toggleExpandable }) => (
    <div className="sidebar">
        <DisplayWrapper 
            data={data} 
            inExpandables={inExpandables} 
            toggleExpandable={toggleExpandable} 
        />
        
        {/* <pre>
            {JSON.stringify(data, null, 2)}
        </pre> */}
    </div>
)

export default Sidebar