import ClaseComponent from '../componentes/ClaseComponent'
import Header from '../componentes/comunes/Header'
import {matematica,ciencia} from '../data/estudiantes'
import BarraTitulo from '../componentes/comunes/BarraTitulo'

export default ()=>(
	<div>
		<Header/>
		<BarraTitulo/>
		<h1 style={{textAlign:"Center"}}>Cursos del plan</h1>
		<div style={{display:"flex", justifyContent:"space-around"}}>
			<ClaseComponent nombre ="Matematicas" clase={matematica}/>
			<ClaseComponent nombre ="Ciencias" clase={ciencia}/>
		</div>
		<style jsx global>
		{
			`
				body{
					background:#ffca20;
				}

			`
		}
		</style>
	</div>
)

