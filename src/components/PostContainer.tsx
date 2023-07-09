import React from "react";
import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostService";
import { PostItem } from "./PostItem";

export default function PostContainer() {
  const { data: posts } = postAPI.useFetchAllPostsQuery(5);
  const [createPost, {}] = postAPI.useCreatePostMutation();
  const handleCreate = async() =>{
    const title = prompt()
    await createPost({title, body: title} as IPost)
  }
  return (
    <div className="post__list">
      {posts && posts.map((post) => <PostItem post={post} key={post.id} />)}
    </div>
  );
}
