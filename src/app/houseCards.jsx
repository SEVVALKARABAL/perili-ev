import housesForSale from "@/data/housesForSale";
import HouseCard from "./houseCard";

    const HouseCards = housesForSale.map((house, index, array) => (
        <HouseCard
          key={house.id}
          index={index}
          totalHouses={array.length}
          image={house.image}
          houseData={{
            price: house.price,
            location: house.location,
            squareFeet: house.squareFeet,
            acres: house.acres,
            yearBuilt: house.yearBuilt,
            bedrooms: house.bedrooms,
            bathrooms: house.bathrooms,
            otherRooms: house.otherRooms,
            garage: house.garage,
            airConditioning: house.airConditioning,
            heating: house.heating,
            haunted: house.haunted
          }}
        />
      ));

export default HouseCards