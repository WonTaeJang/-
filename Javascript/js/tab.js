for(let i = 0; i < $('.tab-button').length; i++)
{
    //tabOpen(i);
}

// javascript
$('.list').click(function(e){
    tabOpen(e.target.dataset.id);
});

function tabOpen(i){
    $('.list .tab-button').eq(i).click(function(){
        $('.list .tab-button').removeClass('active');
        $('.tab-content').removeClass('show');
    
        $('.list .tab-button').eq(i).addClass('active');
        $('.tab-content').eq(i).addClass('show');
    })
}
