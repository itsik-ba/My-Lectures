import { useEffect, useState } from "react";

type EnclosureTable = {
  imageUrl: string;
  title: string;
  articalName: string;
  startDate: string;
  endDate: string;
  time: string;
  location: string;
  description: string;
  enclosure: string;
  type: string;
};

export const useSortData = () => {
  const [lecturesData, setLecturesData] = useState<EnclosureTable[]>([]);
  const [coursesData, setCoursesData] = useState<EnclosureTable[]>([]);
  const [toursData, setToursData] = useState<EnclosureTable[]>([]);

  useEffect(() => {
    const enclosureTable: EnclosureTable[] = [
        {imageUrl: "https://w7.pngwing.com/pngs/854/696/png-transparent-dog-puppy-dog-mammal-animals-cat-like-mammal-thumbnail.png",
         title: "לקות למידה", articalName: "לקות למידה בילדים", startDate: "01-08-2023", endDate: "01-08-2023", time: "10:00", location: "בית אריאלה", description: "לקות הלמידה היא הלקות בעלת השכיחות הגבוהה ביותר במערכת החינוך, כ-10% עד 20% מכלל התלמידים הם בעלי לקויות למידה. עובדה זו מחייבת התייחסות", enclosure: "ילדים", type: "הרצאות"},
        {imageUrl: "https://w7.pngwing.com/pngs/24/2/png-transparent-dog-puppy-dog-mammal-animals-cat-like-mammal-thumbnail.png",
        title: "BBB2", articalName: "BBB", startDate: "BBB", endDate: "BBB", time: "BBB", location: "BBB", description: "BBB", enclosure: "BBB", type: "קורסים"},
        {imageUrl: "https://w7.pngwing.com/pngs/923/848/png-transparent-white-and-orange-dog-illustration-beagle-dalmatian-dog-bulldog-puppy-cute-dog-mammal-painted-animals-thumbnail.png",
        title: "CCC3", articalName: "CCC", startDate: "CCC", endDate: "CCC", time: "CCC", location: "CCC", description: "CCC", enclosure: "CCC", type: "סיורים"},
        {imageUrl: "https://w7.pngwing.com/pngs/466/219/png-transparent-cat-dog-grooming-dog-collar-poodle-cat-animals-cat-like-mammal-pet-thumbnail.png",
        title: "DDD4", articalName: "DDD", startDate: "DDD", endDate: "DDD", time: "DDD", location: "DDD", description: "DDD", enclosure: "DDD", type: "קורסים"},
        {imageUrl: "https://w7.pngwing.com/pngs/539/474/png-transparent-dog-puppy-cartoon-cute-dog-mammal-animals-carnivoran-thumbnail.png",
        title: "EEE5", articalName: "EEE", startDate: "EEE", endDate: "EEE", time: "EEE", location: "EEE", description: "EEE", enclosure: "EEE", type: "הרצאות"},
        {imageUrl: "https://w7.pngwing.com/pngs/502/150/png-transparent-havanese-dog-pet-sitting-labrador-retriever-puppy-cat-pet-dog-animals-carnivoran-pet-thumbnail.png",
        title: "AAA6", articalName: "AAA", startDate: "AAA", endDate: "AAA", time: "AAA", location: "AAA", description: "AAA", enclosure: "AAA", type: "הרצאות"},
        {imageUrl: "https://w7.pngwing.com/pngs/955/406/png-transparent-adult-fawn-pug-portuguese-water-dog-cat-puppy-dog-collar-dog-toy-happy-puppy-mammal-animals-carnivoran-thumbnail.png",
        title: "BBB7", articalName: "BBB", startDate: "BBB", endDate: "BBB", time: "BBB", location: "BBB", description: "BBB", enclosure: "BBB", type: "קורסים"},
        {imageUrl: "https://w1.pngwing.com/pngs/370/239/png-transparent-chinese-beagle-chinese-crested-dog-puppy-maltese-dog-pet-sitting-bark-dog-walking-thumbnail.png",
        title: "CCC8", articalName: "CCC", startDate: "CCC", endDate: "CCC", time: "CCC", location: "CCC", description: "CCC", enclosure: "CCC", type: "סיורים"},
        {imageUrl: "https://w7.pngwing.com/pngs/78/91/png-transparent-brown-dog-illustration-dog-puppy-pet-surprise-pet-puppy-animals-carnivoran-dog-like-mammal-thumbnail.png",
        title: "DDD9", articalName: "DDD", startDate: "DDD", endDate: "DDD", time: "DDD", location: "DDD", description: "DDD", enclosure: "DDD", type: "קורסים"},
        {imageUrl: "https://w7.pngwing.com/pngs/205/691/png-transparent-dog-dog-animal-pet-thumbnail.png",
        title: "EEE10", articalName: "EEE", startDate: "EEE", endDate: "EEE", time: "EEE", location: "EEE", description: "EEE", enclosure: "EEE", type: "הרצאות"},
        {imageUrl: "https://w7.pngwing.com/pngs/858/612/png-transparent-cats-and-dogs-animals-kitty-puppy-thumbnail.png",
        title: "AAA11", articalName: "AAA", startDate: "AAA", endDate: "AAA", time: "AAA", location: "AAA", description: "AAA", enclosure: "AAA", type: "הרצאות"},
        {imageUrl: "https://w7.pngwing.com/pngs/466/219/png-transparent-cat-dog-grooming-dog-collar-poodle-cat-animals-cat-like-mammal-pet-thumbnail.png",
        title: "BBB12", articalName: "BBB", startDate: "BBB", endDate: "BBB", time: "BBB", location: "BBB", description: "BBB", enclosure: "BBB", type: "קורסים"},
        {imageUrl: "https://w7.pngwing.com/pngs/73/400/png-transparent-dalmatian-dog-puppy-pet-labrador-retriever-white-dog-mammal-animals-carnivoran-thumbnail.png",
        title: "CCC13", articalName: "CCC", startDate: "CCC", endDate: "CCC", time: "CCC", location: "CCC", description: "CCC", enclosure: "CCC", type: "סיורים"},
        {imageUrl: "https://w7.pngwing.com/pngs/1003/701/png-transparent-dog-walking-pet-sitting-dog-food-dog-animals-pet-dog-like-mammal-thumbnail.png",
        title: "DDD14", articalName: "DDD", startDate: "DDD", endDate: "DDD", time: "DDD", location: "DDD", description: "DDD", enclosure: "DDD", type: "קורסים"},
        {imageUrl: "https://w7.pngwing.com/pngs/132/187/png-transparent-cheems-dog-thumbnail.png",
        title: "EEE15", articalName: "EEE", startDate: "EEE", endDate: "EEE", time: "EEE", location: "EEE", description: "EEE", enclosure: "EEE", type: "הרצאות"},
        {imageUrl: "https://w7.pngwing.com/pngs/1003/701/png-transparent-dog-walking-pet-sitting-dog-food-dog-animals-pet-dog-like-mammal-thumbnail.png",
        title: "AAA16", articalName: "AAA", startDate: "AAA", endDate: "AAA", time: "AAA", location: "AAA", description: "AAA", enclosure: "AAA", type: "הרצאות"},
        {imageUrl: "https://w7.pngwing.com/pngs/611/983/png-transparent-dog-cat-puppy-kitten-pet-dog-animals-cat-like-mammal-carnivoran-thumbnail.png",
        title: "BBB17", articalName: "BBB", startDate: "BBB", endDate: "BBB", time: "BBB", location: "BBB", description: "BBB", enclosure: "BBB", type: "קורסים"},
        {imageUrl: "https://w7.pngwing.com/pngs/177/575/png-transparent-adult-german-shepherd-german-shepherd-puppy-purebred-dog-dog-food-dog-breed-dogs-animals-carnivoran-pet-thumbnail.png",
        title: "CCC18", articalName: "CCC", startDate: "CCC", endDate: "CCC", time: "CCC", location: "CCC", description: "CCC", enclosure: "CCC", type: "סיורים"},
        {imageUrl: "https://w7.pngwing.com/pngs/422/927/png-transparent-puppy-bernese-mountain-dog-cat-pet-sitting-dog-toys-dog-ritmeester-thumbnail.png",
        title: "DDD19", articalName: "DDD", startDate: "DDD", endDate: "DDD", time: "DDD", location: "DDD", description: "DDD", enclosure: "DDD", type: "קורסים"},
        {imageUrl: "https://w7.pngwing.com/pngs/358/350/png-transparent-chihuahua-puppy-dog-breed-companion-dog-bernese-mountain-dog-puppy-mammal-animals-carnivoran-thumbnail.png",
        title: "EEE20", articalName: "EEE", startDate: "EEE", endDate: "EEE", time: "EEE", location: "EEE", description: "לקות למידה היא הפרעה נוירו-התפתחותית הפוגעת בתפקודי למידה בסיסיים. היא מפריעה באופן ניכר לאדם לרכוש ולבטא ידע ומיומנויות ברמה הצפויה מאנשים בגילו, השכלתו ומנת המשכל שלו. לקות למידה נובעת מגורמים נוירו-התפתחותיים, היא נמשכת לאורך כל חייו של האדם ועשויה לפגוע בתפקודו גם בבגרות. טיפול מתאים עשוי לסייע לאדם עם לקות למידה לבטא ידע ומיומנויות ולהגיע למיצוי טוב יותר של הפוטנציאל האישי שלו בהקשר הלמידה הספציפי.", enclosure: "EEE", type: "הרצאות"},
      ];

    // Sort the data by startDate
    const sortedData = enclosureTable.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

    // Separate the sorted data into arrays based on the type
    const lectures = sortedData.filter((item) => item.type === "הרצאות");
    const courses = sortedData.filter((item) => item.type === "קורסים");
    const tours = sortedData.filter((item) => item.type === "סיורים");

    // Set the state for each type
    setLecturesData(lectures);
    setCoursesData(courses);
    setToursData(tours);
  }, []);

  return { lecturesData, coursesData, toursData };
};

