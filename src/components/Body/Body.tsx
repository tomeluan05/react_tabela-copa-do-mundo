import styles from "./Body.module.css";

const Body = () => {
  return (
    <div>
      <div className={`container-fluid ${styles.body}`}>
        <div className={`row ${styles.alinha_tabelas}`}>
          <div className={`col-md-3 ${styles.times} pt-2 pb-1 tabela-grupos`}>
            <h4>Grupo A</h4>
            <div className="row">
              <table className="table table-bordered">
                <thead>
                  <tr className={styles.tabela_time}>
                    <th scope="col">Equipe</th>
                    <th scope="col">Pts</th>
                    <th scope="col">V</th>
                    <th scope="col">E</th>
                    <th scope="col">D</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={styles.tabela_time}>
                    <th scope="row">
                      <div>
                        <img
                          src="/holanda.png"
                          alt="Seleção da Holanda"
                          width={24}
                        />
                        <p>Holanda</p>
                      </div>
                    </th>
                    <td>4</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                  </tr>
                  <tr className={styles.tabela_time}>
                    <th scope="row">
                      <div>
                        <img
                          src="/equador.png"
                          alt="Seleção do Equador"
                          width={24}
                        />
                        <p>Equador</p>
                      </div>
                    </th>
                    <td>4</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                  </tr>
                  <tr className={styles.tabela_time}>
                    <th scope="row">
                      <div>
                        <img
                          src="/senegal.png"
                          alt="Seleção de Senegal"
                          width={24}
                        />
                        <p>Senegal</p>
                      </div>
                    </th>
                    <td>3</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                  </tr>
                  <tr className={styles.tabela_time}>
                    <th scope="row">
                      <div>
                        <img
                          src="/qtar.png"
                          alt="Seleção do Qatar"
                          width={24}
                        />
                        <p>Qatar</p>
                      </div>
                    </th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={`col-md-3 ${styles.times} pt-2 pb-1 tabela-grupos`}>
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
                        <img
                          src="/inglaterra.png"
                          alt="Seleção da Inglaterra"
                          width={24}
                        />
                        <p>Inglaterra</p>
                      </div>
                    </th>
                    <td>4</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src="/iran.png" alt="Seleção do Irã" width={24} />
                        <p>Irã</p>
                      </div>
                    </th>
                    <td>3</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img
                          src="/estados-unidos.png"
                          alt="Seleção dos Estados Unidos"
                          width={24}
                        />
                        <p>Estados Unidos</p>
                      </div>
                    </th>
                    <td>2</td>
                    <td>0</td>
                    <td>2</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img
                          src="/gales.png"
                          alt="Seleção de País de Gales"
                          width={24}
                        />
                        <p>País de Gales</p>
                      </div>
                    </th>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={`col-md-3 ${styles.times} pt-2 pb-1 tabela-grupos`}>
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
                        <img
                          src="/polonia.png"
                          alt="Seleção da Polônia"
                          width={24}
                        />
                        <p>Polônia</p>
                      </div>
                    </th>
                    <td>4</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img
                          src="/argentina.png"
                          alt="Seleção da Argentina"
                          width={24}
                        />
                        <p>Argentina</p>
                      </div>
                    </th>
                    <td>3</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img
                          src="/arabia-saudita.png"
                          alt="Seleção da Arábia Saudita"
                          width={24}
                        />
                        <p>Arábia Saudita</p>
                      </div>
                    </th>
                    <td>3</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img
                          src="/mexico.png"
                          alt="Seleção do México"
                          width={24}
                        />
                        <p>México</p>
                      </div>
                    </th>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={`col-md-3 ${styles.times} pt-2 pb-1 tabela-grupos`}>
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
                        <img
                          src="/franca.png"
                          alt="Seleção da França"
                          width={24}
                        />
                        <p>França</p>
                      </div>
                    </th>
                    <td>6</td>
                    <td>2</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img
                          src="/australia.png"
                          alt="Seleção da Austrália"
                          width={24}
                        />
                        <p>Austrália</p>
                      </div>
                    </th>
                    <td>3</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img
                          src="/dinamarca.png"
                          alt="Seleção da Dinamarca"
                          width={24}
                        />
                        <p>Dinamarca</p>
                      </div>
                    </th>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img
                          src="/tunisia.png"
                          alt="Seleção da Tunísia"
                          width={24}
                        />
                        <p>Tunísia</p>
                      </div>
                    </th>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className={`row ${styles.alinha_tabelas}`}>
          <div className={`col-md-12 ${styles.div_mascote_copa}`}>
            <img className={styles.mascote_copa} src="/mascote.png" alt="Mascote da copa do mundo do Qatar"
            />
          </div>
        </div>

        <div className={`row ${styles.alinha_tabelas}`}>
          <div className={`col-md-3 ${styles.times} pt-2 pb-1 tabela-grupos`}>
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
                        <img
                          src="/espanha.png"
                          alt="Seleção da Espanha"
                          width={24}
                        />
                        <p>Espanha</p>
                      </div>
                    </th>
                    <td>4</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                  </tr>

                  <tr>
                    <th scope="row">
                      <div>
                        <img
                          src="/japao.png"
                          alt="Seleção do Japão"
                          width={24}
                        />
                        <p>Japão</p>
                      </div>
                    </th>
                    <td>3</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img
                          src="/costa-rica.png"
                          alt="Seleção da Costa Rica"
                          width={24}
                        />
                        <p>Costa Rica</p>
                      </div>
                    </th>
                    <td>3</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img
                          src="/alemanha.png"
                          alt="Seleção da Alemanha"
                          width={24}
                        />
                        <p>Alemanha</p>
                      </div>
                    </th>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
          <div className={`col-md-3 ${styles.times} pt-2 pb-1 tabela-grupos`}>
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
                        <img
                          src="/croacia.png"
                          alt="Seleção da Croácia"
                          width={24}
                        />
                        <p>Croácia</p>
                      </div>
                    </th>
                    <td>4</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img
                          src="/marrocos.png"
                          alt="Seleção de Marrocos"
                          width={24}
                        />
                        <p>Marrocos</p>
                      </div>
                    </th>
                    <td>4</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img
                          src="/belgica.png"
                          alt="Seleção da Bélgica"
                          width={24}
                        />
                        <p>Bélgica</p>
                      </div>
                    </th>
                    <td>3</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img
                          src="/canada.png"
                          alt="Seleção do Canadá"
                          width={24}
                        />
                        <p>Canadá</p>
                      </div>
                    </th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={`col-md-3 ${styles.times} pt-2 pb-1 tabela-grupos`}>
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
                        <img
                          src="/brasil.png"
                          alt="Seleção do Brasil"
                          width={24}
                        />
                        <p>Brasil</p>
                      </div>
                    </th>
                    <td>6</td>
                    <td>2</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img
                          src="/suica.png"
                          alt="Seleção da Suíça"
                          width={24}
                        />
                        <p>Suíça</p>
                      </div>
                    </th>
                    <td>3</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img
                          src="/camaroes.png"
                          alt="Seleção de Camarões"
                          width={24}
                        />
                        <p>Camarões</p>
                      </div>
                    </th>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img
                          src="/servia.png"
                          alt="Seleção da Sérvia"
                          width={24}
                        />
                        <p>Sérvia</p>
                      </div>
                    </th>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
          <div className={`col-md-3 ${styles.times} pt-2 pb-1 tabela-grupos`}>
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
                        <img
                          src="/portugal.png"
                          alt="Seleção de Portugal"
                          width={24}
                        />
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
                        <img src="/gana.png" alt="Seleção de Gana" width={24} />
                        <p>Gana</p>
                      </div>
                    </th>
                    <td>3</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img
                          src="/uruguai.png"
                          alt="Seleção do Uruguai"
                          width={24}
                        />
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
                        <img
                          src="/korea-do-sul.png"
                          alt="Seleção da Corea do Sul"
                          width={24}
                        />
                        <p>Coreia do Sul</p>
                      </div>
                    </th>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
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
