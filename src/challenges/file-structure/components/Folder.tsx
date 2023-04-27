import { useContext } from "react";
import { FileNode } from "../types"
import DisplayWrapper from "./DisplayChildren"
import { RxCaretDown, RxCaretRight } from "react-icons/rx";
import { ContentContext } from "../ContentContext";

interface Props {
    node: FileNode,
    inExpandables: (fileId: string) => boolean
    toggleExpandable: (fileId: string) => void
}

const Folder: React.FC<Props> = ({ node, inExpandables, toggleExpandable }) => {
    const { currentFile, setCurrentFile } = useContext(ContentContext)
    
    const { id, fileName, children } = node
    const hasChildren = children.length > 0

    const FileIcon = inExpandables(id) ? <RxCaretDown className="icon"/> : <RxCaretRight className="icon"/>
    const activeCls = currentFile?.id === id ? 'active' : ''

    const handleFolderClick = (node: FileNode) => {
        setCurrentFile(node)
        toggleExpandable(id)
    } 

    return (
        <li key={id} className='folder'>
            <span className={`header ${activeCls}`} onClick={() => handleFolderClick(node)}>
                {FileIcon}
                <span className="title">
                    {fileName}
                </span>
            </span>

            {!inExpandables(id) && hasChildren && (
                <ul>
                    <DisplayWrapper 
                        data={children}
                        inExpandables={inExpandables} 
                        toggleExpandable={toggleExpandable} 
                    />
                </ul>
            )}
        </li>
    )
}

export default Folder