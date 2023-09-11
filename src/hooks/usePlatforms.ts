import platforms from "../data/platforms";

// An interface defined in case we want to call the server
// interface Platform {
//   id: number;
//   name: string;
//   slug: string;
//}

// Call server to get the platforms
// const usePlatforms = () => useData<Platform>('/platforms/lists/parents')
const usePlatforms = () => ({data: platforms, error: null})

export default usePlatforms;