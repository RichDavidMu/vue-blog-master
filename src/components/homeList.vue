<template>
<div class="container">
  <div class="inner">
    <ul class="inner-list">
      <li class="blog-list"
          v-for="item in data.slice((currentPage-1)*pageSize,currentPage*pageSize)"
          :key="item._id">
        <card :title="item.title" :desc="item.desc" :content="item.content" :time="item.date" :id="item._id"></card>
      </li>
    </ul>
  </div>
  <div class="pagechange">
    <el-pagination
      small
      layout="prev, pager, next"
      @current-change="handleCurrentChange"
      :page-size="pageSize"
      :current-page="currentPage"
      :total="data.length">
    </el-pagination>
  </div>
</div>
</template>

<script>
  import card from "./card";
  import vueFooter from "./vueFooter";
    export default {
      name: "homeList",
      components:{card,vueFooter},
      data(){
        return{
          data:[],
          currentPage:1,
          pageSize:7,

        }
      },
      mounted() {
        this.getData()
      },
      methods:{
        getData(){
          this.$axios.get('article').then(res=>{
            console.log(res.data)
            this.data = res.data;
          })
        },
        handleCurrentChange(currentPage){
          this.currentPage = currentPage
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
    margin:0 auto;
    max-width: 800px;
  }
  .inner-list{
    list-style: none;
  }
  .blog-list{
    margin:10px;
    padding: 15px;
  }
  .pagechange{
    text-align: center;
  }
  .el-pagination{
    margin: 10px auto;
  }
</style>
