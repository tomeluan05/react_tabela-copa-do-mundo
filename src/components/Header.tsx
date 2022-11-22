import './Header.css'

type Props = {
  title: string,
  subTitle: string
}

function Header({title, subTitle}:Props) {
  return (
    <div>
        <div className="container-fluid header">
            <div className="row p-3 pb-4 d-flex align-items-center">
                <div className="col-md-1 text-center">
                <img className='mt-2 imagem-copa' src="/world-cup.png" alt="Taça da copa do mundo do Qatar" />
                </div>
                <div className="col-md-11 text-center pt-2 text-light">
                    <h2>{title}</h2>
                    <h2>{subTitle}</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header