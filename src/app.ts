
import express, {Application} from 'express';
import morgan from 'morgan';
//Routes
import IndexRoutes from './routes/index.routes';
import UsuariosRoutes from './routes/usuarios.routes';
import VentasRoutes from './routes/ventas.routes';
import PiezapolloRoutes from './routes/piezapollo.route';
import InformesRoutes from './routes/informes.route';
import CortecajaRoutes from './routes/cortecaja.route';

export class App{

    private app: Application;

    constructor(private port: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes(){
        this.app.use(IndexRoutes);
        this.app.use('/usuarios',UsuariosRoutes);
        this.app.use('/ventas',VentasRoutes);
        this.app.use('/piezas',PiezapolloRoutes);
        this.app.use('/cortecaja',CortecajaRoutes);
        this.app.use('/informes',InformesRoutes);
    }

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('Server on port ', this.app.get('port'));
    }

}