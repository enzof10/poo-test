import RectangleView from "./view/rectangle-view/rectangle-view";

export default class App {

    constructor() {
    }

    async start(ouputApp = { titleElement: "Vista A" }) {
        const views = {
            viewA: () => new RectangleView("Vista A", "Siguiente", "color-rectangle-a"),
            viewB: () => new RectangleView("Vista B", "Siguiente", "color-rectangle-b"),
            viewC: () => new RectangleView("Vista C", "Siguiente", "color-rectangle-c",  "Reinciar"),
            viewD: () => new RectangleView("Vista D", "Atras", "color-rectangle-d",)
        }

        const responseA = await views.viewA().start(ouputApp.titleElement)
        const responseB = await views.viewB().start(responseA.titleElement)
        const responseC = await views.viewC().start(responseB.titleElement)
        const responseD = await views.viewD().start(responseC.titleElement)

    }
}