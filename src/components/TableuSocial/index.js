import { Box } from "../Box"
import styled from 'styled-components';

const Table = styled.table`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 100px;
  border: 2px solid #12121250;
  width: 50vw;

  thead {
    text-align: left;
  }

  th {
    border: 1px solid whitesmoke;
  }

  td {
    border: 1px solid whitesmoke;
  }
`

export default function TableSocial() {
    return (
        <Box>
            <h2 className="subTitle">
                Dados do seu perfil:
            </h2>
            <Table>
                <thead>
                    <tr>
                        <th>Aniversário</th>
                    </tr>
                    <tr>
                        <th>Quem sou eu</th>
                    </tr>
                    <tr>
                        <th>Estado</th>
                    </tr>
                    <tr>
                        <th>País</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22 de maio</td>
                    </tr>
                    <tr>
                        <td>Desenvolvedor frontend</td>
                    </tr>
                    <tr>
                        <td>Minas Gerais</td>
                    </tr>
                    <tr>
                        <td>Brasil</td>
                    </tr>
                </tbody>
            </Table>
        </Box>
    )
}