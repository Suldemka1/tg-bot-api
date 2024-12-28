class ImageBotController {
    imageApiService

    constructor(imageApiService) {
        this.imageApiService = imageApiService
    }

    getRandomImage = async (ctx) => {
        const images = await this.imageApiService.getAll()
        const imageId = images[0]
        const imageLink = this.imageApiService.getLink(imageId)

        ctx.sendPhoto(imageLink)
    }
}

export {ImageBotController}