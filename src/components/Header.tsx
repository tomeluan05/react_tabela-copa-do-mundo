import 'bootstrap5/src/css/bootstrap.min.css'

function Header() {
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>Tabela da Copa do mundo 2022</h2>
                    <h1>Fase de grupos</h1>
                    <img className='mt-2' src="/world_cup.png" alt="Taça da copa do mundo do Qatar" width={100} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header