var button = document.getElementById('counter');
button.onclick = function (){
    
    var counter = button.onclick;
   
    
    counter = counter + 1;
    
    
    
    var request = new XMLHttpRequest ();
    
    
    
    request.onreadystatechange = function (){
        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                var counter = responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET','http://vaaman234.imad.hasura-app.io/counter', true);
    request.send (null);
};
var nameInput = document.getElementById('name');
var name = nameInput.value
var submit = document.getElementById('submit_btn');
Submit.onclick = function() {
    var names = ['name1', 'name2', 'name3', 'name4'];
    var list = '';
    for(var i=0; i<names.length; i++){
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
};