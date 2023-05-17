import {Accessories} from "./pngs";

const {
  Beanie,
  BeanieOl,
  RedBootsOl,
  Halo,
  Hat,
  HatOl,
  Heels,
  Lights,
  RedBoots,
  SantaOl,
  Santa,
  SkatesOl,
  Skates,
  Slippers,
  Spots,
  TinyAntlersOl,
  TinyAntlers,
  TrapperOl,
  WinterHat,
  XmasOl,
  Rudolph,
} = Accessories;

export const AllAccessories = {
  Beanie: {name: "Beanie", image: Beanie, outline: BeanieOl},
  Halo: {name: "Halo", image: Halo, outline: ""},
  Hat: {name: "Hat", image: Hat, outline: HatOl},
  Heels: {name: "Heels", image: Heels, outline: ""},
  Lights: {name: "Lights", image: Lights, outline: ""},
  RedBoots: {name: "RedBoots", image: RedBoots, outline: RedBootsOl},
  Santa: {name: "SantaHat", image: Santa, outline: SantaOl},
  Skates: {name: "Skates", image: Skates, outline: SkatesOl},
  Slippers: {name: "Slippers", image: Slippers, outline: ""},
  Spots: {name: "Spots", image: Spots, outline: ""},
  TinyAntlers: {
    name: "TinyAntlers",
    image: TinyAntlers,
    outline: TinyAntlersOl,
  },
  WinterHat: {name: "winter hat", image: WinterHat, outline: TrapperOl},
  Rudolph: {name: "rudolph", image: Rudolph, outline: XmasOl},
};
export const AccessoryList = [
  {name: "Beanie", image: Beanie, outline: BeanieOl},
  {name: "Halo", image: Halo, outline: ""},
  {name: "Hat", image: Hat, outline: HatOl},
  {name: "Heels", image: Heels, outline: ""},
  {name: "Lights", image: Lights, outline: ""},
  {name: "RedBoots", image: RedBoots, outline: RedBootsOl},
  {name: "Santa", image: Santa, outline: SantaOl},
  {name: "Skates", image: Skates, outline: SkatesOl},
  {name: "Slippers", image: Slippers, outline: ""},
  {name: "Spots", image: Spots, outline: ""},
  {
    name: "TinyAntlers",
    image: TinyAntlers,
    outline: TinyAntlersOl,
  },
  {name: "WinterHat", image: WinterHat, outline: TrapperOl},
  {name: "Rudolph", image: Rudolph, outline: XmasOl},
];

export default function Accessory({accessory}) {
  const currAccessory = AllAccessories[accessory];
  return (
    <div>
      {accessory && (
        <>
          <img
            src={currAccessory.image}
            alt={accessory}
            className="preview-img-accessory"
          />

          {currAccessory.outline && currAccessory.outline !== "" ? (
            <img
              src={currAccessory.outline}
              alt={`outline for ${accessory}`}
              className="preview-img-accessory"
            />
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
}
