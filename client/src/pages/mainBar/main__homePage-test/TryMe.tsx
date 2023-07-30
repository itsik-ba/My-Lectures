import "./style/homePage.scss"

type LectureInfo = {
  lecType: string,
  lecImg: string,
  lecName: string,
  lecInfo: string,
}

const TryMe = (props: LectureInfo) => {
  return (
    <div className="main">
      <div className="main__container">
       <div className="main__lectures">
        <h2>{props.lecType}</h2>
          <div className="main__lectures__showLec">
           <div className="main__lec">
            <div className="main__lec__img">{props.lecImg}</div>
             <h2 className="main__card__mainCard__lecName">{props.lecName}</h2>
              <p className="main__card__mainCard__lecInfo">{props.lecInfo}</p>
               </div>
                </div>
            </div>

     </div>
    </div>
  )
}

export default TryMe