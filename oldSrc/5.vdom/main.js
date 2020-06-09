import YourVue from './instance'

new YourVue({
  el: '#app',
  data: {
      count: 0,
      message: 'message',
      array: []
  },
  template: `
      <div>
          <div>{{count}} : {{message}}</div>
          <button @click="addCount" class="test">addCount</button>
          <h2 style="color: red">{{message}}</h2>
          <button @click="decCount">decCount</button>
          <h3>{{array}}</h3>
      </div>
  `,
  methods:{
      addCount(){
        this.count += 1
        this.array.push(0)
      },
      decCount(){
        this.count -= 1
        this.array.pop()
      }
  }
})