import * as React from 'react';

import { IPreguntaProps } from './IPreguntaProps';
import styles from './Pregunta.module.scss';

export default class Pregunta extends React.Component<IPreguntaProps, {}> {

    public render(): React.ReactElement<IPreguntaProps> {
        return (
            <div className={styles.pregunta}>
                <p>{this.props.idPregunta}</p>
                <p>{this.props.descripcion}</p>
            </div>
        )
    }
}