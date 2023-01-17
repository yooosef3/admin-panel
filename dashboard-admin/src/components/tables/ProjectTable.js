import { BsThreeDotsVertical } from "react-icons/bs";
import React from "react";
import styles from "../../styles/ProjectTable.module.scss";

const ProjectTable = ({ project, percentage, situation, image, budget }) => {
  return (
    <tr className={styles.projectInfo}>
      <td className={styles.projectImage}>
        <img alt="work" src={image.url} />
        <h4>{project}</h4>
      </td>
      <td className={styles.budget}>
        <p>{budget}</p>
      </td>
      <td className={styles.status}>{situation}</td>
      <td className={styles.percentage}>
        <span>{percentage}</span>
        <div className={styles.progressive}>
          <div style={{width:`${percentage}` ,
                                              backgroundImage: `${situation === 'در حال انجام' ? '  linear-gradient(310deg,#2152ff,#21d4fd)':
                                                                situation === 'تکمیل شده' ? 'linear-gradient(310deg,#17ad37,#98ec2d)': 
                                                                 'linear-gradient(310deg,#ea0606,#ff667c)'}`}}>
          </div> 
        </div>
      </td>
      <td className={styles.dots}>
        <BsThreeDotsVertical />
      </td>
    </tr>
  );
};

export default ProjectTable;
