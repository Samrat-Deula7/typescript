import {z} from 'zod';

// - Zod is an library that helps to check type in the run time of the code.
// Now we can detect if the received code's schema alines with the type that we have hardcoded on run time.

const url = "https://www.course-api.com/react-tours-project";

const tourSchema = z.object({
    id:z.string(), 
    name:z.string(),
    info:z.string(),
    image:z.string(),
    price:z.string()
})

type Tour =z.infer<typeof tourSchema>;

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status:${response.status}`);
    }
    const rawData: Tour[] = await response.json();

    const result=tourSchema.array().safeParse(rawData);
    console.log(result);
    
    if(!result.success){
        throw new Error(`Invalid data schema: ${result.error}`)
    }
    return result.data;
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
