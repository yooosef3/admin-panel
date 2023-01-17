import Loader from "../../shared/Loader";
import { PROJECTS } from "../../../graphql/querries";
import ProjectInfo from "./ProjectInfo";
import React from "react";
import styles from "../../../styles/CompaniesTable.module.scss";
import { useQuery } from "@apollo/client";

const CompaniesTable = () => {
  const { loading, data, error } = useQuery(PROJECTS);
  if (loading) return <Loader />;
  if (error)
    return (
      <h4 style={{ color: "red" }}>خطای شبکه رخ داده است, بعدا امتحان کنید</h4>
    );

  return (
    <table className={styles.CompaniesTable}>
      <thead>
        <tr>
          <th>شرکت ها</th>
          <th>تیم</th>
          <th>بودجه</th>
          <th>پیشروی</th>
        </tr>
      </thead>
      {data.projects.map((project) => (
        <ProjectInfo key={project.id} {...project} />
      ))}
    </table>
  );
};

export default CompaniesTable;
