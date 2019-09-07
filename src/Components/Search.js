import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  render() {
    return (
      <div className="divSeachBox">
        <div style={{ direction: "rtl" }}>
          <select className="selectSearchBox" name="HomeType" id="">
            <option value="vilaei">ویلایی</option>
            <option value="aparteman">آپارتمان</option>
            <option value="Bagh">باغ</option>
          </select>
          <select className="selectSearchBox" name="Rooms" id="">
            <option value="0khab">سوییت</option>
            <option value="1khab">یک خوابه</option>
            <option value="2khab">دو خوابه</option>
            <option value="3khab">سه خوابه</option>
            <option value="4khab">چهار خوابه</option>
          </select>
          <select className="selectSearchBox" name="Metrazh" id="">
            <option value="50100">50 - 100</option>
            <option value="10150">100 - 150</option>
            <option value="150200">150 - 200</option>
            <option value="200250">200 - 250</option>
            <option value="250300">250 - 300</option>
            <option value="30010000">300 - 10000</option>
          </select>
        </div>
        <div>
          <select className="selectSearchBox" name="SaleSakht" id="">
            <option value="05">0 - 5</option>
            <option value="510">5 - 10</option>
            <option value="1020">10 - 20</option>
            <option value="2050">20 - 50</option>
          </select>
          <select className="selectSearchBox" name="Parking" id="">
            <option value="nadarad">ندارد</option>
            <option value="1parking">1</option>
            <option value="2parking">2</option>
            <option value="3parking">3</option>
            <option value="4parking">4</option>
          </select>
          <select className="selectSearchBox" name="Tabaghe" id="">
            <option value="hamkaf">همکف</option>
            <option value="aval">1</option>
            <option value="dovom">2</option>
            <option value="sevom">3</option>
            <option value="chaharom">4</option>
            <option value="panjom">5</option>
          </select>
        </div>
        <div style={{ direction: "rtl" }}>
          <form action="" method="get">
            <input
            className="selectSearchBox searchInput"
              type="search"
              name="SearchBoxMain"
              placeholder="جستجو"
              id=""
            />
            <input className="searchBox" type="submit" value="جستجو"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
