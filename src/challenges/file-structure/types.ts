export interface FileNode {
    id: string;
    fileName: string;
    content?: string;
    children: FileNode[];
}

export type FileNodes = FileNode[];