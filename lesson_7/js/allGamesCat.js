$(function () {
    function getNewData(value) {
        $.ajax({
            method: 'GET',
            url: 'http://lisabalbach.com/stout14/CIT190/lesson_7/allGamesCat.json',
            headers:{
                accept: 'application/json'
            },
            dataType: 'json',
            success: function(data){
                if(value === 'fps'){
                    newData = data.fps;
                }else if(value === 'rts'){
                    newData = data.rts;
                }else if(value === 'rpg'){
                    newData = data.rpg;
                }

                var tr;
                for(var i = 0; i < newData.length; i++){
                    tr = $('<tr/>');
                    tr.append("<td>" + newData[i].title + "</td>");
                    tr.append("<td>" + newData[i].publisher + "</td>");
                    tr.append("<td>" + newData[i].price + "</td>");
                    tr.append("<td>" + newData[i].releaseYear + "</td>");
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

    $('#fpsGames').on('click', function(){
        console.log("FPS button clicked"); 
        $('#mytable').empty();      
        var value = 'fps';
        getNewData(value);
    });

    $('#rtsGames').on('click', function(){
        console.log("RTS button clicked"); 
        $('#mytable').empty();  
        var value = 'rts';        
        getNewData(value);
    });

    $('#rpgGames').on('click', function(){
        console.log("RPG button clicked");  
        $('#mytable').empty();   
        var value = 'rpg';      
        getNewData(value);
    });
    
});
    