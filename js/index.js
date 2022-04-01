$(function() {
    const j = $.noConflict();
    // 搜索栏开始
    const data = ['全部商品',
        '小米平板5',
        '空调',
        '小米手机',
        '洗衣机',
        '显示器',
        '红米',
        '冰箱',
    ]

    j(data).each(function(index, value) {
        const newData = `<li><a href-"#">${value}</a></li>`;
        j('.search-hd ul').append(newData);

    })

    j('.nav-search').on('click', function() {
        j(this).children('.search-hd').toggle();
        j(this).css('border', '1px solid #ff7b00');
        j(this).find('span').css('borderLeft', '1px solid #ff7b00');
        j(this).find('span').css('color', '#ff7b00');
    });

    j('.nav-search input').on('blur', function() {
        j('.nav-search').click();
        j('.nav-search').css('border', '1px solid #b9b8b8');
        j('.nav-search').find('span').css('borderLeft', '1px solid #b9b8b8');
        j('.nav-search').find('span').css('color', '#b9b8b8');
    });
    // 搜索栏结束

    j(window).on('scroll', function() {
        j('.server-info').css('position', 'fixed')
        const topSize = j('.server-info').offset().top;
        console.log(topSize);
        if (topSize >= 800) {
            j('.totop').css('display', 'block');
        } else {
            j('.totop').css('display', 'none');
        }
    })

    // j('.totop').on('click', function() {
    //     // j('document').screenTop(0);

    // })



})