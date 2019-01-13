window.onload = function () {
    var el = document.getElementById("editor");
    // var initValue = "class Solution:\n\tdef func:\n\t\tpass";
	var version = "# version: Python3\n\n";
	var codeAreaTip = "# please edit your code here:\n";
	var codeStart = "# code start\n\n";
	var codeEnd = "# code end\n\n";
	var codeTip = "'''\nThis function is the entry of this program and\nit must be return your answer of current question.\n'''\n";
	var code = "def solution():\n\tpass";
    var initValue = version + codeAreaTip + codeStart + codeEnd + codeTip + code;
    var myCodeMirror = CodeMirror.fromTextArea(el, {
        mode: "python",
        theme: "leetcode",
        keyMap: "sublime",
        lineNumbers: true,
        smartIndent: true,
        indentUnit: 4,
        indentWithTabs: true,
        lineWrapping: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
        foldGutter: true,
        autofocus: true,
        matchBrackets: true,
        autoCloseBrackets: true,
        styleActiveLine: true,
    });
    myCodeMirror.setOption("value", initValue);
    myCodeMirror.on("keypress", function() {
        myCodeMirror.showHint(); // 注意，注释了CodeMirror库中show-hint.js第131行的代码（阻止了代码补全，同时提供智能提示）
    });
    var test = document.getElementById("test");
    test.onclick = function() {
        var value = myCodeMirror.getValue();
        axios.post("http://localhost/api/runcode", {
            code: value
        }).then(function(res) {
            console.log(res);
        });
    };
};