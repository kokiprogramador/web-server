const { envs } = require('./config/.env');
const { startServer } = require('./server/server');
 
 
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
 