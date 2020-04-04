<template>
    <article class="card-article">
      <router-link class="card-a" :to="{name:'content',params:{id:id}}">
        <h2 class="card-h2">{{title}}</h2>
      </router-link>
      <div class="post-time">
        <time class="time" :datetime="time">{{showTime}}</time>
      </div>
      <div class="descreption">
        <p>{{desc}}</p>
      </div>
      <router-link :to="`/content/`+id" class="card-a2">阅读全文〉</router-link>
    </article>
</template>

<script>
    export default {
      name: "card",
      props:{
          title:{
            type:String,
            default:'没有标题'
          },
        time:{
            type:String,
            default:new Date()
        },
        desc:{
            type:String,
            default:'没有简介'
        },
        id:String
      },
      computed:{
        showTime(){
          let d = new Date(Date.parse(this.time))
          return  d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
        }
      }
    }
</script>

<style scoped>
.card-article{
  display: block;
  color:#202020;
  line-height: 1.8rem;
  font-family: sans-serif;
}
  .card-a{
    text-decoration: none;
    font-size: 12px;
  }
  .card-h2{
    font-size: 1.2rem;
    font-weight: normal;
    margin:0.5rem 0;
    line-height: 1.5rem;
    color: black;
  }
  .card-h2:hover{
    color: #64b5f6;
  }
  .time{
    color: #999;
    font-size: 12px;
  }
  .descreption{
    color: #999;
    font-size: 14px;
  }
  .descreption p{
    margin:0.75rem 0;
  }
  .card-a2{
    margin-top: -5px;
    font-size: 14px;
    text-decoration: none;
    color: #202020;
  }
  .card-a2:hover{
    color: #64b5f6;
  }
</style>
