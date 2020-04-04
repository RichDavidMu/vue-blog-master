<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column><el-table-column
      label="标题"
      width="380">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.title }}</span>
      </template>
    </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.row._id)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete( scope.row._id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
    export default {
        name: "new",
      data() {
        return {
          tableData: []
        }
      },
      mounted() {
        this.getData()
      },
      methods:{
          handleEdit(id){
            this.$router.push({name:'new',query:{id:id}})
          },
          handleDelete(id){
            this.$axios.delete(`/article/${id}`)
              .then((res)=>{alert(res.data)
              console.log(res.data)})
              .catch((res)=>{alert(res.data)})
            this.getData()
        },
          getData() {
            this.$axios.get('/article')
              .then((res) => {
                console.log(res.data);
                res.data.map((item) => {
                  let d = new Date(Date.parse(item.date))
                  item.date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
                })
                this.tableData = res.data;
              }).catch((reason) => {
              alert(reason)
            })
          }
        }

    }
</script>

<style scoped>

</style>
