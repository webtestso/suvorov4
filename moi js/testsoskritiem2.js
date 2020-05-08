var flag = true;
function showdiv(id) {
    var div = document.getElementById(id);
    div.style.display = flag ? 'none' : 'block';
    flag = !flag;
}
