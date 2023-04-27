import { useContext } from "react";
import { FileNode } from "../types"
import { RxFile } from "react-icons/rx";
import { ContentContext } from "../ContentContext";

interface Props {
    node: FileNode,
}

const File: React.FC<Props> = ({ node }) => {
    const { currentFile, setCurrentFile } = useContext(ContentContext)
    const { id: fileId, fileName} = node;

    const activeCls = currentFile?.id === fileId ? 'active' : ''

    return (
        <li 
            key={fileId} 
            className={`file ${activeCls}`} 
            onClick={() => setCurrentFile(node)}
        >
            <RxFile className="icon"/>
            <span className="fileName">{fileName}</span>
        </li>
    )
}

export default File