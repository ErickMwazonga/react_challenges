import { Dispatch, SetStateAction, createContext } from "react";
import { FileNode } from "./types";

interface ContentContextProps {
    currentFile: FileNode | null,
    setCurrentFile: Dispatch<SetStateAction<FileNode | null>>
}

const ContentContext = createContext<ContentContextProps>({} as ContentContextProps)

export { ContentContext };
