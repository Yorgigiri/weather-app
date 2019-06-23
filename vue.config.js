module.exports = {
    publicPath: '',
    css: {
        modules: true,
        loaderOptions: {
            sass: {
                data: `
                @import "@/assets/scss/main.scss";
                `
            }
        }
    }
}