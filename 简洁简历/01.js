/**
 * Created by Administrator on 2016/11/14 0014.
 */
move.defaults={duration:700};


function first(){
    move('.img4').delay('1s').x(0).end() ;
    move('.img5').delay('1s').x(0).end();
    move('.img2').delay('1.2s').x(0).end(function(){
        move('.img2').scale(1.5).end(function(){
            move('.img2').delay('0').scale(1).end()
        })
    });
    move('.img6').delay('1.2s').x(0).end();
    move('.img3').delay('2s').x(0).end();
    move('.photo').delay('3s').scale(1).end();
    move('.but img:nth-child(1)').delay('3.3').y(0).end();
    move('.Post').delay('3.5').y(0).end();

}

function firstleave(){


    move('.img4').x(-300).end();
    move('.img5').x(300).end();
    move('.img2').x(-300).end();
    move('.img6').x(-300).end();
    move('.img3').x(-300).end();
    move('.but img:nth-child(1)').y(300).end();
    move('.Post').y(300).end();
    move('.photo').scale(0).end();
}

function second(){
    move('.pho_bg').ease('out').scale(1).end();
    move('.splicing .dx').delay('1s').x(0).end();
    move('.chaxian').delay('1.3s').x(0).end();
    move('.splicing .Splice:nth-child(1)').delay('1.2s').x(0).end();
    move('.splicing .Splice:nth-child(2)').delay('1.3s').x(0).end();
    move('.pho_bg1').delay('1.2s').ease('out').scale(1).end(function(){
        $('.pho_bg1').css('animation','ss 1s linear infinite')
    });
    move('.essential').delay('1.5s').x(0).end();
    move('.lanbian2').delay('1.5s').scale(1).end();
    move('.lanbian1').delay('1.8s').scale(1).end();
    move('.lanbian').delay('1.8s').scale(1).end();
    move('.jieshao').delay('1.9s').ease('in').y(0).end();
}



function secondleave(){
    move('.pho_bg').scale(0).end();
    move('.splicing .dx').x(-300).end();
    move('.splicing .Splice:nth-child(1)').x(-300).end();
    move('.splicing .Splice:nth-child(2)').x(300).end();
    move('.chaxian').x(300).end();
    move('.essential').x(300).end();
    move('.lanbian2').scale(0).end();
    move('.lanbian1').scale(0).end();
    move('.lanbian').scale(0).end();
    move('.jieshao').y(-500).end();

}

function thr(){
    move('.daojiao').y(0).end();
    move('.xingzua').delay('0.5s').y(0).end();
    move('.ee').delay('1s').x(0).end();
    move('.dbe').delay('1s').x(0).end();
    move('.gongzuo').delay('1s').x(0).end();
    move('.jingli').delay('1s').x(0).end();
    move('.b9').delay('1s').x(0).end();
    move('.jl1').delay('1.5s').set('opacity','1').scale(1).end();
    move('.jl2').delay('1.8s').set('opacity','1').scale(1).end();
    move('.jl3').delay('2.1s').set('opacity','1').scale(1).end();
    move('.jl4').delay('2.4s').set('opacity','1').scale(1).end();
    move('.da:nth-child(2)').delay('1.6s').set('opacity','1').scale(1).end();
    move('.da:nth-child(3)').delay('1.9s').set('opacity','1').scale(1).end();
    move('.da:nth-child(4)').delay('2.2s').set('opacity','1').scale(1).end();
    move('.da:nth-child(5)').delay('2.5s').set('opacity','1').scale(1).end();
    move('.f4').delay('1.4s').set('opacity','1').end();
}


function thrleave(){
    move('.daojiao').y(-300).end();
    move('.xingzua').y(-300).end();
    move('.ee').x(-300).end();
    move('.dbe').x(-300).end();
    move('.gongzuo').x(-300).end();
    move('.jingli').x(300).end();
    move('.b9').x(300).end();
    move('.jl1').scale(0).end();
    move('.jl2').scale(0).end();
    move('.jl3').scale(0).end();
    move('.jl4').scale(0).end();
    move('.da:nth-child(2)').scale(0).end();
    move('.da:nth-child(3)').scale(0).end();
    move('.da:nth-child(4)').scale(0).end();
    move('.da:nth-child(5)').scale(0).end();
    move('.f4').set('opacity','0').end();
}


function four(){
    move('.a1').x(0).end();
    move('.b1').x(0).end();
    move('.zhuanye').delay('0.3s').scale(1).end();
    move('.nengli').delay('0.5s').rotate(0).set('opacity','1').end();
    move('.job7 .bliti1').delay('1s').scale(1).end();
    move('.pp-2').delay('1.3s').scale(1).set('opacity','1').end();
    move('.job3 .pp2').delay('1.4s').set('opacity','1').end();
    move('.job5 .pp2').delay('1.5s').rotate(0).set('opacity','1').end();
    move('.job4 .pp2').delay('1.6s').y(0).set('opacity','1').end();
    move('.job6 .pp2').delay('1.8s').x(0).set('opacity','1').end();
    move('.job8 .pp2').delay('1.9s').y(0).set('opacity','1').end();
    move('.job9 .pp2').delay('2s').y(0).set('opacity','1').end();

}

function fourleave() {
    move('.a1').x(-214).end();
    move('.b1').x(300).end();
    move('.zhuanye').scale(0).end();
    move('.nengli').rotate(42).set('opacity','0').end();
    move('.job7 .bliti1').scale(0).end();
    move('.pp-2').scale(2).set('opacity','0').end();
    move('.job3 .pp2').set('opacity','0').end();
    move('.job5 .pp2').rotate(-432).set('opacity','0').end();
    move('.job4 .pp2').y(74).set('opacity','0').end();
    move('.job6 .pp2').x(190).set('opacity','0').end();
    move('.job8 .pp2').y(-190).set('opacity','0').end();
    move('.job9 .pp2').y(190).set('opacity','0').end();

}

//
function five(){
    move('.a').x(0).end();
    move('.b').x(0).end();
    move('.qiu4').delay('0.3s').scale(1).end();
    move('.qiu1').delay('0.5s').scale(1).end();
    move('.qiu2').delay('0.7s').scale(1).end();
    move('.qiu3').delay('0.7s').scale(1).end();
    move('.qiu6').delay('0.9s').scale(1).end();
    move('.qiu5').delay('0.9s').scale(1).end();

}
function fiveleave(){
    move('.a').x(-214).end();
    move('.b').x(300).end();
    move('.qiu4').scale(0).end();
    move('.qiu1').scale(0).end();
    move('.qiu2').scale(0).end();
    move('.qiu3').scale(0).end();
    move('.qiu6').scale(0).end();
    move('.qiu5').scale(0).end();

}