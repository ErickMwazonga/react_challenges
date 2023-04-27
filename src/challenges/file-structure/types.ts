export interface FileNode {
    id: string;
    fileName: string;
    children: FileNode[];
}

export type FileNodes = FileNode[];