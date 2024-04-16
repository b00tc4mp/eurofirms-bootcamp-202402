import retrievePosts from './retrievePosts'

retrievePosts('6617c3ad89de5e9374288e40', (error, posts) => {
    if (error) {
        console.error(error)

        return
    }

    console.log('retrieved posts', posts)
})