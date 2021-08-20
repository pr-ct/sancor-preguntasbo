import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'VisualizadorPreguntasWebPartStrings';
import VisualizadorPreguntas from './components/Visualizador/Visualizador';
import { IVisualizadorProps } from './components/Visualizador/IVisualizadorProps';

import ManejadorAPI from '../../utils/manejadorAPI';
import { nombreLista, urlSitio } from 'VisualizadorPreguntasWebPartStrings';
export interface IVisualizadorPreguntasWebPartProps {
  urlSitio: string;
  nombreLista: string;
}

export default class VisualizadorPreguntasWebPart extends BaseClientSideWebPart<IVisualizadorPreguntasWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IVisualizadorProps> = React.createElement(
      VisualizadorPreguntas, {
        urlSitio: this.properties.urlSitio,
        nombreLista: this.properties.nombreLista
      });
    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.GroupName,
              groupFields: [
                PropertyPaneTextField('urlSitio', {
                  label: strings.urlSitio
                }),
                PropertyPaneTextField('nombreLista', {
                  label: strings.nombreLista
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
