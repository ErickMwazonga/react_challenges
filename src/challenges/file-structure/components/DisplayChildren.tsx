import { Fragment } from "react"
import { FileNode, FileNodes } from "../types"
import Folder from "./Folder";
import File from "./File";

interface Props {
    data: FileNodes,
    inExpandables: (fileId: string) => boolean
    toggleExpandable: (fileId: string) => void
}

export const DisplayWrapper: React.FC<Props> = ({ 
    data, inExpandables, toggleExpandable 
}) => (
    <Fragment>
        {data.map((node: FileNode) => (
            <Fragment key={node.id}>
                {node.children.length === 0 
                    ? <File node={node} /> 
                    : <Folder 
                        node={node} 
                        inExpandables={inExpandables} 
                        toggleExpandable={toggleExpandable} 
                    />
                }
            </Fragment>
        ))}
    </Fragment>
)

export default DisplayWrapper;
