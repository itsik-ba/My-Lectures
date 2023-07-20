import React from 'react';

interface EnclosureTable {
  title: string;
  name: string;
  startDate: string;
  endDate: string;
  time: string;
  location: string;
  description: string;
  enclosure:string;

}



interface TableProps {
  columns: EnclosureTable[];
  data: any[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((column, columnIndex) => (
              <td key={columnIndex}>{item[column.title]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
