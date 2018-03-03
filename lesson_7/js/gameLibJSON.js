$(function () {
    function getNewData() {
        $.ajax({
            method: 'GET',
            url: 'http://lisabalbach.com/stout14/CIT190/lesson_7/gameCat.json',
            headers:{
                accept: 'application/json'
            },
            dataType: 'json',
            success: function(data){
                //console.log(data);
                var tr;
                for(var i = 0; i < data.catalog.length; i++){
                    tr = $('<tr/>');
                    tr.append("<td>" + data.catalog[i].title + "</td>");
                    tr.append("<td>" + data.catalog[i].publisher + "</td>");
                    tr.append("<td>" + data.catalog[i].genre + "</td>");
                    tr.append("<td>" + data.catalog[i].price + "</td>");
                    tr.append("<td>" + data.catalog[i].releaseYear + "</td>");
                    $('#mytable').append(tr)
                }
            },
            statusCode:{
                200: function(){
                    console.log('server is working');
                    
                },
                404: function(){
                    console.log('There was a problem with the server, please try again soon.');
                    
                }
            }
        });
    }

    $('#games').on('click', function(){
        console.log("button clicked");
        
        getNewData();
    });
    
});
    