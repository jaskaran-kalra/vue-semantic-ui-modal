
# vue-semantic-ui-modal
Semantic UI Modal built using Vue js. This plugin uses semantic ui css and won't require any jQuery. This plugin contains only semantic ui modal. For other components search for vue-semantic-ui-{component-name}

# How to use it

## Installation

### NPM
Ubuntu / Mac
```bash
$ npm install vue-semantic-ui-modal
```
Windows
```cmd
c:\path\to\project\folder> npm install vue-semantic-ui-modal
```

### CommonJS
```js
var VueSemanticUiModal = require('vue-semantic-ui-modal');

new Vue({
  components: {
    'vue-semantic-ui-modal': VueSemanticUiModal
  }
})
```

### ES6
```js
import VueSemanticUiModal  from 'vue-semantic-ui-modal'

new Vue({
  components: {
    'vue-semantic-ui-modal': VueSemanticUiModal
  }
})
```

#Simple Modal
import VueSemanticUiModal from 'vue-semantic-ui-modal'
```html

<vue-semantic-ui-modal 
  class="small" 
>
<div class="header">-- header here --</div>
<div class="content">-- content here --</div>
</vue-semantic-ui-modal>
```

### Browser globals
The `dist` folder contains `vue-semantic-ui-modal.min.js`

```html
<body>
  <div id="app">
    <vue-semantic-ui-modal></vue-semantic-ui-modal>
  </div>
  <script src="path/to/vue.js"></script>
  <script type="text/javascript" src="path/to/vue-semantic-ui-modal.js"></script>
  <script type="text/javascript">
    Vue.use(VueSemanticUiModal);
  </script>
</body>
```
## Example
1. Simple
Set closable prop to false to disable closing of modal when clicked outside.
Please use ".sync" with active prop or use @update:active method and in method defination set active variable to false in order to close the modal.

-> with .sync
```html
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
```

-> with @update:active
```html
<vue-modal :active="isStandardActive" @update:active="val => isStandardActive = val" :closeable="false">
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
```

## Local setup

```
npm install
npm run dev
```

## License

vue-semantic-ui-modal is licensed under [The MIT License](LICENSE).

