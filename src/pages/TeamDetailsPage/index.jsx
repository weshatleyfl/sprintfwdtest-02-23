import axios from "axios";
import Table from "../../components/Table";
import { useFetch } from "../../hooks/useFetch";
import { columns } from "./teamDetailsPageConfig";
import "./teamDetailsPage.css";
import { useParams } from "react-router-dom";


function TeamDetailsPage() {
  const fetchTableData = () => axios.get("members.json",{baseURL:'/'});
  const { data: dataTable, loading } = useFetch(fetchTableData);
 const {id} = useParams()

  const getTeamMembers = ()=>{
   const filteredData = dataTable?.members.filter((member)=> Number(member.team.id) === Number(id))
   return filteredData
  }
  const teamMembersData = getTeamMembers()
  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="TeamDetailsPage">
      <h1>{`${teamMembersData && teamMembersData[0].team.name} Team Info`} </h1>
      <Table data={teamMembersData || []} columns={columns} />
    </div>
  );
}

export default TeamDetailsPage;
