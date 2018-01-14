// 全屏按扭
// box 全屏按扭放置的位置，即父元素
// options 覆盖代码中的默认数据，实现样式自定义
function FullScreen(box, options){
    this.box = box
    // $.extend 实现对象合并，把后面对象覆盖到前的对象上
    this.options = $.extend({
        position: 'absolute',
        left: '10px',
        bottom: '26px',
        fontSize: '16px',
        backgroundColor: '#ffcc01',
        display: 'inline-block',
        padding: '8px',
        borderRadius: '6px'
    }, options)
}

// 将全屏按扭显示在页面上
FullScreen.prototype.show = function() {
    this.$ele = $('<span>', {
        on: {
            click: function(){
                // 全屏插件
               
                $(document).fullScreen(FullScreen.isFullScreen = !FullScreen.isFullScreen)
                
                if(FullScreen.isFullScreen){
                    $(this).text('退出全屏')
                }
                else{
                    $(this).text('全屏')
                }
            }
        }
    }).text(FullScreen.isFullScreen ? '退出全屏' : '全屏')
    .css(this.options).prependTo(this.box)
}

// 从页面上移除全屏按扭
FullScreen.prototype.remove = function(){
    this.$ele.remove()
}