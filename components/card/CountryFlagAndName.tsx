import { findCountryByCode } from "@/utils/coutries";

function CountryFlagAndName({ countryCode }: { countryCode: string }) {
  const validaCountry = findCountryByCode(countryCode)!;

  const countryName =
    validaCountry.name.length > 20
      ? `${validaCountry.name.substring(0, 20)}`
      : validaCountry.name;
  return (
    <span className="flex justify-between gap-2 text-sm items-center">
      {validaCountry.flag} {countryName}
    </span>
  );
}

export default CountryFlagAndName;
