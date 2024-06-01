import { Link } from "react-router-dom";
import "./fee.css";
import { useState } from "react";
import axios from "axios";
import fro from "../Images/from.png";
export default function Feel() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("KCE");
  const [bus, setBus] = useState("");
  const [search, setSearch] = useState([]);

  const Search = async (e) => {
    e.preventDefault();
    const item = {
      from,
      to,
      bus,
    };
    try {
      const resp = await axios.post("http://localhost:3001/it", item);

      if (resp.status === 200) {
        console.log(resp.data);
        setSearch(resp.data);
        setFrom("");
      
        setBus("");
      } 
      else {
        alert("Enter the Correct data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
     
    }
  };
  console.log(typeof search);
  return (
    <>
      <div class="section__contain header__contain" id="home">
        <div class="booki">
          <div class="booki__type" id="booking-type">
            <div class="active" style={{ color: "black", fontWeight: "600" }}>
              Search Bus Fare Here
            </div>
          </div>
          <form onSubmit={Search} class="booki__form">
            <div class="booki__input">
              <label
                for="arrival"
                style={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "1.5rem",
                }}
              >
                {" "}
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUElEQVR4nO2au0sdQRSHv4gExBhRUhmDpLKz8JUiiKZLIxgLDaT1D7HwlT51uhRRLxZqqdinCUoau6DJTfBBlAiK4siBEa7L7mZmd+buI/7gcIvdOXO+OXNmZ2cvgHJof4FdYAkYAx5QRymPtga0lAFEAZ/KAqKAXnKul4Yg7ymAlIFtURKQXXKuIUOQ32Up9vOygCiDOJ4By8CpthWgu2ggAnEU0uZYX6ur2oFx4EcCkOWYAVgkI40nADmNATkhI7U7BvlDhrIFWYkB+UyBQLp1YauAHQKdZKiky++irokTnYlMIZKC5FL/PcgE8E1vaeR5tAA8LFJG5N1+FrgOaScwhQBpBioxy2+VAoA8Bb442HB6k0kwL/Rop91welWS3XFpQOLqJBM9sQS41iuWrFy5ApmxgNgD3ta0VS5AWoG2FNYDfIh4FpgGo9KAuC7MNMGoexDuM0LaqdUBjALTwCrws2hTa0yvVq7rizTByUgO6I3fgP6wExfMJHBp2UfVN4hAhCkKJgmEstnGJwXpj/A3GHG/LcQv/cRv9A0S9W2wxaDtpc6QiRqAvjxlxBbiMfAG2IiZxk5ApBbCtB7T5gp4ZxDTx0C7bZ8gtzCSgUf6d93RdHoVaHsGNPkEMbULPU2wqItqwMdUHkA2sddCwMfOv/5JUQ8QOa+yVZeuqVo/w1mDJFUl4KdSVJCRgB/J0HM8yDeI6Gs9Th6jvhfW2n7KPqYc+wvVvAHIXMo+moCDGn/fHcV+R3JSLjBhmZGREwgXp+nyAiZ9yHvM67A7bgDERgMbhOJk/wAAAABJRU5ErkJggg=="></img>{" "}
                From
              </label>
              <input
                type="text"
                placeholder="Arrival"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                required
              />
            </div>
            <div class="booki__input">
              <label
                for="departure"
                style={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "1.5rem",
                }}
              >
                {" "}
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADcElEQVR4nN2aW4hOURSAP4xrY8yDKSMzUzwo40FuT+Q24wWlQQojNVJeFLk8GMkl4UHJk4fJg9wakaGJjFCkRmnccp1yCxlCTMbMcLS0J8dun3P2+eec//z/v2rX9K+1zz7fPnutvdbeA+BE0L4CF4BFJChOxO0EkJcLIA6wKwmQ1hDtBdBtAdIOFJLhssLyq4hdRstkS5CD5AjIyXS/2OiQbbclSGMuRC0HuJkrILcjeLdCYFAc4VcPxZ0xgcwHnqvndAENQBkxiuzgVSpFiQpkscfEyOTlE7NsjQgkD3jv85V3ErPMjghkXIDfXSOBvSUVkDEBIBfJEhCRRz4ga8kikOnAN8PzmoC+ZBEIKoOQuuYpcAfYlK4aJ2oQkf4kIFGAlAJ7gPtAh1pe28kikBnAaZ+CbQ0ZDDIYqAFaLHK2y5kKsgX4GCL5bHDBZwzI0pAZtANsU303pmOZ2YD0AR4Y7MQ3zgK/PEBkX0Gdm3XHfXZmA7JQ00t6vldFq4k+pzEDgX7AF/WbRLRaoCAOkAUWIM2a/qhLt8EDpMlnoj5FDSQzdiMApFLTyTIqd+nPeYDUKv0c4LeHzQdgKiEOHSQznaS1JYaZNoFc1XRnXDpZNp8D/ENkpfoKJjvxn9BRxLb1gJQZdFP4J37+MYD/pUAVcTrQsXSAFAE/fWqKIP8wSQ9Qi4p4JekAEVmuBr2kohQh/MNa0gHiJX7+MS0dIBJBvkcAMtbn+cPjBJHNaDMwTO3U5WotpwpS6jPW4ThB1hn6S2S5myKIyHmfr1IZB0i7T7lZ0wuQfHUF8cPwjJdhdm5bkCcxnGuNd/0tu3d7b5aYLYgkeUM9nrE+RZBmVW/83QeAmQYYWWIVUYJIO2ToLxveuxRB2pTtM2Ck+m2uYZldiRrEUfV1hTreXAW8TjFq5Wv2j9W+YsqmO2wqRCemJolimIPvt5q+VdPPSgpkv8+YVYaK8JRmU6fpdyQBIrt+scd4EwxZQZsqFdxSrdlcJwEQL/8YAbzSbDs9lk1JWD8Jc932phcgchd4y2C7OuDdnDB+EvUduwnkiMHuQMB4dWH9xFaKLEHqtX5lhpq70RVuvaQ6zoue+gCI3yrd0Cegy2Xz0DKHKtZujo9HCTIE2AfcM/iQ3PHN8+i3TB3QSbY7KsR48s85ckIvX8Oz3x/GcPTRXoMLoQAAAABJRU5ErkJggg==" />{" "}
                To
              </label>
              <input type="text" placeholder="Departure" value={to} />
            </div>
            <div class="booki__input">
              <label
                for="date"
                style={{
                  color: "black",
                  fontWeight: "600",
                  fontSize: "1.5rem",
                }}
              >
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABzklEQVR4nO2ZvU7DMBRGDwws0IGIkQeAFQEDPzuwUPVZeAAkJCqExMA7MDF0aNjZ4BnKltIBBiZAFQiMjBIJVbFrl7h22nzSla3q6n732ImS1KDWMnAEtIAH4AX4BMSY4xXoANdAHZjBULPAMfDhoWlhEDFQMwE5D6BZMSSuhkGsAF8BNCoMYk0HcmFRaAs32jb0P9MVubcAcSlhELe6As8lAunoCvQtQHYcQewa+j/piogSRX9SQMTUgvSABhAxfkWpd88E5ADopvO8ZFnItxoaENn7fjbJfsxL9rETg4o0IHJMsokOJBQJDcjvvAIZs0S1I1T3iBOJ6tKiZJdWdwKeIwnp4z0pMUgC7JkmhyDx37ffiQGJ8K+lIkBCeI0/CeXDSv5fuzhCrAKXwHcRICGHUr4bExXIgHyvsKh2ZECqFWkDG8B8OsYOV7lt4aWUqnCeWo4gbLyUykteV+RuOgBZt/SyAlGd19UcgNQsvaZzR2JF7o0DkNjSywokM5CrspCOLiBG8VLq3WGDRcdbUYehvuNOB1IPoEFhGIc6EN19EloM1dSBuJIoyl91Xvc3Hp1hUJx/06DQqUOQZlH+c2mxvJWRKyGLyBxXGsn/B6l4OuxEhf6WAAAAAElFTkSuQmCC" />{" "}
                Bus no
              </label>
              <input
                type="text"
                placeholder="Bus no"
                value={bus}
                onChange={(e) => setBus(e.target.value)}
              />
            </div>

            <button class="bn" type="submit">
              <i class="bi bi-search"></i>Search
            </button>
          </form>
          <div>
           
            
          </div>
          <div id="results-container">
          
            {search.map((result, index) => (
              <div key={index} className="result-item">
                <h1>Result:</h1>
                <table class="table table-bordered" id="cet">
                  <thead>
                    <tr >
                      <th scope="col">Id:</th>
                      <th scope="col">From</th>
                      <th scope="col">To</th>
                      <th scope="col">Bus</th>
                      <th scope="col">Amount</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td> {result.from}</td>
                      <td>{result.to}</td>
                      <td>{result.bus}</td>
                      <td style={{color:"red"}}> {result.amount}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
