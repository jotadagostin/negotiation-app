import { NegotiationController } from "./controllers/negotiation-controller.js";
const controller = new NegotiationController();
const form = document.querySelector(".form");
if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        controller.add();
    });
}
else {
    throw Error(" it was not possible to start the aplication. Check if form exist");
}
const importButton = document.querySelector("#botao-importa");
if (importButton) {
    importButton.addEventListener("click", () => {
        controller.importDate();
    });
}
else {
    throw Error("Button was not founded!");
}
//# sourceMappingURL=app.js.map