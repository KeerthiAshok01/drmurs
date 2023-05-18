import { useSelector } from "react-redux";

export default function YourQueries() {
  const userQuery = useSelector((state) => state.ideaCreate);
  console.log(userQuery);
  return (
    <div className="rounded-4 bg-purple d-flex flex-column justify-content-evenly p-4 vh-50 w-100">
      {userQuery.map((val, index) => {
        if (val.query !== null) {
          return (
            <div key={index} className="bg-white mx-2 mt-3 p-3 rounded-3 w-100">
              <p className="text-dark mb-0">{val.query}</p>
            </div>
          );
        }
      })}
    </div>
  );
}
