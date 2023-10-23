import Table from 'react-bootstrap/Table';

export default function ListTable ({receivers}) {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {receivers.map(
                        (r) => <tr>
                            <td>
                                <input type={"checkbox"}/>
                            </td>
                            {Object.keys(r).map((x) => <td>{r[x]}</td>)}
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}