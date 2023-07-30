import React from 'react';
import './style/lecture.scss'

type EnclosureTableProps = {
  title: string;
  articalName: string;
  startDate: string;
  endDate: string;
  time: string;
  location: string;
  description: string;
  enclosure:string;
  type: string;
}



const Table: React.FC<EnclosureTableProps> = 
      ({ title, articalName, startDate, endDate, time,  location, description, enclosure, type })  => {
  return (
    
     <div className="container">
       <div className="container__wrapper">

           <div className="blockA">
            <span className="blockA__Sback"></span>
            <span className="blockA__Sfrwd"></span>
            <h2 className="blockA__h2">{type}</h2>
            <div className="blockA__wrapperBlock">
            <div className="lecture">
            {/* <div className="a__MainImg"></div> */}
            <h3 className="lecture__data">{title}</h3>
            <p className="lecture__data">{articalName}</p>
            <p className="lecture__data">{endDate}</p>
            <p className="lecture__data">{time}</p>
            <p className="lecture__data">{location}</p>
            <p className="lecture__data">{description}</p>
            <p className="lecture__data">{startDate}</p>
            <p className="lecture__data">{startDate}</p>
            <p className="lecture__data">{enclosure}</p>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Table;
