(function(){
  var attachEvent = document.attachEvent;
  var isIE = navigator.userAgent.match(/Trident/);

  var requestFrame = (function(){
    var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
        function(fn){ return window.setTimeout(fn, 20); };
    return function(fn){ return raf(fn); };
  })();

  var cancelFrame = (function(){
    var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame ||
           window.clearTimeout;
    return function(id){ return cancel(id); };
  })();

  function resizeListener(e){
    var win = e.target || e.srcElement;
    if (win.__resizeRAF__) cancelFrame(win.__resizeRAF__);
    win.__resizeRAF__ = requestFrame(function(){
      var trigger = win.__resizeTrigger__;
      trigger.__resizeListeners__.forEach(function(fn){
        fn.call(trigger, e);
      });
    });
  }

  function objectLoad(e){
    this.contentDocument.defaultView.__resizeTrigger__ = this.__resizeElement__;
    this.contentDocument.defaultView.addEventListener('resize', resizeListener);
  }

  window.addResizeListener = function(element, fn){
    if (!element.__resizeListeners__) {
      element.__resizeListeners__ = [];
      if (attachEvent) {
        element.__resizeTrigger__ = element;
        element.attachEvent('onresize', resizeListener);
      }
      else {
        if (getComputedStyle(element).position == 'static') element.style.position = 'relative';
        var obj = element.__resizeTrigger__ = document.createElement('object'); 
        obj.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
        obj.__resizeElement__ = element;
        obj.onload = objectLoad;
        obj.type = 'text/html';
        if (isIE) element.appendChild(obj);
        obj.data = 'about:blank';
        if (!isIE) element.appendChild(obj);
      }
    }
    element.__resizeListeners__.push(fn);
  };

  window.removeResizeListener = function(element, fn){
    element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
    if (!element.__resizeListeners__.length) {
      if (attachEvent) element.detachEvent('onresize', resizeListener);
      else {
        element.__resizeTrigger__.contentDocument.defaultView.removeEventListener('resize', resizeListener);
        element.__resizeTrigger__ = !element.removeChild(element.__resizeTrigger__);
      }
    }
  }
})();

export default {
  methods: {
    handleClickEvent(event){
      if (! this.$el.contains(event.target)) {

        if(this.closeable){
          this.hide();
        }
      } 
    },
    resetModalPosition(){
      let h = window.innerHeight,
        modal = this.$el,
        modalH = modal.scrollHeight,
        top = 0;

      if(modalH<h){
        top = (h-modalH)/2;
      }

      if(this.hasClass(this.$el, 'long')&&this.hasClass(this.$el, 'active')){
        document.body.classList.add('scrolling');
        document.body.style.height = this.$el.scrollHeight + 'px';
      }

      modal.style.top = top + 'px';
    },
    hasClass(el, className){
      return el&&el.classList.value.includes(className);
    },
    closeOtherModals(container){
      let vm = this;

      return new Promise(resolve => {
   
        let length = container.childNodes.length, count = 1, syncCounter = 1;

        if(length){

          container.childNodes.forEach(node => {

            if(vm.hasClass(node, 'active')){

              vm.addElClass(vm.$el, ['animating','scale','out']);

              setTimeout(() => {
                vm.removeElClass(vm.$el, ['transition','animating','scale','out','active']);

                vm.removeElClass(vm.modalContainer, ['active']);

                count++;

                if(syncCounter == count){
                  resolve();
                }
              }, 350);
              syncCounter++;

            }

          })
        }else{
          resolve();
        }
      });
      
    },
    modalAttached(){
      this.resetModalPosition();

      addResizeListener(this.$el, this.resetModalPosition);

      addResizeListener(document.body, this.resetModalPosition);

      document.body.addEventListener('click', this.handleClickEvent);

      this.$emit('update:active', this.isActive);
    },
    addElClass(el = null,classes = []){
      classes.forEach(className => el&&el.classList.add(className));
    },
    removeElClass(el = null,classes = []){
      classes.forEach(className => el&&el.classList.remove(className));
    }
  }
}