import React from "react"
import Layout from "components/PageLayout"
import Helmet from "components/Helmet"
import { Card } from "components/Core"

const PostPage = () => {
  return (
    <Layout>
      <Helmet title="POST" />
      <Card>
        <h1>POST</h1>
      </Card>
    </Layout>
  )
}

export default PostPage
