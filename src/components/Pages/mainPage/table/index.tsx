import React from "react";
import { worker } from "../../../../types/user";
import style from "./style.module.css";

type Props = {
  table_name: string;
  workers: worker[];
  days: number[];
  componentRef: React.RefObject<HTMLDivElement>;
};

const Table = (props: Props) => {
  return (
    <div className={style.MainContent} style={{ height: "100%" }} ref={props.componentRef}>
      <table className={style.table} width="100%">
        <caption className={style.tableNoBottom} style={{ fontSize: "20px", fontWeight: "bold" }}>
          {props.table_name}
        </caption>
        <thead className={style.tableOnlyBottom}>
          <tr>
            <th>Ф.И.О.</th>
            <td>
              <table className={style.tableOnlyRight} width="100%">
                <caption className={style.tableSides} style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Отметки о явках и неявках на работу по числам месяца
                </caption>
                <tbody>
                  <tr>
                    {props.days.map((day) => (
                      <th key={day} className={style.time_node}>
                        {day}
                      </th>
                    ))}
                  </tr>
                </tbody>
              </table>
            </td>

            <th className={style.tableOnlyRight}>Всего дней</th>
            <th className={style.tableOnlyRight}>Всего часов</th>
            <th>Неявки по причинам</th>
          </tr>
        </thead>

        {props.workers[0] !== undefined ? (
          <tbody>
            {props.workers.map((worker) => (
              <tr key={worker.id}>
                <td key={worker.id} className={style.tableOnlyBottom}>
                  {worker.second_name + " " + worker.first_name + " " + worker.patronymic}
                </td>
                <td>
                  <table className={style.tableOnlyRight} width="100%">
                    <tbody>
                      <tr id={worker.first_name}>
                        {worker.hours.map((hour) => (
                          <th key={hour.id} className={style.time_node_no_top}>
                            {hour.letterDisplay}
                          </th>
                        ))}
                      </tr>
                      <tr id={worker.second_name}>
                        {worker.hours.map((hour) => (
                          <td key={hour.id} className={style.time_node_no_top}>
                            {hour.DisplayTime}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td className={style.tableRightAndBottom}>{worker.total_days}</td>
                <td className={style.tableRightAndBottom}>{worker.total_hours}</td>
                <td className={style.tableNoSides}>
                  <table className={style.tableOnlyRight} style={{ borderRight: "0px solid black" }} width="100%">
                    <tbody>
                      <tr>
                        <td className={style.tableOnlyBottom}>{worker.total_gaps[0]}</td>
                        <td className={style.tableOnlyBottom}>{worker.total_gaps[1]}</td>
                      </tr>
                      <tr>
                        <td className={style.text}>{worker.total_gaps[2]}</td>
                        <td className={style.text}>{worker.total_gaps[3]}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td style={{ textAlign: "center", fontSize: "20px" }}>Сотрудников нет :(</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Table;
