
import { receiveUserData } from "../../scripts/receiveUserData.js";

import { renderPosts } from "../../scripts/renderPosts.js"

import { deletePost } from "../../scripts/deletePost.js"

import { createPost } from "../../scripts/createPost.js"

await receiveUserData()
await renderPosts()
await createPost()
await deletePost()
