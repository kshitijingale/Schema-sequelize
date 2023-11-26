const { Post, User } = require("./models")

const createData = async () => {
    const user = await User.create({
        username: "Zoro",
        email: "zoro@email.com",
        display_name: "zoro",
        bio: "I will take a nap !!"
    })

    const post = await Post.create({
        content: "THREE SWORD STYLE",
        userId: 2
    })
}

createData()

// const fetchData = async () => {
//     const users = await User.findAll()
//     console.log(JSON.stringify(users, null, 2));
// }

// fetchData()

// const updateData = async () => {
//     const users = await User.update({ bio: "I am mosshead" }, {
//         where: {
//             id: 2
//         }
//     })
// }

// updateData()

// const deleteData = async () => {
//     const users = await User.destroy({
//         where: {
//             id: 1
//         }
//     })
// }

// deleteData()
