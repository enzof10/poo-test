import View from "../../../core/view/view";
import html from "./rectangle-view.html";
import "./rectangle-view.scss";
import Utils from "../../../core/utils";
import App from "../../app";

export default class RectangleView extends View {

    constructor(ouputLastView  = 0, textTitle, textButtonAhead, colorRect, textButtonBack, onClickBack) {
        super(html);
        this.colorRect = colorRect;
        this.textTitle = textTitle;
        this.textButtonBack = textButtonBack;
        this.textButtonAhead = textButtonAhead;
        this.onClickBack = onClickBack;
        this.ouputLastView = ouputLastView
        this.init();
    }


    async init() {
        const buttonNext = this.viewElement.querySelector(".rectangle-button-next")
        const buttonBack = this.viewElement.querySelector(".rectangle-button-back")
        let inputRectangle = this.viewElement.querySelector(".rectangle-input")
        let ouputRectangle = this.viewElement.querySelector(".rectangle-ouput")
        this.viewElement.querySelector(".rectangle").classList.add(this.colorRect)
        this.viewElement.querySelector(".rectangle-title").innerHTML = this.textTitle
        this.viewElement.querySelector(".rectangle-container").parentElement.classList.remove("view")
        buttonNext.innerHTML = this.textButtonAhead


        if (this.textTitle !== "Vista A") {
            inputRectangle && inputRectangle.remove()
            ouputRectangle.innerHTML = this.ouputLastView
        }else{
            Utils.onChange(inputRectangle, (e) => {
                inputRectangle.value = e.target.value
            })
        }

        if (!this.textButtonBack) {
            buttonBack.remove()
        } else {
            buttonBack.innerHTML = this.textButtonBack
            Utils.onClick(buttonBack, async (e) => {
                const ouputLastView = inputRectangle.value || this.ouputLastView
                this.onClickBack({ titleElement: this.textTitle })
                this.end({ titleElement: this.textTitle, restart: true, ouputLastView })
            })
        }

        Utils.onClick(buttonNext, (e) => {
            const ouputLastView = inputRectangle.value || this.ouputLastView
            this.end({ titleElement: this.textTitle, ouputLastView })
        })


    }

}