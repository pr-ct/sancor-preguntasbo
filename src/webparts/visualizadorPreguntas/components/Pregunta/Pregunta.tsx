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
                <p>{this.props.datos.d.results[0].AuthorId}</p>
                <p>{this.props.datos.d.results[0].Contenido}</p>
            </div>
        );
    }
}