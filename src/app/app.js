import TextView from "./view/text-view/text-view";

export default class App {

    constructor() {

    }

    async start() {
        await (new TextView("El")).start();
        await (new TextView("proyecto")).start();
        await (new TextView("funciona")).start();
        await (new TextView("correctamente!")).start();
    }
}