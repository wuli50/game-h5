window.onload = function(){
    // 1.
    var arr = ['img/1.png','img/2.png',
    'img/3.png','img/4.png','img/5.png',
    'img/6.png','img/7.png','img/8.png',
    'img/9.png'];
    // 定义一个函数（帮数组打乱顺序）
    function Lsort(arr){
        return arr.sort(function(){
            return Math.random()-0.5;
        });
    }
    // console.log(Lsort(arr));
    // 调用初始化拼图函数
    var m = document.getElementsByTagName('main')[0];
    initImg();
    
    function initImg(){
        // 得到打乱顺序后的数组
        var lArr = Lsort(arr);
        for(var i=0;i<lArr.length;i++){
            var img = document.createElement('img');
            img.src = lArr[i];
            
            m.appendChild(img);
        }
    }
    m.ondragstart = function(e){
        // e.preventDefault();
        console.log(e.target);
        e.target.id='drag';
    }
    m.ondragover = function(e){
        e.preventDefault();
        e.target.style.opacity = 0.6;
    }
    m.ondragleave = function(e){
        e.preventDefault();
        e.target.style.opacity = 1;
    }
    var step = 0;
    m.ondrop = function(e){
        console.log(e.target);
        var drag = document.getElementById('drag');
        drag.id='';
        if(drag!=e.target){
            var d = drag.getAttribute('src');
            drag.setAttribute('src',e.target.getAttribute('src'));
            e.target.setAttribute('src',d);
            e.target.style.opacity = 1;
            step++;
            document.getElementsByTagName('button')[0]
                .innerHTML = step;
            checkFinish();
        }
    }
    function checkFinish(){
        var imgs = m.getElementsByTagName('img');
        var flags = true;
        //  console.log(imgs[0].getAttribute('src'));
        for(var i=0;i<imgs.length;i++){
            // console.log(i+1);
        //    console.log(imgs[i].getAttribute('src').indexOf(i+1));
            if(imgs[i].getAttribute('src').indexOf(i+1)==-1){
                flags = false;
                break;
            }
        }
        // console.log('****')
        // console.log(flags);
        if(flags){
            var r =confirm('太棒了，拼图完成,你是否重新开始');
            if(r){
                location.reload();
            }
        }
    }
}