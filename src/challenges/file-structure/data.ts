import { v4 as uuid } from 'uuid';
import { FileNodes } from './types';

const data: FileNodes = [
    {
        "id": uuid(),
        "fileName": "src",
        "children": [
            {
                "id": uuid(),
                "fileName": "components",
                "children": [
                    {
                        "id": uuid(),
                        "fileName": "App",
                        "children": [
                            {
                                "id": uuid(),
                                "fileName": "App.js",
                                "children": []
                            },
                            {
                                "id": uuid(),
                                "fileName": "index.js",
                                "children": []
                            },
                        ]
                    },
                    {
                        "id": uuid(),
                        "fileName": "Header",
                        "children": [
                            {
                                "id": uuid(),
                                "fileName": "Header.js",
                                "children": []
                            },
                            {
                                "id": uuid(),
                                "fileName": "index.js",
                                "children": []
                            },
                        ]
                    },
                    {
                        "id": uuid(),
                        "fileName": "Widget",
                        "children": [
                            {
                                "id": uuid(),
                                "fileName": "App.js",
                                "children": []
                            },
                            {
                                "id": uuid(),
                                "fileName": "Layout.js",
                                "children": []
                            },
                            {
                                "id": uuid(),
                                "fileName": "index.js",
                                "children": []
                            },
                        ]
                    },
                ]
            },
            {
                "id": uuid(),
                "fileName": "helpers",
                "children": [
                    {
                        "id": uuid(),
                        "fileName": "animation.js",
                        "children": []
                    },
                    {
                        "id": uuid(),
                        "fileName": "auth.js",
                        "children": []
                    },
                ]
            },
            {
                "id": uuid(),
                "fileName": "hooks",
                "children": [
                    {
                        "id": uuid(),
                        "fileName": "useBeep.js",
                        "children": []
                    },
                    {
                        "id": uuid(),
                        "fileName": "useToggle.js",
                        "children": []
                    },
                ]
            },
            {
                "id": uuid(),
                "fileName": "constants.js",
                "children": []
            },
            {
                "id": uuid(),
                "fileName": "utils.js",
                "children": []
            },
        ]
    },
    {
        "id": uuid(),
        "fileName": "package.json",
        "content": `/* Package json file is messy :-) */`,
        "children": []
    },
    {
        "id": uuid(),
        "fileName": "README.md",
        "content": `# Hello World! This is an example project, meant to show how files are structured.`,
        "children": []
    },
]

export default data;