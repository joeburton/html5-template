
$('*[data-selection-id]').each(function() {
    
    /*
        selection id
    */
    var id = $(this).data('selection-id');
    
    $(this).html(id);
    
    /*
        maps operation 
    
    return $('*[data-selection-id]').map(function() {
        console.log($(this).data());
    });
    */
    
});


var mapStuff = {
    
    details: function () {
        return $('*[data-selection-id]').map(function() {
            console.log($(this).data());
        });
    }
    
};


mapStuff.details();