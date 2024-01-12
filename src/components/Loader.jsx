import { DotSpinner } from '@uiball/loaders';

export const Loader = () => {
	return (
        <div className="container-loader">
            <DotSpinner size={40} speed={0.9} color='black' />;
        </div>
    )
};

///Esto es para el gif del cargar
// lo que hace aqui es exportar el que nos descargamos de @uiball
// la linea 6 es como css