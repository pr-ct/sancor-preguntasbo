

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
    get nombreLista() {
        return this._nombreLista;
    }

    constructor(url: string, lista: string) {
        this.urlSitio = url;
        this.nombreLista = lista;
    }

    public async obtenerItems(): Promise<any> { // revisar el tipo de la promesa
        //console.log(this.urlSitio, this.apiEndpoint, this.nombreLista);
        const response = await fetch(this.urlSitio + this.apiEndpoint + `GetByTitle(\'${this.nombreLista}\')/items`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json;odata=verbose'
            }
        });
        return response.json();
    }
    // implementar la función para una pregunta y sus continuaciones
}