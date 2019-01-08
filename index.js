window.onload = function () {
    let el = document.getElementById("editor");
    el.placeholder = "click code here...";
    let myCodeMirror = CodeMirror.fromTextArea(el, {
        mode: "python",
        theme: "leetcode",
        keyMap: "sublime",
        lineNumbers: true,
        smartIndent: true,
        lineWrapping: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
        foldGutter: true,
        matchBrackets: true,
        autoCloseBrackets: true,
        styleActiveLine: true
    });
    myCodeMirror.on("keypress", function() {
        myCodeMirror.showHint(); // 注意，注释了show-hint.js第131行的代码（阻止了代码补全，同时提供智能提示）
    });
};