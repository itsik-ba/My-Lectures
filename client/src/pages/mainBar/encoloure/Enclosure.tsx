import React, { useState, useEffect } from "react";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Button } from '@mui/material';
import '../main__homePage-test/style/homePage.scss';
import { sortUniqEnclosure } from "./Encoloure_sort_byType";

const DataDisplay: React.FC<{ dataType: string }> = ({ dataType }) => {
  const { dataWithTypes, enclosureTable } = sortUniqEnclosure({ typeName: "lectures" });
  
  const [currentIndexMap, setCurrentIndexMap] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const initialIndexMap = dataWithTypes.reduce((map, item) => {
      map[item.enclosure] = 0;
      return map;
    }, {});
    console.log(dataType)
    setCurrentIndexMap(initialIndexMap);
  }, [dataWithTypes.length]);

  const handleRightArrow = (enclosure: string) => {
    const dataLength = getDataLength(enclosure);
    if (currentIndexMap[enclosure] + 3 < dataLength) {
      setCurrentIndexMap(prevIndexMap => ({
        ...prevIndexMap,
        [enclosure]: prevIndexMap[enclosure] + 1,
      }));
    }
  };
  
  const handleLeftArrow = (enclosure: string) => {
    console.log(currentIndexMap[enclosure])
    if (currentIndexMap[enclosure] > 0) {
      setCurrentIndexMap(prevIndexMap => ({
        ...prevIndexMap,
        [enclosure]: prevIndexMap[enclosure] - 1,
      }));
    }
  };
  

  const getDataLength = (enclosure: string) => {
    return getDataByType(enclosure).length;
  };

  const getDataByType = (enclosure: string) => {
    return enclosureTable.filter(item => item.enclosure === enclosure); 
  };

  return (
    <div className="main">
      <div className="main__container">
        {dataWithTypes.map((item, index) => {
            const enclosure: any = item.enclosure;
            const sortedData = getDataByType(enclosure);
            const dataLength = getDataLength(enclosure);
            const uniqueEnclosuresArray = getDataByType(enclosure);

            if (typeof currentIndexMap[enclosure] === 'undefined') {
              return null;
            }

            const slices = [];
            for (let i = currentIndexMap[enclosure]; i < currentIndexMap[enclosure] + 3; i++) {
              if (i < sortedData.length) {
                slices.push(sortedData[i]);
              }
            }
          return (
            <div key={index} className="mainSection">
            <div className="mainSection__type">
              <Button onClick={() => handleRightArrow(enclosure)} className="mainSection__type__btnR" disabled={currentIndexMap[enclosure] + 3 >= dataLength}>
                <KeyboardDoubleArrowRightIcon className="arrow-icon" />
              </Button>
              <div className="mainSection__type__h2">
                {enclosure}
              </div>
              <Button onClick={() => handleLeftArrow(enclosure)} className="mainSection__type__btnL" disabled={currentIndexMap[enclosure] <= 0}>
                <KeyboardDoubleArrowLeftIcon className="arrow-icon" />
              </Button>
            </div>
            <div className="mainSection__showLec">
              {slices.map((item: any, index: number) => (
                <div key={index} className="mainSection__lec">
                  <div className="container">
                    <div className="container__wrapper">
                      <h2>{item.title}</h2>
                      <img src={item.imageUrl} alt={uniqueEnclosuresArray[index].title} />
                      <div className="section__data">{uniqueEnclosuresArray[index].articalName}</div>
                      <div className="section__data">תאריך פתיחה: {uniqueEnclosuresArray[index].startDate}</div>
                      <div className="section__data">תאריך סיום: {uniqueEnclosuresArray[index].endDate}</div>
                      <div className="section__data">שעה: {uniqueEnclosuresArray[index].time}</div>
                      <div className="section__data">מיקום: {uniqueEnclosuresArray[index].location}</div>
                      <div className="section__data">תאור הפעילות: {uniqueEnclosuresArray[index].description}</div>
                      {/* <div className="section__data">נושא: {item.enclosure}</div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        })}
      </div>
    </div>
  );
};

export default DataDisplay;
