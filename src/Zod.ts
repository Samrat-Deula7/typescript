// In this challenge 6 I am using type and generic
// to make sure that the function gets the data in specific format and returns the data in specific format .
// so that type script does dont get confuse and add any to the tours.

const url = "https://www.course-api.com/react-tours-project";

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};
async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status:${response.status}`);
    }
    const data: Tour[] = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : "There was some error";
    console.log(errMsg);
    return [];
  }
}

const tours = await fetchData(url);

tours.map((tour) => {
  console.log(tour.name);
});
