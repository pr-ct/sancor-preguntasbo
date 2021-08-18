import ManejadorAPI from "./manejadorAPI";

export default class ManejadorHilo {
    // para hacer

    private man: ManejadorAPI;

    constructor(url: string, lista: string) {
        this.man = new ManejadorAPI(url, lista);
    }

    public renderAll(items: any[]): string { // revisar tipos
        let listaDatos: any =  this.man.obtenerItems();
        let html: string = '';
        listaDatos.forEach((it: any) => {
            html += `
                <ul>
                    <li>
                        <span>${it.Id}</span> - <span>${it.Pregunta}</span>
                    </li>
                </ul>
            `;
        });
        return html;
    }
}