const url = "https://www.course-api.com/react-tours-project";


async function fetchData(url:string){
    try {
        const response=await fetch(url)
        if(!response.ok){
            throw new Error(`HTTP error! status:${response.status}`)
        }
        const data =await response.json();
        console.log(data);
        return data;
    } catch (error) {
        const errMsg=error instanceof Error?error.message:"There was some error";
        console.log(errMsg);
        return[];
    }
}

const tours=await fetchData(url);

// Even though the following code looks good it will throw error.
// Because type script automatically assigns the tours and "any" type as it doesn't know what kind of data will it receive from the url.
// So while mapping the data we need to specify the tour with "any".

// tours.map((tour)=>{
//     console.log(tour.name);
// })


// Since, the following code has "any specified to tour it works."
tours.map((tour:any) => {
  console.log(tour.name);
});
