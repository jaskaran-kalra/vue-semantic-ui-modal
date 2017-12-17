<template>
  <div class="ui container" id="app">
    <div class="ui padded segment">
      <h2 class="ui header">Standard</h2>
      <vue-modal :active.sync="isStandardActive" :closeable="false">
        <div class="header">
          Profile Picture
        </div>
        <div class="image content">
          <div class="ui medium image">
            <img src="http://semantic-ui.com/images/avatar/large/chris.jpg">
          </div>
        </div>
        <div class="actions">
          <div class="ui black button" @click="isStandardActive=false">
            Nope
          </div>
        </div>
      </vue-modal>
      <button class="ui button" @click="isStandardActive=true">Open</button>
    </div>
    <div class="ui padded segment">
      <h2 class="ui header">Basic</h2>
      <vue-modal class="basic" :active.sync="isBasicActive">
        <div class="header">
          Profile Picture
        </div>
        <div class="image content">
          <div class="ui medium image">
            <img src="http://semantic-ui.com/images/avatar/large/chris.jpg">
          </div>
        </div>
        <div class="actions">
          <div class="ui black button" @click="isBasicActive=false">
            Nope
          </div>
        </div>
      </vue-modal>
      <button class="ui button" @click="isBasicActive=true">Open</button>
    </div>
    <div class="ui padded segment">
      <h2 class="ui header">Sizes</h2>
      <div class="ui segment">
        <h3 class="ui header">Mini</h3>
        <vue-modal class="mini" :active.sync="isMiniActive">
          <div class="header">
            dfdfd
          </div>
          <div class="actions">
            <div class="ui black button" @click="isMiniActive=false">
              Nope
            </div>
          </div>
        </vue-modal>
        <button class="ui button" @click="isMiniActive=true">Open</button>
      </div>
      <div class="ui segment">
        <h3 class="ui header">Tiny</h3>
        <vue-modal class="tiny" :active.sync="isTinyActive">
          <div class="header">
            dfdfd
          </div>
          <div class="actions">
            <div class="ui black button" @click="isTinyActive=false">
              Nope
            </div>
          </div>
        </vue-modal>
        <button class="ui button" @click="isTinyActive=true">Open</button>
      </div>
      <div class="ui segment">
        <h3 class="ui header">Small</h3>
        <vue-modal class="small" :active.sync="isSmallActive">
          <div class="header">
            dfdfd
          </div>
          <div class="actions">
            <div class="ui black button" @click="isSmallActive=false">
              Nope
            </div>
          </div>
        </vue-modal>
        <button class="ui button" @click="isSmallActive=true">Open</button>
      </div>
      <div class="ui segment">
        <h3 class="ui header">Large</h3>
        <vue-modal class="large" :active.sync="isLargeActive">
          <div class="header">
            dfdfd
          </div>
          <div class="actions">
            <div class="ui black button" @click="isLargeActive=false">
              Nope
            </div>
          </div>
        </vue-modal>
        <button class="ui button" @click="isLargeActive=true">Open</button>
      </div>
    </div>
    <div class="ui padded segment">
      <h2 class="ui header">Full Screen</h2>
      <vue-modal class="fullscreen" :active.sync="isFullscreenActive">
        <div class="header">
          Profile Picture
        </div>
        <div class="image content">
          <div class="ui medium image">
            <img src="http://semantic-ui.com/images/avatar/large/chris.jpg">
          </div>
        </div>
        <div class="actions">
          <div class="ui black button" @click="isFullscreenActive=false">
            Nope
          </div>
        </div>
      </vue-modal>
      <button class="ui button" @click="isFullscreenActive=true">Open</button>
    </div>
    <div class="ui padded segment">
      <h2 class="ui header">Scrolling Modal</h2>
      <vue-modal class="long" :active.sync="isLongActive">
        <div class="header">Header</div>
        <div class="content">
          <p>Very long content goes here</p>
          <img class="ui wireframe image" src="http://semantic-ui.com/images/wireframe/paragraph.png">
          <div class="ui divider"></div>
          <img class="ui wireframe image" src="http://semantic-ui.com/images/wireframe/paragraph.png">
          <div class="ui divider"></div>
          <img class="ui wireframe image" src="http://semantic-ui.com/images/wireframe/paragraph.png">
          <div class="ui divider"></div>

          <img class="ui wireframe image" src="http://semantic-ui.com/images/wireframe/paragraph.png">
          <div class="ui divider"></div>
          <img class="ui wireframe image" src="http://semantic-ui.com/images/wireframe/paragraph.png">
          <div class="ui divider"></div>
        </div>
        <div class="actions">
          <div class="ui black button" @click="isLongActive=false">
            Nope
          </div>
        </div>
      </vue-modal>
      <button class="ui button" @click="isLongActive=true">Open</button>
    </div>
    <div class="ui padded segment">
      <h2 class="ui header">Scrolling Content</h2>
      <vue-modal :active.sync="isScrollingActive">
        <div class="header">Header</div>
        <div class="scrolling content">
          <p>Very long content goes here</p>
          <img class="ui wireframe image" src="http://semantic-ui.com/images/wireframe/paragraph.png">
          <div class="ui divider"></div>
          <img class="ui wireframe image" src="http://semantic-ui.com/images/wireframe/paragraph.png">
          <div class="ui divider"></div>
          <img class="ui wireframe image" src="http://semantic-ui.com/images/wireframe/paragraph.png">
          <div class="ui divider"></div>

          <img class="ui wireframe image" src="http://semantic-ui.com/images/wireframe/paragraph.png">
          <div class="ui divider"></div>
          <img class="ui wireframe image" src="http://semantic-ui.com/images/wireframe/paragraph.png">
          <div class="ui divider"></div>
        </div>
        <div class="actions">
          <div class="ui black button" @click="isScrollingActive=false">
            Nope
          </div>
        </div>
      </vue-modal>
      <button class="ui button" @click="isScrollingActive=true">Open</button>
    </div>
  </div>
</template>

<script>
import VueModal from './components/VueSemanticUiModal.vue';

export default {
  name: 'Modal',
  data () {
    return {
      isStandardActive: false,
      isBasicActive: false,
      isTinyActive: false,
      isMiniActive: false,
      isSmallActive: false,
      isLargeActive: false,
      isFullscreenActive: false,
      isLongActive: false,
      isScrollingActive: false,
    }
  },
  components: {
    VueModal
  },
}

</script>