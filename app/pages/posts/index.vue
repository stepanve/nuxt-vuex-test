<template>
  <section class="container posts-page">
    <el-card>
      <div slot="header" class="clearfix">
        <span>新規投稿</span>
      </div>
      <el-table
        :data="showPosts"
        style="width: 100%"
        class="table"
        @row-click="handleClick"
      >
        <el-table-column
          prop="title"
          label="タイトル"
        />
        <el-table-column
          prop="user.id"
          label="投稿者"
          width="180"
        />
        <el-table-column
          prop="created_at"
          label="投稿日時"
          width="240"
        />
      </el-table>
    </el-card>
  </section>
</template>

<script>
import moment from '~/plugins/moment'
import { mapGetters } from 'vuex'

export default {
  computed: {
    showPosts() {
      return this.posts.map(post => {
        post.createdAt = moment(post.createdAt).format('YYYY/MM/DD HH:mm:ss')
        return post
      })
    },
    ...mapGetters('posts', ['posts'])
  },
  async asyncData({ store }) {
    await store.dispatch('posts/fetchPosts')
  },
  methods: {
    handleClick(post) {
      this.$router.push(`/posts/${post.id}`)
    }
  }
}
</script>

<style scoped>
.posts-page .el-table__row {
  cursor: pointer;
}
</style>
