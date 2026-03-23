<template>
  <div class="chatBox">
    <div class="boxTop">
      <div>chat01</div>
    </div>
    <div class="boxConter">
      <div v-for="(item,index) in chatList" :key="index" 
      :class="item.type == options_name ? 'l' : 'r'">
      <div >{{ item.data }}</div>
      </div>
    </div>
    <div class="boxBottom">
      <div>
        <input type="text" v-model="myValue"  @keyup.enter="Send">
        <button @click="Send" v-if="myValue" >发送</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations,mapState } from "vuex";
export default {
  name:"chat01",
    data(){
        return{
          options_name : this.$options.name,
          myValue:""
        }
    },
    computed: {
    ...mapState(['chatList'])
  },
  methods:{
    ...mapMutations(['add']),
    Send(){
      this.add({data:this.myValue,type:this.options_name})
      this.myValue = ""
    },
      getState(){
        console.log(this.chatList,'1');
      }
    },
}
</script>

<style lang="scss">
.chatBox{
  width: 300px;
  height: 400px;
  border: 2px solid ;
  display: flex;
  flex-direction: column;
  .boxTop{
    flex: 1;
    background-color: aquamarine;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
      font-size: 24px;
    }
  }
  .boxConter{
    flex: 3;
    //height: 24px;
    // overflow:scroll;
    // max-height: 500px;
    overflow-y: auto;
      .l{
        margin: 15px;
        display: flex;
        flex-direction: column;
        align-items: end;
      }
    .r{
        margin: 15px;
        display: flex;
        flex-direction: column;
        align-items: start;
    }
    
    
  }
  .boxBottom{
    flex: 1;
    background-color: aquamarine;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
      display: flex;
      gap: 10px;
      input{
        width: 180px; height: 30px; border-radius: 10px; border: 1px solid chartreuse;
      }
      button{
        height: 30px;
        width: 60px;
      }
    }
  }

}
</style>