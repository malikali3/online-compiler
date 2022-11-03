const compile = () => {
    const html = document.getElementById("html");
    const css = document.getElementById("css");
    const js = document.getElementById("js");
    const result = document.getElementById("result").contentWindow.document;


document.body.onkeyup = function()
{
    result.open(); // this will open the iframe
    result.writeln( // this function will write something in iframe
        html.value // this we have attached html input to iframe
        + "<style>" + css.value + "</style>"
        + "<script>" + js.value + "</script>"
        );
    result.close(); // this will close the iframe
}
}

compile();