//アプリケーション中の変数　定義
var timer;
var start;
var isStarted=false;

//DOMで操作する要素を代入
var startButton=document.getElementById('start');
var stopButton=document.getElementById('stop');
var resetButton=document.getElementById('reset');
var watch=document.querySelector('.stopwatch p');

//イベント
startButton.addEventListener('click',watchStart,false);
stopButton.addEventListener('click',watchStop,false);
resetButton.addEventListener('click',watchReset,false);

//開始ボタン
function watchStart(){
    if(! isStarted){
        start=new Date();
        timer=setInterval(updateWatch,1000/60);

        isStarted=true;
    }
}

//停止ボタン
function watchStop(){
    if(isStarted){
      clearInterval(timer);
        isStarted=false;
    }
}

//リセット
function watchReset(){
    watchStop();
    watch.innerHTML="00:00:00:000";
}

//計測　時刻計算
function updateWatch(){
    //経過時間
    var date=new Date();
    var diff=date.getTime()-start.getTime();

    //hour,min,sec
    var hour=Math.floor(diff/3600000);
    var minute=Math.floor(diff/60000%60);
    var second=Math.floor(diff/1000%60);
    var milliSecond=Math.floor(diff%1000);

    //表示用
    if(hour<10){
        hour="0"+hour;
    }
    if(minute<10){
        minute="0"+minute;
    }
    if(second<10){
        second="0"+second;
    }

    if(milliSecond<100){
        if(milliSecond<10){
            milliSecond="00"+milliSecond;
        }else{
          milliSecond="0"+milliSecond;
        }
    }

    //タイマー
    watch.innerHTML=hour+':'+minute+':'+second+':'+milliSecond;
}