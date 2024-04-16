import createPost from './createPost'

createPost('6617c3ad89de5e9374288e3f', 'https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png', 'hello mern', error => {
    if (error) {
        console.error(error)

        return
    }

    console.log('post created')
})