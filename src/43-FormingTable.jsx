const FormingTable = () => {
  const users = [
    { id: 1, name: "user1", surn: "surn1", age: 30 },
    { id: 2, name: "user2", surn: "surn2", age: 31 },
    { id: 3, name: "user3", surn: "surn3", age: 32 },
  ];

  const rows = users.map(function (user) {
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.surn}</td>
        <td>{user.age}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <td>id</td>
          <td>имя</td>
          <td>фамилия</td>
          <td>возраст</td>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default FormingTable;
