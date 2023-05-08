      //创建Vue实例,得到 ViewModel
      var vm = new Vue({
        el: "#app",
        data: {
          priceTotal:0,
          isTrue:true,
          bookList:[
            {
              name:'《算》',
              date:"2006-9",
              price:"85.00",
              num:"1",
              operation:"移除",
            },
            {
              name:'《算法》',
              date:"2006-9",
              price:"85.00",
              num:"1",
              operation:"移除",
            },
            {
              name:'《算法导》',
              date:"2006-9",
              price:"85.00",
              num:"1",
              operation:"移除",
            },
            {
              name:'《算法导论》',
              date:"2006-9",
              price:"85.00",
              num:"1",
              operation:"移除",
            },
          ]
        },
        methods: {
          priceTotalData(){
            this.priceTotal = 0;
            console.log( this.bookList);
            this.bookList.forEach(item => {
              this.priceTotal += parseFloat(item.price) *parseFloat(item.num);
            });
            // console.log(this.priceTotal);
          },
          arithmetic(unknown,item,index){
            item.num = parseFloat(item.num)  + parseFloat(unknown)
            this.bookList.splice(index,1,item)
            this.priceTotalData()

            // let num = this.bookList[index].num;
            // this.bookList[index].num =parseFloat(num)  + parseFloat(unknown)
            // console.log(this.bookList);
            // this.priceTotalData()
            // console.log(item);
          },
          removeClick(index){
            this.bookList.splice(index,1)
            this.priceTotalData()
          }
        },
        created(){
          this.priceTotalData()
        }
      });