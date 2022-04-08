import LoadTable from "./LoadTable";
import classes from "./CreateTable.module.css";
import {useState, useEffect} from "react";

const CreateTable = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [loadedData, setLoadedData] = useState([]);


  useEffect(() => {
    fetch("http://universities.hipolabs.com/search?country=Australia")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedData(data);
      });
  }, []);




  return (
    <div>
      React Application
      <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Country Code</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
        <tbody>
          {loadedData.map((meetup) => (
            <LoadTable
              name={meetup.name}
              country={meetup.country}
              cCode={meetup.alpha_two_code}
              web={meetup.web_pages[0]}
            />
          ))}
        </tbody>
        </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreateTable;
