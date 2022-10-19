import "./c-view.scss";
import RectangleView from "../rectangle-view/rectangle-view";
import Utils from "../../../core/utils";

export default class Cview extends RectangleView {

    constructor(ouputLastView  = 0, textTitle, textButtonAhead, colorRect, textButtonBack, onClickBack) {
        super(ouputLastView, textTitle, textButtonAhead, colorRect, textButtonBack, onClickBack);
        this.isFirstClass = false
        this.rectangleContainer = this.viewElement.querySelector(".rectangle-container")
        this.addSwap();
    }

    addFirstClass(){
        this.rectangleContainer.classList.remove("rectangle-c-second")
        this.rectangleContainer.classList.add("rectangle-c-first")
        this.isFirstClass = true
    }

    addSecondClass(){
        this.rectangleContainer.classList.remove("rectangle-c-first")
        this.rectangleContainer.classList.add("rectangle-c-second")
        this.isFirstClass = false
    }

    async addSwap() {
        const swap = document.createElement("button")
        swap.id = "swap"
        swap.innerHTML = "Swap"
        Utils.insertAfter(this.viewElement.querySelector(".rectangle-ouput"), swap)
        if(this.ouputLastView <10 ){
            this.addFirstClass()
        }else{
            this.addSecondClass()
        }

        Utils.onClick(swap,(e)=>{
            if(this.isFirstClass){
                this.addSecondClass()
            }else{
                this.addFirstClass()
            }
        })


    }

}