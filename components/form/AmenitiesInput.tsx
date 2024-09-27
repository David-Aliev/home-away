"use client";
import { useState } from "react";
import { amenities, Amenity } from "@/utils/amenities";
import { Checkbox } from "@/components/ui/checkbox";

function AmenitiesInput({ defaultValue }: { defaultValue?: Amenity[] }) {
  const [selectedAmenities, setSelectedAmenities] = useState<Amenity[]>(
    defaultValue || amenities
  );

  const toggleAmenitySelection = (amenityToToggle: Amenity) => {
    setSelectedAmenities((prevAmenities) => {
      return prevAmenities.map((amenity) => {
        if (amenity.name === amenityToToggle.name) {
          return { ...amenity, selected: !amenity.selected };
        }
        return amenity;
      });
    });
  };

  return (
    <section>
      <input
        type="hidden"
        name="amenities"
        value={JSON.stringify(selectedAmenities)}
      />
      <div className="grid grid-cols-2 gap-4">
        {selectedAmenities.map((amenity) => {
          return (
            <div key={amenity.name} className="flex items-center space-x-2">
              <Checkbox
                id={amenity.name}
                checked={amenity.selected}
                onCheckedChange={() => toggleAmenitySelection(amenity)}
              />
              <label
                htmlFor={amenity.name}
                className="flex gap-x-2 items-center text-sm font-medium leading-none capitalize"
              >
                {amenity.name} <amenity.icon className="w-4 h-4" />
              </label>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AmenitiesInput;
