declare interface IVisualizadorPreguntasWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;

  urlSitio: string;
  nombreLista: string;
}

declare module 'VisualizadorPreguntasWebPartStrings' {
  const strings: IVisualizadorPreguntasWebPartStrings;
  export = strings;
}
