import { useState } from 'react'
import { ContentContext } from './ContentContext'
import Content from './components/Content'
import Sidebar from './components/Sidebar'
import useExpandable from './useExpandable'
import { FileNode } from './types'
import data from './data'
import './Main.scss'

const FileStructure = () => {
    const [currentFile, setCurrentFile] = useState<FileNode | null>(null)
    const { inExpandables, toggleExpandable } = useExpandable()
    
    return (
        <ContentContext.Provider value={{ currentFile, setCurrentFile }}>
            <div className='file-structure'>
                <Sidebar 
                    data={data} 
                    inExpandables={inExpandables} 
                    toggleExpandable={toggleExpandable} 
                />
                <Content currentFile={currentFile} />
            </div>
        </ContentContext.Provider>
    )
}

export default FileStructure