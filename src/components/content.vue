<template>
  <div>
      <div class="container">
        <div class="inner">
          <article class="post">
            <header class="post-header">
              <h1 class="title">
                {{title}}
              </h1>
              <span>
                <time class="time" :datetime="time">{{showtime}} 发布</time>
              </span>
            </header>
            <div class="post-content" v-html="html">

            </div>
          </article>
        </div>

      </div>

  </div>
</template>


<script>
  import marked from 'marked'
  import hljs from 'highlight.js'
  import javascript from 'highlight.js/lib/languages/javascript'
  import '../assets/atom-one-light.css'
    export default {
      name: "article",
      data(){
        return{
          title:'标题的 的副打 地方',
          time:'',
          content:''


        }
      },
      mounted() {
       this.getData();
        var rendererMD = new marked.Renderer();
        marked.setOptions({
          renderer: rendererMD,
          highlight: function(code){
            return hljs.highlightAuto(code).value
          },
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false
        });//基本设置
      },
      methods:{
        getData(){
          this.$axios.get('/article/'+this.$route.params.id).then(res=>{
            this.title = res.data.title;
            this.content = res.data.content;
            this.time = res.data.date;
            console.log(this.title)
            console.log(this.content)
            console.log(this.time)
          })
        }
    },
      computed:{
        showtime(){
          let d = new Date(Date.parse(this.time))
          return  d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
        },
        html(){
          return marked(this.content)
        }
      }
    }
</script>

<style scoped>
.container{
  padding-top: 60px;
  margin:0 auto;
  max-width: 1000px;
  width: 100%;
}
  .inner{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .post{
    padding:10px 50px;
    background: white;
    width: 100%;
    position: relative;
  }
  .post-header{
    margin: 10px 0 30px;
    text-align: center;
  }
  .title{
    margin-bottom: 1rem;
    line-height: 2rem;
  }
</style>
