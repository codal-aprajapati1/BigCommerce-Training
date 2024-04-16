export default class PageManager {
    constructor(context) {
        this.context = context;
    }

    type() {
        return this.constructor.name;
    }

    onReady() {
    }

    static load(context) {
        const page = new this(context);
        // let var={{theme_settings.name}}

        $(document).ready(() => {
            page.onReady.bind(page)();
            // console.log({{{theme_settings.name}}});
        });
    }
}
