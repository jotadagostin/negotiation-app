export class View {
    constructor(selector, escape) {
        this.escape = false;
        const element = document.querySelector(selector);
        if (element) {
            this.element = element;
        }
        else {
            throw Error(`Selector ${selector} does not exist in DOM. Please check it`);
        }
        if (escape) {
            this.escape = escape;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this.element.innerHTML = template;
    }
}
