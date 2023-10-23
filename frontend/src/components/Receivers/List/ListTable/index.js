import Table from 'react-bootstrap/Table';

export default function ListTable ({receivers}) {
    let checked_receivers = {};
    receivers.map(
        (r) => checked_receivers[r["id"]] = false
    )
    function checkReceiver (event, id) {
        checked_receivers[id] = event.target.checked;
        console.log(checked_receivers);
    }

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
                                <input
                                    type={"checkbox"}
                                    onClick={(event) => checkReceiver(event, r["id"])}
                                />
                            </td>
                            {Object.keys(r).map((x) => <td>{r[x]}</td>)}
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}