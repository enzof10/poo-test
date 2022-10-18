import View from "../../../core/view/view";
import html from "./text-view.html";
import "./text-view..scss";
import Utils from "../../../core/utils";

export default class TextView extends View {

    /**
     * Esta vista muestra un texto por 1 segundos y termina.
     */

    constructor(text) {
        super(html);
        this.text = text;
        this.init();
    }


    async init() {
        // viewElement está definido en View, y es el contenedor de la vista.
        this.viewElement.querySelector(".text-container").innerHTML = this.text;

        await Utils.waitForSeconds(1);

        this.end(); // <- Acá podría retornar una salida, pero esta vista no tiene salida.
    }

}