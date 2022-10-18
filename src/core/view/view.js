import "./view.scss";
import Utils from "../utils";


export default class View {

    constructor(html, parent = null) {
        this._inputData = null;
        this._parent = parent == null ? document.body : parent;
        /**
         *
         * @type {HTMLElement}
         */
        this.viewElement = document.createElement("div");
        this.viewElement.innerHTML = html;
        this.viewElement.classList.add("view", Utils.camelToKebabCase(this.constructor.name));
        /**
         *
         * @type {Promise<ViewOutput|null>}
         */
        this._callbackPromise = null;

        this._parent.prepend(this.viewElement);
    }

    /**
     *
     * Starts the new view. It adds the html to the page and starts the transition from the previous page (via ViewManager)
     * This function resolves once the view ends.
     *
     * @param inputData : Input provided to the View
     * @returns {Promise<ViewOutput|null>} : Resolved once the view ends
     */
    async start(inputData = null) {
        this._inputData = inputData;
        this._callbackPromise = Utils.deferredPromise(); // Resolved when the view ends.
        return this._callbackPromise.promise;
    }


    end(output) {
        this.viewElement.remove();
        if (this._callbackPromise != null) {
            this._callbackPromise.resolve(output);
        }
    }

}

