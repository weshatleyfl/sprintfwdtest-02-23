import axios from "axios";
import Table from "../../components/Table";
import { useFetch } from "../../hooks/useFetch";
import "./membersPage.css";
import { columns } from "./membersPageConfig";

function MembersPage() {
  const fetchTableData = () => axios.get("./members.json");
  const { data: dataTable, loading } = useFetch(fetchTableData);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="MembersPage">
      <h1>Members Info</h1>
      {<Table data={dataTable?.members || []} columns={columns} />}
    </div>
  );
}

export default MembersPage;
