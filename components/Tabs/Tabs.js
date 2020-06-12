// components/Tabs/Tabs.js
Component({
  options:{
    multipleSlots:true
  },
  /**
   * 组件的属性列表 接收父元素传过来的数据
   */
  properties: {
    //要接收的数据名称
    tabs:{
      //数据类型
      type: Array,
      //默认值
      value:[]
    },
    test:{
      //数据类型
      type: String,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //isActive: 1, //针对第一种点击事件的方法
  },

  /**
   * 组件的方法列表
   * 1 页面js文件中，存放事件回调函数的时候，存放在data同层级下
   * 2 组件js文件中，存放事件回调函数的时候，必须要存放在methods中
   */
  methods: {
    /*第一种点击事件的方法*/
    // hanldeItemTap(e) {
    //   const i = e.target.dataset.index;
    //   this.setData({
    //     isActive: i,        
    //   })
    //   console.log(e)
    // },
    /*第二种点击事件的方法*/
    // hanldeItemTap(e) {
    //   const i = e.currentTarget.dataset.index;
    //   //对复杂类型进行结构赋值的时候，是复制了一分变量的引用而已
    //   //相当于 let tabs = this.data.tabs;
    //   //最严谨的做法，是重新拷贝一份数组，在对拷贝的数组进行处理
    //   //不要直接修改this.data中的数据
    //   //let tabs = JSON.parse(JSON.stringify(this.data.tabs))
    //   let { tabs } = this.data;
    //   //forEach()遍历数组，会修改源数组
    //   tabs.forEach((v, j) => j === i ? v.isActive = true : v.isActive = false)
    //   this.setData({
    //     tabs
    //   })
    // },
    /*自定义事件的方法，父子直接传递参数，子组件调用父组件的时间并传递参数*/
    /*修改父组件传递过来的参数必须要在父组件中进行*/ 
    /*this.triggerEvent("父组件的自定义事件",{子组件要传递给父组件的参数})*/
    hanldeItemTap(e) {
      const { index } = e.currentTarget.dataset;
      const str = 'oyp@zjx';
      this.triggerEvent("itemChange", { index, str });
    }
  }
})
