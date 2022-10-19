import RectangleView from "../rectangle-view/rectangle-view";
import Utils from "../../../core/utils";
import "./d-view.scss"

export default class DView extends RectangleView {

    constructor(ouputLastView = 0, textTitle, textButtonAhead, colorRect, textButtonBack, onClickBack) {
        super(ouputLastView, textTitle, textButtonAhead, colorRect, textButtonBack, onClickBack);
        this.clickButton = document.createElement("button")
        this.wait5OrClickButton = document.createElement("button")
        this.wait3OrClickButton = document.createElement("button")
        this.addButtons();
    }

    async waitForClick(element,) {
        return new Promise(resolve => {
            Utils.onClick(element, () => {
                resolve("Click")
            })
        })
    }

    async waitFor5() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("5 o click")
            }, 5000);
        })
    }

    async waitFor3() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("3 o click")
            }, 3000);
        })
    }


    addButtons() {
        const containerButtons = document.createElement("div")
        this.clickButton.innerHTML = "Click"
        this.wait5OrClickButton.innerHTML = "5 o Click"
        this.wait3OrClickButton.innerHTML = "3 o Click"

        containerButtons.appendChild(this.clickButton)
        containerButtons.appendChild(this.wait5OrClickButton)
        containerButtons.appendChild(this.wait3OrClickButton)
        Utils.insertAfter(this.viewElement.querySelector(".rectangle-ouput"), containerButtons)
        this.viewElement.querySelector(".rectangle-ouput").remove()

        Promise.allSettled([this.waitFor3(), this.waitForClick(this.wait3OrClickButton)]).then(res => {
            alert("3 o click")
        })
        Promise.any([this.waitFor5(), this.waitForClick(this.clickButton)]).then(res => {
            alert("5 o click")
        })

    }

}