Vue.createApp({
  template: '#chen',
  data() {
    return {
      books: [
        {
          id: 1,
          name: '《算法导论》',
          date: '2006-9',
          price: 85.00,
          count: 1
        },
        {
          id: 2,
          name: '《UNIX编程艺术》',
          date: '2006-2',
          price: 59.00,
          count: 1
        },
        {
          id: 3,
          name: '《编程珠玑》',
          date: '2008-10',
          price: 39.00,
          count: 1
        },
        {
          id: 4,
          name: '《代码大全》',
          date: '2006-3',
          price: 128.00,
          count: 1
        },
      ], 
    }
  },
  methods: {
    increment(index) {
      console.log("this.book[]", this.books[index])
      this.books[index].count++;
    },
    decrement(index) {
        this.books[index].count--;
    },
    remove(index) {
      this.books.splice(index,1)
    }
  },  
  computed: {
    totalPrice(){
      let finalPrice = 0;
      this.books.forEach(e => {
        console.log('e============', e.price, e.count )
        finalPrice += e.price * e.count; 
      });
      // for(let book of this.books){
      //   this.totalPrice += book.count * book.price;
      // }
      return "￥" + finalPrice;
    }, 
    // vue3不支持过滤器，推荐两种做法，使用计算属性/使用全局的方法
    filterBooks(){
      return this.books.map(item =>{
        // 这么写的话，会出现总价格为 NaN, 因为拼接上了￥。因为他们指向的是同一个引用，改掉一个，其他的也会改掉
        // item.price = "￥" + item.price;
        // item.price = "￥" + item.price;
        // return item;
        const newItem = Object.assign({}, item);  
        newItem.price = "￥" + newItem.price;
        return newItem;
      })
    }

  }
}).mount("#app")