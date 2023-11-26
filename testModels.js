const { Like, Reply, Follow } = require('./models')

// const addLike = async () => {
//     const like = await Like.create({
//         postId: 2,
//         userId: 1,
//     })
// }
// addLike()

// const addReply = async () => {
//     const reply = await Reply.create({
//         content: "Hello",
//         postId: 2,
//         userId: 4,
//     })
// }
// addReply()

const follow = async () => {
    const follow = await Follow.create({
        followerId: 4,
        followingId: 1
    })
}
follow()