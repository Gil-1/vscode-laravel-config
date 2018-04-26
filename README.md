# vscode-laravel-config
The goal is to provide a good config to start using Laravel.
That means correct settings for PHP, Laravel, Javascript, CSS, HTML, SCSS, VUE

This is a first draft so if you have some ideas how to improve it, please PR

# Installation of Extensions
To make the config work you will need to first install all extensions I use.
Personnal note, generate all extensions installed : code --list-extensions | xargs -L 1 echo code --install-extension
As of right now you can execute this command in terminal :
code --install-extension christian-kohler.npm-intellisense
code --install-extension cmstead.jsrefactor
code --install-extension DavidAnson.vscode-markdownlint
code --install-extension dbaeumer.jshint
code --install-extension dbaeumer.vscode-eslint
code --install-extension donjayamanne.githistory
code --install-extension dzannotti.vscode-babel-coloring
code --install-extension eg2.vscode-npm-script
code --install-extension emmanuelbeziat.vscode-great-icons
code --install-extension Equinusocio.vsc-material-theme
code --install-extension felixfbecker.php-debug
code --install-extension felixfbecker.php-intellisense
code --install-extension HookyQR.beautify
code --install-extension joelday.docthis
code --install-extension kokororin.vscode-phpfmt
code --install-extension mikestead.dotenv
code --install-extension neilbrayfield.php-docblocker
code --install-extension onecentlin.laravel-blade
code --install-extension onecentlin.laravel5-snippets
code --install-extension PKief.material-icon-theme
code --install-extension robinbentley.sass-indented
code --install-extension ryannaddy.laravel-artisan
code --install-extension xabikos.JavaScriptSnippets
code --install-extension Zignd.html-css-class-completion

# User Settings
Then copy paste the content of the user settings and set the corrects executable path at the beggining of the file

# Thanks
Benny (https://stackoverflow.com/users/2243665/benny) for the line to generate the extension list :)
