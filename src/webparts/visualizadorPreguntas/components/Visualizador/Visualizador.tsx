import * as React from 'react';
import styles from '../VisualizadorPreguntas.module.scss';

import { escape } from '@microsoft/sp-lodash-subset';

import Pregunta from '../Pregunta/Pregunta';
//import { IPreguntaProps } from '../Pregunta/IPreguntaProps';
import ManejadorAPI from '../../../../utils/manejadorAPI';
import { IVisualizadorProps } from './IVisualizadorProps';
import { IVisualizadorState } from './IVisualizadorState';

export default class Visualizador extends React.Component<IVisualizadorProps, IVisualizadorState> {
  private man: ManejadorAPI = new ManejadorAPI(this.props.urlSitio, this.props.nombreLista);

  constructor(props: Readonly<IVisualizadorProps>) {
    super(props);
    this.state = {
      datos: []
    };
  }
    
  async componentDidMount() {
    this.setState( {
      datos: await this.man.obtenerItems()
    });
  }

  public render(): React.ReactElement<IVisualizadorProps> {
    return (
      <div className={ styles.visualizadorPreguntas }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Preguntas Back Office</span>
              <p className={ styles.subTitle }>Visualizador de hilos de preguntas.</p>
              {/* pruebas */}
              <p><span>URL del sitio:</span> {this.props.urlSitio}</p>
              <p><span>Título del sitio:</span>{}</p>
              <p><span>Nombre de la lista:</span> {this.props.nombreLista}</p>

              {<Pregunta
                datos={this.state.datos}
              />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
