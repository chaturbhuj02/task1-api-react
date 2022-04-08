import LoadTable from "./LoadTable";
import classes from "./CreateTable.module.css";
import { useState, useEffect } from "react";
import logo from "../images/Loader.gif";

const CreateTable = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);
  const [showData, setShowData] = useState(false);

  function loadHandler() {
    return setShowData(true);
  }

  function addHandler() {
    if (loadedData.length) {
      const newData = [...loadedData];
      newData.push(loadedData[0]);
      setLoadedData(newData);
    }
  }

  function deleteHandler() {
    const newData = [...loadedData];
    newData.pop();
    setLoadedData(newData);
  }

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

  if (isLoading) {
    return (
      <section>
        <img src={logo} alt="loading..." />
      </section>
    );
  }

  return (
    <div>
      <div className={classes.ctn}>
        <button className={classes.btn} onClick={loadHandler}>
          Load
        </button>
        <button className={classes.btn} onClick={addHandler}>
          Add
        </button>
        <button className={classes.btn} onClick={deleteHandler}>
          Delete
        </button>
      </div>
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
            {showData &&
              loadedData.map((meetup) => (
                <LoadTable
                  name={meetup.name}
                  country={meetup.country}
                  cCode={meetup.alpha_two_code}
                  web={meetup.web_pages[0]}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreateTable;
