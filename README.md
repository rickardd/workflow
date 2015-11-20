# workflow
Set of snippets, packages, files and best practices. This will help to quickly get started with new projects with a good workflow.

### About this set up.

This poject is tested on
- node v.4.1.2
- npm v.2.14.4
- grunt v.0.4.5

---------------------------------

### KSS

``` grunt styleguide ```

KSS A.K.A living styleguide.

In order to make grunt-kss v.2.0.0 to work no older node version than 4.1.2 can be istalled. Neither a newer version of npm 2.14.4.

The tested node version v.4.1.2 can be found here. https://nodejs.org/download/release/v4.1.2/

this version of kss have failed on later installation of node and npm.

In order to make the homepage.md or styleguide.md to work it has to be runned on a server and the .md file has to be located in the source directory. In this case sass/.


-----------------------------------

### JS DOCS

Generates a javascript documentation.

``` grunt jsdoc ```


-----------------------------------

### SASS (lib sass)

Fastest SASS compiler. Generats source maps too.

``` grunt sass ```


-----------------------------------

### Pagespeed (google)

Parsing through project and give google performance points.

``` grunt pagespeed ```


-----------------------------------

### Pagespeed (YAHOO)

Parsing through project and give yahoo's performance points.

``` grunt yslow ```


-----------------------------------

### Pagespeed (YAHOO)

Parsing through project and give yahoo's performance points.

``` grunt yslow ```


-----------------------------------

### JS HINT

A great javascript linter.

``` grunt ```

``` grunt jshint```


-----------------------------------

### Tiny PNG

Not tested yet

``` grunt ... ```











---------------------------------------------------------------------------

# Presentation

### Intro
  How mush time should I spend on work flow. 3h on your workflow may save you and others month of work.
  When and what should I improve?

### Front end deveoper - The hard part

  Everything is global so...
  - How do I know my code doesnt break any of the 200 urls with different options?
  - What classes can I use?
  - What classes should I use?
  - How are the classes related?
  - How to name things so it makes sense?

### What we will cover





### Checklist

- bash_shell start up script
  + cd to dir
  + git status
  + start ruby server
  + open sublime
  + open browser

- bash ln to dir

- Grunt: Packages
  + lib_sass
  + uncss
  + auto_prefixer
  + live_reload
  + watch
  + build
  + more cool packages
  + auto comment js code
  + javascript documentations: https://github.com/krampstudio/grunt-jsdoc
  + living styleguide. kss.

- live_reload:
  + plain css vs compiled sass
  + Responsive. Differen sized windows.

- Grunt: New view
  + create html view
  + create backbone view
  + option create backbone model
  + option create backbone collection

- Sublime Packages
  + ToDo list. Use this list for the presentation.
  + DockBlocker macro
  + -
  + -

- How to share sublime packages

- Sublime snippets
  + prefix all snippets with +
  + Scope snippets: use ctrl+alt+shift+p in desired file to se the scope key in bottom line.
  + Get overview of all properties with tab-index or use html comment to pressent them.
  + bv: backbone view
  + bm: backbone model
  + bc: backbone collection
  + mv: marionette view
  + mc: marionette collection view
  + mcomp: marionette composit view
  + ml: marionette layout view
  + mv: marionette ...
  + mv: marionette ...
  + mv-markup: marionette layout view
  + ml-markup: marionette layout view
  + echart-bar-chart: bar chart object
  + echart-line-chart: line chart object
  + button
  + icon
  + icon-and-text
  + table
  + module

- Snippet: how to share between projects

- Sublime magic multi selection examples
  + -
  + -
  + -
  + -

- Sublime: Tips and triks
  + macros

- Emmet
  + html
  + css

- styleguides alternative

- google inspector
  + source map
  + blackboxing
  + color coded console
  + all tips from blogs.
  + PUT/GET/POST with firefox


- git
  + rebase: git rebase origin/master
  + mtool: git mergetool
  + sublime-package: blame, changes, logs, diff...


- How to not break css
  + visual comparison tool. what views have changed.

- Best practice
  + css: mark 'ToDo' on things that need to be done, Styleguid or refactor.


## Summary

  - Snippets and autocreated files helps the naming convension.
