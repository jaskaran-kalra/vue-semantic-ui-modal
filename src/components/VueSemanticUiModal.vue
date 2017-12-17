<template>
  <div class="ui modal">
    <slot></slot>
  </div> 
</template>

<script>
import ModalMixin from '../mixins/ModalMixin';

export default {
  mixins: [ModalMixin],

  data(){
    return {
      isActive: false,
      modalContainer: '',
    }
  },

  props: {
    active: {
      type: Boolean,
    },
    container: {
      type: String,
      default: 'body'
    },
    closeable: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    active(val){
      if(val){
        this.show();
      }else{
        this.hide();
      }
    }
  },

  methods: {
    hide(){
      if(this.isActive){
        this.isActive = false;

        this.addElClass(this.$el, ['animating','scale','out']);

        setTimeout(() => {
          this.removeElClass(this.$el, ['transition','animating','scale','out','active']);

          this.removeElClass(this.modalContainer, ['active']);

          this.removeElClass(document.body, ['dimmed']);

          if(this.hasClass(this.$el, 'long')){
            document.body.style.height = null;
          }

          document.body.removeEventListener('click', this.handleClickEvent);

          this.$emit('update:active', this.isActive);
        }, 350);
      }
    },
    show(){
      let vm = this;

      if(!vm.isActive){
        vm.isActive = true;

        let container = document.querySelector(vm.container);

        if(!container){
          console.error('Container specified cannot be found');
          return;
        }

        container.childNodes.forEach(row=>{
          if(row.className&&row.className.includes('modals')){
            vm.modalContainer = row;
          }
        });

        if(!vm.hasClass(document.body,'dimmable')){
          document.body.classList.add('dimmable');
        }

        if(!vm.hasClass(document.body,'dimmed')){
          document.body.classList.add('dimmed');
        }

        if(!vm.modalContainer){
          //append child
          vm.modalContainer = vm.createModalContainer(container);
        }

        vm.modalContainer.appendChild(vm.$el);
        
        vm.addElClass(vm.modalContainer, ['active']);
        vm.addElClass(vm.$el, ['transition','animating','scale','in','active']);

        setTimeout(() => {
          vm.removeElClass(vm.$el, ['animating','scale','in']);
        }, 350);

        vm.modalAttached();
      }
    },
    createModalContainer(container){
      let div = document.createElement('div');

      div.className = 'ui dimmer modals page';

      container.appendChild(div);

      return div;
    }
  },

  mounted(){
    if(this.hasClass(this.$el, 'long')&&!this.hasClass(this.$el, 'scrolling')){
      this.$el.classList.add('scrolling');
    }
  }
}
</script>