import { FileNode } from "../types"

interface Props {
    currentFile: FileNode | null,
}

const Content: React.FC<Props> = ({ currentFile }) => {
    const noContent = <p>Select a file to view content</p>
    
    return (
        <div className="content">
            {currentFile ? <p>Content for {currentFile.fileName}</p> : noContent}
        </div>
    )
}

export default Content