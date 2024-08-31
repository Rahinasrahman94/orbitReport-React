import "./styling.css";
const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <td>Name</td>
          </th>
          <th>
            <td>Type of Satellite</td>
          </th>
          <th>
            <td>Launch Date</td>
          </th>
          <th>
            <td>Status</td>
          </th>
        </tr>
      </thead>
      <tbody>
        {sat.map((data) => {
          return (
            <tr key={data.id}>
              <td> {data.name}</td>
              <td> {data.type} </td>
              <td> {data.launchDate}</td>
              <td>
                {data.operational === true ? (
                  <span style={{ color: "green" }}>Active</span>
                ) : (
                  <span style={{ color: "red" }}>Inactive</span>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
