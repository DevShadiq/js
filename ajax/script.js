function loadData() {
    //xmlHttp Request 
    const ldata = new XMLHttpRequest();
    ldata.onload = function () {
        const container = document.getElementById('demo');
        demo.innerHTML = ldata.responseText;
    };
    //preapare Request
    ldata.open("GET", "./data/info.txt");

    //request send

    ldata.send();

    

}