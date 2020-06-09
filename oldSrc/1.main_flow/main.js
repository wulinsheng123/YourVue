import YourVue from './instance'

new YourVue({
  el: '#app',
  data: {
      count: 0,
      message: 'message'
  },
  template: `
      <div>
          <div>{{count}}</div>
          <button @click="addCount">addCount</button>
          <h4>{{message}}</h4>
          <button @click="decCount">decCount</button>
      </div>
  `,
  methods:{
      addCount(){
          const count = this.count + 1
          this.setState({
              count
          })
      },
      decCount(){
        const count = this.count - 1
        this.setState({
            count
        })
      }
  }
})
