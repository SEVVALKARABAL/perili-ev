import housesForSale from "@/data/housesForSale"

    const HouseCard = ({ index, totalHouses, image, houseData }) => {
        return (
          <div className="house-card" key={houseData.id}>
            <p>
              {totalHouses} / {index + 1}
            </p>
            <img src={image} alt="House" />
            <div>
              <ul>
                {Object.entries(houseData).map(([key, value]) => (
                  <li key={key}>
                    <span>{key.replace(/([A-Z])/g, " $1").trim()}:</span> {typeof value === "boolean" ? (value ? "Evet" : "Hayır") : value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      };

export default HouseCard