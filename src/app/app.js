import RectangleView from "./view/rectangle-view/rectangle-view";

export default class App {

    constructor() {
    }

    async start(ouputApp = { titleElement: "Vista A" }, isFromD) {
        const views = {
            viewA: (ouputLastView) => new RectangleView(ouputLastView, "Vista A", "Siguiente", "color-rectangle-a"),
            viewB: (ouputLastView, isFromD) => new RectangleView(isFromD ? ouputLastView : ouputLastView + 5, "Vista B", "Siguiente", "color-rectangle-b"),
            viewC: (ouputLastView) => new RectangleView(ouputLastView, "Vista C", "Siguiente", "color-rectangle-c", "Reinciar", onClickBack),
            viewD: (ouputLastView) => new RectangleView(8, "Vista D", "Atras", "color-rectangle-d"),
        }

        const onClickBack = (titleElement) => {
            this.start(titleElement)
        };

        let firstResponse
        if (!isFromD) {
            firstResponse = await views.viewA(null).start(ouputApp)
        } else {
            firstResponse = ouputApp
        }
        const responseB = await views.viewB(Number(firstResponse.ouputLastView), isFromD ).start(firstResponse.titleElement)
        const responseC = await views.viewC(responseB.ouputLastView).start(responseB.titleElement)
        if (!responseC.restart) {
            const responseD = await views.viewD(Number(responseC.ouputLastView)).start(responseC.titleElement)
            this.start(responseD, true)
        }

    }
}