import React from "react";
import styles from "../../../styles/ProjectInfo.module.scss";

const ProjectInfo = ({ name, percentage, budget, projectImage, members }) => {
  return (
    <tr className={styles.body}>
      <td className={styles.company}>
        <img alt="project" src={projectImage.url} />
        <h4>{name}</h4>
      </td>
      <td className={styles.members}>
        {members.map((member) => (
          <img alt="member" key={member.id} src={member.url} />
        ))}
      </td>
      <td className={styles.budget}>
        <span>{budget}</span>
      </td>
      <td className={styles.percentages}>
        <span>{percentage}</span>
        <div className={styles.percentage}>
          <div
            style={{
              width: `${percentage}`,
              backgroundImage: `${percentage === "100%" ? "linear-gradient(310deg, rgb(23, 173, 55), rgb(152, 236, 45))" : "linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253))"}`,
            }}
          ></div>
        </div>
      </td>
    </tr>
  );
};

export default ProjectInfo;
