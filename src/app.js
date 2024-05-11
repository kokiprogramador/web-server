import { envs } from './config/.env.js';
import { startServer }  from './server/server.js';
 
 
 const main = () =>{
	 startServer({
		 port: envs.PORT,
		 public_path: envs.PUBLIC_PATH
	 })
 }
 
//Función agnostica auto-convocada
//Agnóstica porque no tiene nombre
//Auto-convodada porque la ejecutamos con los parentesis del último 

( async () => {
	main()
 })()
 