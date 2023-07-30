

import React from "react";
import { useSortData } from "./Encoloure_sort_byType";

const TypeApp: React.FC = () => {
  const typeArrays = ["הרצאות", "קורסים", "סיורים"];

  return (
    <div>
      <h2>Sorted Data:</h2>
      {typeArrays.map((dataType, index) => (
        <DataDisplay key={index} dataType={dataType} />
      ))}
    </div>
  );
};

const DataDisplay: React.FC<{ dataType: string }> = ({ dataType }) => {
  const sortedData = useSortData(dataType);

  return (
    <>
      <h3>Data for Type: {dataType}</h3>
      <ul>
        {sortedData.map((item, index) => (
          <li key={index}>
            {item.title} - {item.startDate} to {item.endDate}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TypeApp;




// import React from "react";
// import { useSortData } from "./Encoloure_sort_byType";


// type EnclosureTable = {
//   title: string;
//   articalName: string;
//   startDate: string;
//   endDate: string;
//   time: string;
//   location: string;
//   description: string;
//   enclosure:string;
//   type: string;
// }



// const TableApp: React.FC = () => {
  
//   const typeArrays  = [
//     {dataType: 'הרצאות'},
//     {dataType:  'קורסים'},
//     {dataType:  'סיורים'},
//   ]
  

//   // const enclosureTable: EnclosureTable[] = [
//   //   {title: "AAA", articalName: "AAA", startDate: "AAA", endDate: "AAA", time: "AAA", location: "AAA", description: "AAA", enclosure: "AAA", type: "הרצאות"},
//   //   {title: "BBB", articalName: "BBB", startDate: "BBB", endDate: "BBB", time: "BBB", location: "BBB", description: "BBB", enclosure: "BBB", type: "קורסים"},
//   //   {title: "CCC", articalName: "CCC", startDate: "CCC", endDate: "CCC", time: "CCC", location: "CCC", description: "CCC", enclosure: "CCC", type: "סיורים"},
//   //   {title: "DDD", articalName: "DDD", startDate: "DDD", endDate: "DDD", time: "DDD", location: "DDD", description: "DDD", enclosure: "DDD", type: "קורסים"},
//   //   {title: "EEE", articalName: "EEE", startDate: "EEE", endDate: "EEE", time: "EEE", location: "EEE", description: "EEE", enclosure: "EEE", type: "הרצאות"},
//   //   {title: "AAA", articalName: "AAA", startDate: "AAA", endDate: "AAA", time: "AAA", location: "AAA", description: "AAA", enclosure: "AAA", type: "הרצאות"},
//   //   {title: "BBB", articalName: "BBB", startDate: "BBB", endDate: "BBB", time: "BBB", location: "BBB", description: "BBB", enclosure: "BBB", type: "קורסים"},
//   //   {title: "CCC", articalName: "CCC", startDate: "CCC", endDate: "CCC", time: "CCC", location: "CCC", description: "CCC", enclosure: "CCC", type: "סיורים"},
//   //   {title: "DDD", articalName: "DDD", startDate: "DDD", endDate: "DDD", time: "DDD", location: "DDD", description: "DDD", enclosure: "DDD", type: "קורסים"},
//   //   {title: "EEE", articalName: "EEE", startDate: "EEE", endDate: "EEE", time: "EEE", location: "EEE", description: "EEE", enclosure: "EEE", type: "הרצאות"},
//   //   {title: "AAA", articalName: "AAA", startDate: "AAA", endDate: "AAA", time: "AAA", location: "AAA", description: "AAA", enclosure: "AAA", type: "הרצאות"},
//   //   {title: "BBB", articalName: "BBB", startDate: "BBB", endDate: "BBB", time: "BBB", location: "BBB", description: "BBB", enclosure: "BBB", type: "קורסים"},
//   //   {title: "CCC", articalName: "CCC", startDate: "CCC", endDate: "CCC", time: "CCC", location: "CCC", description: "CCC", enclosure: "CCC", type: "סיורים"},
//   //   {title: "DDD", articalName: "DDD", startDate: "DDD", endDate: "DDD", time: "DDD", location: "DDD", description: "DDD", enclosure: "DDD", type: "קורסים"},
//   //   {title: "EEE", articalName: "EEE", startDate: "EEE", endDate: "EEE", time: "EEE", location: "EEE", description: "EEE", enclosure: "EEE", type: "הרצאות"},
//   //   {title: "AAA", articalName: "AAA", startDate: "AAA", endDate: "AAA", time: "AAA", location: "AAA", description: "AAA", enclosure: "AAA", type: "הרצאות"},
//   //   {title: "BBB", articalName: "BBB", startDate: "BBB", endDate: "BBB", time: "BBB", location: "BBB", description: "BBB", enclosure: "BBB", type: "קורסים"},
//   //   {title: "CCC", articalName: "CCC", startDate: "CCC", endDate: "CCC", time: "CCC", location: "CCC", description: "CCC", enclosure: "CCC", type: "סיורים"},
//   //   {title: "DDD", articalName: "DDD", startDate: "DDD", endDate: "DDD", time: "DDD", location: "DDD", description: "DDD", enclosure: "DDD", type: "קורסים"},
//   //   {title: "EEE", articalName: "EEE", startDate: "EEE", endDate: "EEE", time: "EEE", location: "EEE", description: "EEE", enclosure: "EEE", type: "הרצאות"},
    
//   //   ];
        

//   // Create a state to store the   sorted array
//   const [sortedArray, setSortedArray] = React.useState<EnclosureTable[]>([]);

//   // Function to handle sorting when a data type is selected
//   // const handleSortByDate = (dataType: string) => {
//     // const sortedData = DataComponent({ dataType });
//   //   setSortedArray(sortedData);
//   // };


//   return (
//     <div>
//       {typeArrays.map((typeArray, index) => (
//            sortedData = DataComponent({ dataType });
//           setSortedArray(sortedData);
//       ))}
      



//       {enclosureTable.map((lecture, index) => (
//         <Table key={index} 
//           title={lecture.title} 
//           articalName={lecture.articalName} 
//           startDate={lecture.startDate} 
//           endDate={lecture.endDate} 
//           time={lecture.time} 
//           location={lecture.location} 
//           description={lecture.description} 
//           enclosure={lecture.enclosure} 
//           type={lecture.type}  />
//       ))}
//     </div>
//   );
// };

// export default TableApp;
