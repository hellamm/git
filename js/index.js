$(function() {
    const j = $.noConflict();
    j(document).scrollTop(0);
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
        //动态生成搜索栏下拉框列表
    j(data).each(function(index, value) {
            const newData = `<li><a href-"#">${value}</a></li>`;
            j('.search-hd ul').append(newData);

        })
        //搜索栏点击下拉列表
    j('.nav-search').on('click', function() {
        j(this).children('.search-hd').toggle();
        j(this).css('border', '1px solid #ff7b00');
        j(this).find('span').css('borderLeft', '1px solid #ff7b00');
        j(this).find('span').css('color', '#ff7b00');
    });
    //搜索栏失去焦点
    j('.nav-search input').on('blur', function() {
        j('.nav-search').click();
        j('.nav-search').css('border', '1px solid #b9b8b8');
        j('.nav-search').find('span').css('borderLeft', '1px solid #b9b8b8');
        j('.nav-search').find('span').css('color', '#b9b8b8');
    });

    // 侧边栏固定事件  返回顶部事件

    j(window).on('scroll', function() {
        j('.server-info').css('position', 'fixed')
        const topSize = j('.server-info').offset().top;
        if (j(document).scrollTop() >= 800) {
            j('.totop').css('display', 'block');
        } else {
            j('.totop').css('display', 'none');
        }
    })

    j('.totop').on('click', function(e) {
            console.log(j('.totop'));
            e.preventDefault()
                // j(document).scrollTop(0);    无动效

            j('body,html').stop().animate({
                scrollTop: 0 //有动效
            })
        })
        // 侧边栏固定事件  返回顶部事件结束--------------------------


})