import View from "../../../core/view/view";
import html from "./rectangle-view.html";
import "./rectangle-view.scss";
import Utils from "../../../core/utils";

export default class RectangleView extends View {

    constructor(textTitle, textButtonAhead, colorRect, textButtonBack) {
        super(html);
        this.colorRect = colorRect;
        this.textTitle = textTitle;
        this.textButtonBack = textButtonBack
        this.textButtonAhead = textButtonAhead;
        this.init();
    }


    async init() {
        const buttonNext = this.viewElement.querySelector(".rectangle-button-next")
        const buttonBack = this.viewElement.querySelector(".rectangle-button-back")
        this.viewElement.querySelector(".rectangle").classList.add(this.colorRect)
        this.viewElement.querySelector(".rectangle-title").innerHTML = this.textTitle
        this.viewElement.querySelector(".rectangle-container").parentElement.classList.remove("view")
        buttonNext.innerHTML = this.textButtonAhead

        if (!this.textButtonBack) {
            buttonBack.remove()
        } else {
            buttonBack.innerHTML = this.textButtonBack
            Utils.onClick(buttonBack, (e) => {
                this.end({ titleElement: this.textTitle })
            })
        }

        Utils.onClick(buttonNext, (e) => {
            this.end({ titleElement: this.textTitle })
        })


    }

}