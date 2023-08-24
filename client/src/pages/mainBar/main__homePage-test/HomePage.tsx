import React, { useState } from "react";
import { useSortData } from "../encoloure/Sort_Table";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Button } from '@mui/material';
import './style/homePage.scss';

type ActivityTypes = {
  type: string;
  typeName: string;
}

const DataDisplay: React.FC<{ dataType: string }> = ({ dataType }) => {
  const { lecturesData, coursesData, toursData } = useSortData();
  const activityTypes: ActivityTypes[] = [
    { type: 'הרצאות', typeName: 'lecturesData' },
    { type: 'קורסים', typeName: 'coursesData' },
    { type: 'סיורים', typeName: 'toursData' },
  ];

  const [currentIndexMap, setCurrentIndexMap] = useState<{ [key: string]: number }>({
    lecturesData: 0,
    coursesData: 0,
    toursData: 0,
  });

  const handleRightArrow = (typeName: string) => {
    const dataLength = getDataLength(typeName);
    if (currentIndexMap[typeName] + 3 < dataLength) {
      setCurrentIndexMap(prevIndexMap => ({
        ...prevIndexMap,
        [typeName]: prevIndexMap[typeName] + 1,
      }));
    }
  };

  const handleLeftArrow = (typeName: string) => {
    if (currentIndexMap[typeName] > 0) {
      setCurrentIndexMap(prevIndexMap => ({
        ...prevIndexMap,
        [typeName]: prevIndexMap[typeName] - 1,
      }));
    }
  };

  const getDataLength = (typeName: string) => {
    switch (typeName) {
      case "lecturesData":
        return lecturesData.length;
      case "coursesData":
        return coursesData.length;
      case "toursData":
        return toursData.length;
      default:
        return 0;
    }
  };

  const getDataByType = (typeName: string) => {
    switch (typeName) {
      case "lecturesData":
        return lecturesData;
      case "coursesData":
        return coursesData;
      case "toursData":
        return toursData;
      default:
        return [];
    }
  };

  return (
    <div className="main">
      <div className="main__container">

        {activityTypes.map((activityType: ActivityTypes, index: number) => {
          const { typeName } = activityType;
          const sortedData = getDataByType(typeName);
          const limitedData = sortedData.slice(currentIndexMap[typeName], currentIndexMap[typeName] + 3);
          const dataLength = getDataLength(typeName);

          return (
            <div key={index} className="mainSection">
              <div className="mainSection__type">
                <Button onClick={() => handleRightArrow(typeName)} className="mainSection__type__btnR" disabled={currentIndexMap[typeName] + 3 >= dataLength}>
                  <KeyboardDoubleArrowRightIcon className="arrow-icon" />
                </Button>
                <div className="mainSection__type__h2">
                  {activityType.type}
                </div>
                <Button onClick={() => handleLeftArrow(typeName)} className="mainSection__type__btnL" disabled={currentIndexMap[typeName] <= 0}>
                  <KeyboardDoubleArrowLeftIcon className="arrow-icon" />
                </Button>
              </div>
              <div className="mainSection__showLec">
                {limitedData.map((item: any, index: number) => (
                  <div key={index} className="mainSection__lec">
                    <div className="container">
                      <div className="container__wrapper">
                        <h2>{item.title}</h2>
                        <img src={item.imageUrl} alt={item.title} /> 
                        <div className="section__data">{item.articalName}</div>
                        <div className="section__data">תאריך פתיחה: {item.startDate}</div>

                        <div className="section__data">תאריך סיום: {item.endDate}</div>

                        <div className="section__data">שעה: {item.time}</div>
                        <div className="section__data">מיקום: {item.location}</div>
                        <div className="section__data">תאור הפעילות: {item.description}</div>
                        <div className="section__data">נושא: {item.enclosure}</div>
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

