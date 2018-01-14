// 整体游戏控制
function Game(box){
    this.box = box
    // 创建音效对象，播放背景音乐
    this.audio = new Audio()
    this.audio.playMusic(true)

    // 监听点击事件
    this.listen()
    // 加载开始场景
    this.loadStartScene()
}

Game.prototype.listen = function(){
    $(this.box).click(function(ev){
        var x = ev.offsetX
        var y = ev.offsetY
        
        console.log('click x: %d, y: %d', x, y)
        
        this.audio.playClick()
        
        if(typeof this.clickListener == 'function'){
            this.clickListener(x, y)
        }
    }.bind(this))
}

Game.prototype.loadStartScene = function(){
    var scene = new StartScene(this)
    scene.load()
}

Game.prototype.loadGameScene = function(prevScene){
    console.log('load next scene...')
    
    var scene = new GameScene(this, Game.GameSceneDatas)
    scene.load(prevScene)
}

Game.prototype.complete = function(){
    var scene = new CompleteScene(this)
    scene.load(true)
}
