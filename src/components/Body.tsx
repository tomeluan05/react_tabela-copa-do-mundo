import "./Body.css";

const Body = () => {
  return (
    <div>
      <div className="container-fluid body">
        <div className="row alinha-tabelas">

          <div className="col-md-3 times pt-2 pb-1 tabela-grupos">
            <h4>Grupo A</h4>
            <div className="row">
              <table className="table table-bordered">
                <thead>
                  <tr className="tabela-time">
                    <th scope="col">Equipe</th>
                    <th scope="col">Pts</th>
                    <th scope="col">V</th>
                    <th scope="col">E</th>
                    <th scope="col">D</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tabela-time">
                    <th scope="row">
                      <div>
                        <img src="/qtar.png" alt="" width={24} />
                        <p>Qatar</p>
                      </div>
                    </th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                  </tr>
                  <tr className="tabela-time">
                    <th scope="row">
                      <div>
                        <img src="/equador.png" alt="" width={24} />
                        <p>Equador</p>
                      </div>
                    </th>
                    <td>3</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr className="tabela-time">
                    <th scope="row">
                      <div>
                        <img src="/senegal.png" alt="" width={24} />
                        <p>Senegal</p>
                      </div>
                    </th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                  </tr>
                  <tr className="tabela-time">
                    <th scope="row">
                      <div>
                        <img src="/holanda.png" alt="" width={24} />
                        <p>Holanda</p>
                      </div>
                    </th>
                    <td>3</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-3 times pt-2 pb-1">
            <h4>Grupo B</h4>

            <div className="row">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Equipe</th>
                    <th scope="col">Pts</th>
                    <th scope="col">V</th>
                    <th scope="col">E</th>
                    <th scope="col">D</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/inglaterra.png" alt="" width={24} />
                        <p>Inglaterra</p>
                      </div>
                    </th>
                    <td>3</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/iran.png" alt="" width={24} />
                        <p>Irã</p>
                      </div>
                    </th>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/estados-unidos.png" alt="" width={24} />
                        <p>Estados Unidos</p>
                      </div>
                    </th>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/gales.png" alt="" width={24} />
                        <p>País de Gales</p>
                      </div>
                    </th>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-md-3 times pt-2 pb-1">
            <h4>Grupo C</h4>

            <div className="row">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Equipe</th>
                    <th scope="col">Pts</th>
                    <th scope="col">V</th>
                    <th scope="col">E</th>
                    <th scope="col">D</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/argentina.png" alt="" width={24} />
                        <p>Argentina</p>
                      </div>
                    </th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/arabia-saudita.png" alt="" width={24} />
                        <p>Arábia Saudita</p>
                      </div>
                    </th>
                    <td>3</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/mexico.png" alt="" width={24} />
                        <p>México</p>
                      </div>
                    </th>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/polonia.png" alt="" width={24} />
                        <p>Polônia</p>
                      </div>
                    </th>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-3 times pt-2 pb-1">
            <h4>Grupo D</h4>

            <div className="row">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Equipe</th>
                    <th scope="col">Pts</th>
                    <th scope="col">V</th>
                    <th scope="col">E</th>
                    <th scope="col">D</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/franca.png" alt="" width={24} />
                        <p>França</p>
                      </div>
                    </th>
                    <td>3</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/australia.png" alt="" width={24} />
                        <p>Austrália</p>
                      </div>
                    </th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/dinamarca.png" alt="" width={24} />
                        <p>Dinamarca</p>
                      </div>
                    </th>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/tunisia.png" alt="" width={24} />
                        <p>Tunísia</p>
                      </div>
                    </th>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row alinha-tabelas">
          <div className="col-md-12 div-mascote-copa">
            <img
              className="mascote-copa"
              src="/mascote.png"
              alt="Mascote da copa do mundo do Qatar"
            />
          </div>
        </div>

        <div className="row alinha-tabelas">
          <div className="col-md-3 times pt-2 pb-1">
            <h4>Grupo E</h4>



            <div className="row">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Equipe</th>
                    <th scope="col">Pts</th>
                    <th scope="col">V</th>
                    <th scope="col">E</th>
                    <th scope="col">D</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/espanha.png" alt="" width={24} />
                        <p>Espanha</p>
                      </div>
                    </th>
                    <td>3</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/costa-rica.png" alt="" width={24} />
                        <p>Costa Rica</p>
                      </div>
                    </th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/alemanha.png" alt="" width={24} />
                        <p>Alemanha</p>
                      </div>
                    </th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/japao.png" alt="" width={24} />
                        <p>Japão</p>
                      </div>
                    </th>
                    <td>3</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>


          </div>
          <div className="col-md-3 times pt-2 pb-1">
            <h4>Grupo F</h4>

            <div className="row">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Equipe</th>
                    <th scope="col">Pts</th>
                    <th scope="col">V</th>
                    <th scope="col">E</th>
                    <th scope="col">D</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/belgica.png" alt="" width={24} />
                        <p>Belgica</p>
                      </div>
                    </th>
                    <td>3</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/canada.png" alt="" width={24} />
                        <p>Canadá</p>
                      </div>
                    </th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/marrocos.png" alt="" width={24} />
                        <p>Marrocos</p>
                      </div>
                    </th>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/croacia.png" alt="" width={24} />
                        <p>Croácia</p>
                      </div>
                    </th>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
          <div className="col-md-3 times pt-2 pb-1">
            <h4>Grupo G</h4>

            <div className="row">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Equipe</th>
                    <th scope="col">Pts</th>
                    <th scope="col">V</th>
                    <th scope="col">E</th>
                    <th scope="col">D</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/brasil.png" alt="" width={24} />
                        <p>Brasil</p>
                      </div>
                    </th>
                    <td>3</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/servia.png" alt="" width={24} />
                        <p>Sérvia</p>
                      </div>
                    </th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/suica.png" alt="" width={24} />
                        <p>Suíça</p>
                      </div>
                    </th>
                    <td>3</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/camaroes.png" alt="" width={24} />
                        <p>Camarões</p>
                      </div>
                    </th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
          <div className="col-md-3 times pt-2 pb-1">
            <h4>Grupo H</h4>

            <div className="row">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Equipe</th>
                    <th scope="col">Pts</th>
                    <th scope="col">V</th>
                    <th scope="col">E</th>
                    <th scope="col">D</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/portugal.png" alt="" width={24} />
                        <p>Portugal</p>
                      </div>
                    </th>
                    <td>3</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/gana.png" alt="" width={24} />
                        <p>Gana</p>
                      </div>
                    </th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/uruguai.png" alt="" width={24} />
                        <p>Uruguai</p>
                      </div>
                    </th>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/korea-do-sul.png" alt="" width={24} />
                        <p>Coreia do Sul</p>
                      </div>
                    </th>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
