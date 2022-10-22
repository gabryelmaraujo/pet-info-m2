
import { receiveUserData } from "../../scripts/receiveUserData.js";

import { renderPosts } from "../../scripts/renderPosts.js"

import { deletePost } from "../../scripts/deletePost.js"

await receiveUserData()
await renderPosts()
await deletePost()
