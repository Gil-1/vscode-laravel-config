{
    // Executable path
    "php.executablePath": "php", // or "c:/php/php.exe" see https://code.visualstudio.com/docs/languages/php
    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
    // Languages config
    "[css]": {
        "editor.formatOnSave": true,
        "editor.tabSize": 2,
    },
    "[scss]": {
        "editor.formatOnSave": true,
        "editor.tabSize": 2,
    },
    "[html]": {
        "editor.tabSize": 2,
    },
    "[javascript]": {
        "editor.formatOnSave": false,
        "editor.tabSize": 2,
    },
    "[php]": {
        "editor.formatOnSave": true,
        "editor.tabSize": 4,
    },
    "[vue]": {
        "editor.formatOnSave": false,
        "editor.tabSize": 2,
    },
    // Global config
    "blade.format.enable": true,
    "beautify.language": {
        "js": {
            "type": [
                "javascript",
                "json"
            ],
            "filename": [
                ".jshintrc",
                ".jsbeautify"
            ]
        },
        "css": [
            "css",
            "scss"
        ],
        "html": [
            "blade",
            "htm",
            "html",
            "vue"
        ]
    },
    "editor.cursorBlinking": "phase",
    "editor.lineHeight": 33,
    "editor.fontSize": 15,
    "editor.roundedSelection": false,
    "explorer.openEditors.visible": 0,
    "files.encoding": "utf8",
    "files.insertFinalNewline": true,
    "files.trimTrailingWhitespace": true,
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        "javascript",
        {"language": "html", "autoFix": true},
        {"language": "vue", "autoFix": true}],
    "javascript.validate.enable": false,
    "phpfmt.psr2": true,
    "workbench.colorTheme": "Material Theme High Contrast",
    "workbench.iconTheme": "material-icon-theme",
    "window.titleBarStyle": "custom"
}
