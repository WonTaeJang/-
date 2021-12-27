var productsList;
var test;

$(window).ready(function () {
    $.ajax({
        url: 'http://localhost:3000/store',
        type: 'GET'
    }).done(function (data) {
        // ajax 요청이 성공했을때 
        setCard(data["products"].length);
        setProducts(data)
        productsList = data;
        console.log(data);

    }).fail(function () {
        // ajax 요청이 실패했을때
    }).always(function () {
        // 성공하든 실패하든 항상 실행
        // 로딩중 같은거 
    });

    // shoppingBasketList
    for (let i = 0; i < 3; i++) {
        $('.shoppingBasket').eq(0).clone().appendTo('.shoppingBasketList');
    }
    $('.shoppingBasket').hide();

    $('.form-buy').droppable({
        drop: function (event, ui) {
            var item = $(ui.draggable);
            //console.log(item);
            //test = item[0];
            //console.log(item[0].innerHTML.getElementById('card-title'));
            setShoppingBasket(item[0]);
        },
    });

    $('.shopping-plus').click(function (e) {
        let index = $(this).parent('div').children('.shoppingID').html();

        // count
        let count = $('.shopping-count').eq(index).val();
        $('.shopping-count').eq(index).val(parseInt(count) + 1);

        // price
        let shopPrice = $('.shopping-price').eq(index).html();
        let productsPrice = productsList["products"][index].price;
        $('.shopping-price').eq(index).html(parseInt(shopPrice) + parseInt(productsPrice));

        totalCost();
    });

    $('.shopping-minus').click(function (e) {
        let index = $(this).parent('div').children('.shoppingID').html();

        // count
        let count = $('.shopping-count').eq(index).val();

        if (count == 1) {
            resetShppingBasket(index);
        }
        else {
            $('.shopping-count').eq(index).val(parseInt(count) - 1);

            // price
            let shopPrice = $('.shopping-price').eq(index).html();
            let productsPrice = productsList["products"][index].price;
            $('.shopping-price').eq(index).html(parseInt(shopPrice) - parseInt(productsPrice));
        }

        totalCost();
    });

    $('.shopping-reset').click(function () {
        let index = $(this).parent('div').parent('div').children('.col-6').children('.input-group').children('.shoppingID').html()

        resetShppingBasket(index);

        totalCost();
    });
})

function resetShppingBasket(index) {
    $('.shopping-count').eq(index).val(0);
    $('.shopping-price').eq(index).html(0);
    $('.shoppingBasket').eq(index).hide();

}

function setShoppingBasket(data) {
    //console.log(data);
    test = data;
    let index = data.getElementsByClassName('productID')[0].innerText;
    //$('.shoppingBasket').eq(0).clone().appendTo('.shoppingBasketList').show();
    if ($('.shoppingBasket').eq(index).is(':hidden')) {
        $('.shopping-img').eq(index).attr('src', '/resources/' + productsList["products"][index].photo);
        $('.shopping-title').eq(index).html(productsList["products"][index].product_name);
        $('.shopping-text').eq(index).html(productsList["products"][index].brand_name);
        $('.shoppingID').eq(index).html(index);
        $('.shoppingBasket').eq(index).show();
    }

    // count
    let count = $('.shopping-count').eq(index).val();
    $('.shopping-count').eq(index).val(parseInt(count) + 1);

    // price
    let shopPrice = $('.shopping-price').eq(index).html();
    let productsPrice = productsList["products"][index].price;
    $('.shopping-price').eq(index).html(parseInt(shopPrice) + parseInt(productsPrice));

    totalCost();
}

function setCard(num) {
    for (let i = 0; i < (num - 1); i++) {
        $('#card1').clone().appendTo('#cardList');
    }

    $('.card1').draggable({
        opacity: "0.8",
        revert: true,
        //helper: "clone"
    });
}

function setProducts(data) {
    for (let i = 0; i < data["products"].length; i++) {
        $('.card-img-top').eq(i).attr('src', '/resources/' + data["products"][i].photo);
        $('.card-title').eq(i).html(data["products"][i].product_name);
        $('.card-text').eq(i).html(data["products"][i].brand_name);
        $('.card-footer').eq(i).html(data["products"][i].price);
        $('.visually-hidden').eq(i).html(data["products"][i].id);
    }
}

function totalCost() {
    let cost = 0;

    for (let i = 0; i < 4; i++) {
        let temp = $('.shopping-price').eq(i).html();
        cost = parseInt(cost) + parseInt(temp);
    }

    $('.total-cost').html(cost);

}

$('#search').on('change', function () {
    let cardList = document.getElementById('cardList');

    for (let i = 0; i < $('.card1').length; i++) {
        $('.card1').eq(i).show();

        let card = $('.card1').eq(i).html();
        card = card.replace('<span class="highlight">', '');
        card = card.replace('</span>', '');

        $('.card1').eq(i).html(card);
    }

    for (let i = 0; i < $('.card1').length; i++) {
        var card = $('.card1').eq(i).html();

        if (card.indexOf($(this).val()) == -1) {
            $('.card1').eq(i).hide();
        }
        else {
            if ($(this).val() != '') {
                card = card.replace($(this).val(), `<span class='highlight'>${$(this).val()}</span>`);

                //console.log(card);
                $('.card1').eq(i).html(card);
            }
        }
    }
})