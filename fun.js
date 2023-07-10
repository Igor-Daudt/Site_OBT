document.getElementById("add").onclick  = function() {

    var node = document.createElement("Li");
    var input = document.createElement("input")
    input.setAttribute("type", "checkbox")
    var label = document.createElement("label")
    label.setAttribute("for", "check4")
    var text = document.getElementById("novo_item").value; 
    if(document.getElementById("novo_item").value == ""){}
    else{
    var textnode=document.createTextNode(text)
    node.appendChild(input)
    node.appendChild(label)
    node.appendChild(textnode)
    document.getElementById("list").appendChild(node);

    document.getElementById("novo_item").value = ""
    }
}