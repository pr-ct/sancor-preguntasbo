declare interface IVisualizadorPreguntasWebPartStrings {
  PropertyPaneDescription: string;
  GroupName: string;
  DescriptionFieldLabel: string;

  urlSitio: string;
  nombreLista: string;
}

declare module 'VisualizadorPreguntasWebPartStrings' {
  const strings: IVisualizadorPreguntasWebPartStrings;
  export = strings;
}
