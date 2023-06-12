import axios from "axios";
import Table from "../../components/Table";
import { useFetch } from "../../hooks/useFetch";
import "./teamsPage.css";
import { columns } from "./teamsPageConfig";

function TeamsPage() {
  const fetchTableData = () => axios.get("./teams.json");
  const { data: dataTable, loading } = useFetch(fetchTableData);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="TeamsPage">
      <h1>Teams Info</h1>
      <Table data={dataTable?.teams || []} columns={columns} />
    </div>
  );
}

export default TeamsPage;
