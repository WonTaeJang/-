for(let i = 0; i < $('.tab-button').length; i++)
{
    $('.list .tab-button').eq(i).click(function(){
        $('.list .tab-button').removeClass('active');
        $('.tab-content').removeClass('show');
    
        $('.list .tab-button').eq(i).addClass('active');
        $('.tab-content').eq(i).addClass('show');
    })
}


