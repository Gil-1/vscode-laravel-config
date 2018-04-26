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
        "editor.formatOnSave": true,
        "editor.tabSize": 2,
    },
    "[php]": {
        "editor.formatOnSave": true,
        "editor.tabSize": 4,
    },
    "[vue]": {
        "editor.formatOnSave": true,
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
    "files.insertFinalNewline": true,
    "files.trimTrailingWhitespace": true,
    "jshint.options": {
        "asi" : true,
        "esversion": 6
    },
    "phpfmt.psr2": true,
    "workbench.colorTheme": "Material Theme High Contrast",
    "workbench.iconTheme": "material-icon-theme",
    "workbench.colorCustomizations": {
        "activityBarBadge.background": "#00BCD4",
        "list.activeSelectionForeground": "#00BCD4",
        "list.inactiveSelectionForeground": "#00BCD4",
        "list.highlightForeground": "#00BCD4",
        "scrollbarSlider.activeBackground": "#00BCD450",
        "editorSuggestWidget.highlightForeground": "#00BCD4",
        "textLink.foreground": "#00BCD4",
        "progressBar.background": "#00BCD4",
        "pickerGroup.foreground": "#00BCD4",
        "tab.activeBorder": "#00BCD4",
        "notificationLink.foreground": "#00BCD4"
    }
}
