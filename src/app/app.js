import RectangleView from "./view/rectangle-view/rectangle-view";

export default class App {

    constructor() {
    }

    async start(ouputApp = { titleElement: "Vista A" }) {
        const views = {
            viewA: () => new RectangleView("Vista A", "Siguiente", "color-rectangle-a"),
            viewB: () => new RectangleView("Vista B", "Siguiente", "color-rectangle-b"),
            viewC: () => new RectangleView("Vista C", "Siguiente", "color-rectangle-c",  "Reinciar", onClickBack),
            viewD: () => new RectangleView("Vista D", "Atras", "color-rectangle-d",)
        }

        const onClickBack = (titleElement) => {
            this.start(titleElement)
        };

        let firstResponse
        if (ouputApp.titleElement !== "Vista D") {
            firstResponse = await views.viewA(null).start(ouputApp)
        } else {
            firstResponse = ouputApp
        }
        const responseB = await views.viewB().start(firstResponse.titleElement)
        const responseC = await views.viewC().start(responseB.titleElement)
        if (!responseC.restart) {
            const responseD = await views.viewD().start(responseC.titleElement)
            this.start(responseD)
        }

    }
}