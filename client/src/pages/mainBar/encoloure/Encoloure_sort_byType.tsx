import { useSortData } from "./Sort_Table";



export const sortUniqEnclosure = ({ typeName }: { typeName: string }) => {
  const { lecturesData, coursesData, toursData } = useSortData();

  let enclosureTable:any[] = [];
  
  switch (typeName) {
    case "lectures":
      enclosureTable = lecturesData;
      break;
    case "courses":
      enclosureTable = coursesData;
      break;
    case "tours":
      enclosureTable = toursData;
      break;
    default:
      break;
  }

  const uniqueEnclosuresSet = new Set();
  enclosureTable.forEach((item) => uniqueEnclosuresSet.add(item.enclosure));
  const uniqueEnclosuresArray = Array.from(uniqueEnclosuresSet);
 
  const dataWithTypes = uniqueEnclosuresArray.map((enclosure) => ({
    type: typeName,
    enclosure: enclosure,
  }));
  
  return { dataWithTypes, enclosureTable };
};
