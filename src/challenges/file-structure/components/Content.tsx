import { FileNode } from "../types"

interface Props {
    currentFile: FileNode | null,
}

const Content: React.FC<Props> = ({ currentFile }) => {
    if (!currentFile) {
        return (
            <div className="content">
                <p>Select a file to view it's content</p>
            </div>
        )
    }
    
    const hasContent = currentFile.content
    const emptyFileContent = <p>The file {currentFile?.fileName} does not have any content</p>
    
    return (
        <div className="content">
            {hasContent ? <pre>{currentFile.content}</pre> : emptyFileContent}
        </div>
    )
}

export default Content