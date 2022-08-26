document.body.onload = addElement;

function addElement() {
    var row1 = document.createElement("div");
    row1.setAttribute("class", "flex-container")
    var labelA = document.createTextNode("A");
    var txtA = document.createElement("input");
    txtA.setAttribute("id", "txtavalue");
    var br = document.createElement("br");
    var row2 = document.createElement("txtb");

    var labelB = document.createTextNode("B");
    var txtB = document.createElement("input");
    txtB.setAttribute("id", "txtbvalue");
    row1.appendChild(labelA);
    row1.appendChild(txtA);
    row1.appendChild(br);
    row2.appendChild(labelB);
    row2.appendChild(txtB);
    row2.appendChild(document.createElement("br"));

    var row3 = document.createElement("btnSum");
    var btn = document.createElement("input")
    btn.setAttribute("type", "submit");
    btn.setAttribute("value", "Click");
    btn.onclick = function() {
        var a = parseInt(document.getElementById("txtavalue").value)
        var b = parseInt(document.getElementById("txtbvalue").value)
        var sum = document.createTextNode(a + b);
        document.body.appendChild(document.createElement("br"));
        document.body.appendChild(sum);

    }
    row3.appendChild(btn)
    document.body.appendChild(row1);
    document.body.appendChild(row2);
    document.body.appendChild(btn);
}