import * as React from 'react';

import { IPreguntaProps } from './IPreguntaProps';
import styles from './Pregunta.module.scss';

export default class Pregunta extends React.Component<IPreguntaProps, {}> {

    constructor(props: Readonly<IPreguntaProps>) {
        super(props);
    }

    public render(): React.ReactElement<IPreguntaProps> {
        console.log(this.props.datos);
        if (this.props.datos.length === 0) return null;
        return (
            <div className={styles.pregunta}>
                <h1>ID: {this.props.datos.ID} - {this.props.datos.Title}</h1>
                <h4>Contenido: </h4>
                <p>{this.props.datos.Contenido}</p>
                <h4>Respuesta: </h4>
                <p>{this.props.datos.Respuesta}</p>
            </div>
        );
    }
}