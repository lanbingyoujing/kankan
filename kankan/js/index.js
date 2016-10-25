$(function () {
   var timer='';     //定时器
    var i=0;
    var y=0;
    var tao_timer='';

    //左边公用tab切换样式
    $('.tabbox a').mouseover(function () {
        $(this).addClass('hot_style').siblings('a').removeClass('hot_style');
        var cur=$(this).index();
        $(this).parents('.hot_l_title').siblings('ul').eq(cur).show().siblings('ul').hide();
    });

    //搜索框获取焦点效果
    $('.search .search_text').focus(function () {
       $(this).css('outline','none')
    });

    //用户区域右边盒子隐藏效果
    $('.user_r').hover(function () {
        $('.hidden_r').show()
    }, function () {
        $('.hidden_r').hide();
    });

    //用户区域 中间隐藏区域 显示效果
    $('.user_m').hover(function () {
        $('.user_m .hidden_m').show()
    }, function () {
        $('.user_m .hidden_m').hide()
    });

    //用户区域中间隐藏盒子效果
    $('.hidden_m_top span').mouseover(function () {
        $(this).addClass('span_style')
                .siblings().removeClass('span_style')
    });

    //用户区域中间隐藏盒子切换
    $('.history').mouseenter(function () {
        $('.history_box').show()
    });

    $('.update').mouseenter(function(){
        $('.history_box').hide();
        $('.user_m .hidden_m').show()
    });

    //轮换版
    //放入小图片关闭定时器
    $('.smal_pic li').mouseover(function () {
        clearInterval(timer);
        var backImg = $(this).find('img').attr('backImg');
        var backColor = $(this).find('img').attr('backColor');
        var background = 'url('+backImg+')'+'no-repeat center'+backColor;
        $('#focus_background').css({
            background:background
        });
        $(this).addClass('hover').siblings().removeClass('hover');
        i=$(this).index();
        $('.focus_title a').eq(i).show().siblings('a').hide();
    });

    //移除小图片    开始定时器

    $('.smal_pic li').mouseout(function () {
        timer = setInterval(move,1000)
    });

    timer = setInterval(move,1000);

    function move(){
        if(i>11){
            i = 0;
        }
        var backImg = $('.smal_pic li').eq(i).find('img').attr('backImg');
        var backColor = $('.smal_pic li').eq(i).find('img').attr('backColor');
        var background = 'url('+backImg+')'+'no-repeat center'+backColor;
        $('#focus_background').css({
            background:background
        });
        $('.smal_pic li').eq(i).addClass('hover').siblings().removeClass('hover');
        $('.focus_title a').eq(i).show().siblings().hide();
        i++;
    }
    move(0);

    //轮换版右侧全部分类鼠标样式
    $('.title a').mouseover(function () {
        $(this).addClass('rank_hover').siblings().removeClass('rank_hover')
    });

    //轮换版区域全部分类tab切换效果
    $('.title a').mouseover(function () {
        var cur=$(this).index();
        $('.focusrank .content ul').eq(cur).show().siblings('ul').hide();
    });

    //图片hover的公共效果
    $('.pic').hover(function () {
        $(this).addClass('apic_hover')
    }, function () {
        $(this).removeClass('apic_hover')
    });

    //今日热播右边tab切换效果
    $('.hot_right .tab').mouseover(function () {
        $(this).addClass('a_r_tab').siblings('a').removeClass('a_r_tab');
        var cur=$(this).index();
        $('.hot_right ul').eq(cur).show().siblings('ul').hide();
    });

    //电视剧区域右边的tab切换效果
    $('.tab_box li').mouseover(function () {
        $(this).addClass('tv_r_tab').siblings('li').removeClass('tv_r_tab');
        var cur=$(this).index();
        $('.tv_right .list').eq(cur).show().siblings('.list').hide();
        $('.tv_right .tagbox').eq(cur).show().siblings('.tagbox').hide()
    });

    //猜您喜欢点击效果
    var index=0;
    $('.like .like_left .title a').click(function () {
        index--;
        index=(index==-3)?0:index;
        var left = 954*index;
        $('.like_left .main_l .img_list').stop().animate({
            left:left+'px'
        },500);
        return false
    });

    //电影区域右边tab切换效果
    $('.movie_right .tab_box li ').mouseover(function () {
        var cur=$(this).index();
        $('.movie_right .list').eq(cur).show().siblings('.list').hide();
        $('.movie_right .tag .tagbox').eq(cur).show().siblings('.tagbox').hide();
    });

    //vip区域左边tab切换效果
    $('.vip_left .tabbox a').mouseover(function () {
        var cur=index();
        $('.vip_left ul').eq(cur).show().siblings('ul').hide()
    });

    //vip区域右边tab切换效果
    $('.vip_right .tab_box li').mouseover(function () {
        var cur=$(this).index();
        $('.vip_right .list').eq(cur).show().siblings('.list').hide();
    });

    //综艺区域右边tab切换效果
    $('.zy_right .tab_box li').mouseover(function () {
        var cur=$(this).index();
        $('.zy_right .list').eq(cur).show().siblings('.list').hide();
        $('.zy_right .tag ul').eq(cur).show().siblings('ul').hide();
    });

    //动漫区域右边tab切换效果
    $('.anime_right .tab_box li').mouseover(function () {
        var cur=$(this).index();
        $('.anime_right .list').eq(cur).show().siblings('.list').hide();
        $('.anime_right .tagbox').eq(cur).show().siblings('.tagbox').hide();
        $('.anime_right .simglist').eq(cur).show().siblings('.simglist').hide();
    });

    //百度广告盒子
    $('.baidu_box a').hover(function () {
        $(this).css('opacity','0.7')
    }, function () {
        $(this).css('opacity','1')
    });

    //靓TV右边tab效果切换
    $('.good_right .tabbox_title a').mouseover(function () {
        $(this).addClass('good_r_style').siblings('a').removeClass('good_r_style');
        var cur=$(this).index();
        $('.good_right .imglist').eq(cur).show().siblings('.imglist').hide()
    });

    //淘宝小图片移入效果
    $('.tao').mouseover(function () {
        $('div.tao1').show();
        $(this).hide()
    });
    $('.tao1').mouseout(function () {
        $(this).hide();
        $('.tao').show()
    });

    //淘宝的广告切换效果
    $('.ad_left').mouseover(function () {
        clearInterval(tao_timer)
    });
    $('.ad_tab a').mouseover(function () {
        $(this).addClass('one').siblings('a').removeClass('one');
        var cur=$(this).index();
        $('.ad_left ul').eq(cur).show().siblings('ul').hide()
    });

    $('.ad_left').mouseout(function () {
        tao_timer=setInterval(tab,1000);
    });
    tao_timer=setInterval(tab,1000);

    function tab(){
        if(y>2){
            y=0
        }
        $('.ad_left ul').eq(y).show().siblings('ul').hide();
        $('.ad_tab a').eq(y).addClass('one').siblings('a').removeClass('one');
        y++;
    }

    //返回顶部效果
    $(window).scroll(function () {
        var top =$("body").scrollTop();
        (top>500)?$('.back_top').show():$('.back_top').hide();
    });

    var back_timer='';

    $('.back_top a').click(function (e) {
        //setInterval()方法实现
        back_timer=setInterval(function () {
           $("body").scrollTop($("body").scrollTop()-100);
            if($("body").scrollTop()<=0){
                clearInterval(back_timer)
            }
        },1);


        //animate实现
        //$('body').animate({
        //    scrollTop:0
        //},1000);
        e.preventDefault()
    })
});