
import { receiveUserData } from "../../scripts/receiveUserData.js";

import { renderPosts } from "../../scripts/renderPosts.js"

import { deletePost } from "../../scripts/deletePost.js"

import { createPost } from "../../scripts/createPost.js"

import { deslogarFunction } from "../../scripts/logout.js"

import { acessarPost } from "../../scripts/acessarPost.js"

import { verifyLogin } from "../../scripts/verifyLogin.js"

verifyLogin()
await receiveUserData()
await renderPosts()
await deletePost()
await acessarPost()
await createPost()
await deslogarFunction()
