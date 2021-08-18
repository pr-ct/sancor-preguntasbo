import * as React from 'react';
import styles from '../VisualizadorPreguntas.module.scss';
import { IVisualizadorPreguntasProps } from './IVisualizadorProps';
import { escape } from '@microsoft/sp-lodash-subset';

import Pregunta from '../Pregunta/Pregunta';

// import ManejadorAPI from '../../../../utils/ManejadorAPI';

export default class VisualizadorPreguntas extends React.Component<IVisualizadorPreguntasProps, {}> {
  public render(): React.ReactElement<IVisualizadorPreguntasProps> {
    return (
      <div className={ styles.visualizadorPreguntas }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Preguntas Back Office</span>
              <p className={ styles.subTitle }>Visualizador de hilos de preguntas.</p>
              <p className={ styles.description }>{escape()}</p>
              {/* pruebas */}
              <p><span>URL del sitio:</span> {this.props.urlSitio}</p>
              <p><span>Nombre de la lista:</span> {this.props.nombreLista}</p>

              <Pregunta 
                idPregunta={1}
                descripcion={"Esta es una prueba del componente Preguntas"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
