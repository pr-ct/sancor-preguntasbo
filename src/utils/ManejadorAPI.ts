export default class ManejadorAPI {
    private apiEndpoint: string = "/_api/web/lists/";
    private _urlSitio: string;
    private _nombreLista: string;

    set urlSitio(val: string) {
        this._urlSitio = val;
    }
    get urlSitio() {
        return this._urlSitio;
    }

    set nombreLista(val: string) {
        this._nombreLista = val;
    }

    constructor(url: string, lista: string) {
        this.urlSitio = url;
        this.nombreLista = lista;
    }

    public async obtenerItemPorId(id: number): Promise<any> { // revisar el tipo de la promesa
        const response = await fetch(this.urlSitio + this.apiEndpoint + `GetByTitle(${this.nombreLista})/items${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json;odata=verbose'
            }
        })
        return await response.json();
    }
}