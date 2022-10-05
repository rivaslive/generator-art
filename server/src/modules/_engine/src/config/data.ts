import { LayoutSettingsProps } from '@/engine/interfaces/types';

const blackSensei = {
  name: 'Black Sensei',
  path: 'BLACK_SENSEI',
};
const redSensei = {
  name: 'Red Sensei',
  path: 'RED_SENSEI',
};
const whiteSensei = {
  name: 'White Sensei',
  path: 'WHITE_SENSEI',
};
const brownSensei = {
  name: 'Brown Sensei',
  path: 'BROWN_SENSEI',
};
const specialEarthSensei = {
  name: 'Special Earth Sensei',
  path: 'SPECIAL_EARTH_SENSEI',
};
const specialElderSensei = {
  name: 'Special Elder Sensei',
  path: 'SPECIAL_ELDER_SENSEI',
};
const specialElectricitySensei = {
  name: 'Special Electricity Sensei',
  path: 'SPECIAL_ELECTRICITY_SENSEI',
};
const specialFireSensei = {
  name: 'Special Fire Sensei',
  path: 'SPECIAL_FIRE_SENSEI',
};
const specialIceSensei = {
  name: 'Special Ice Sensei',
  path: 'SPECIAL_ICE_SENSEI',
};

export const layerConfigurations: LayoutSettingsProps = {
  layers: {
    growEditionSizeTo: 1,
    layersInOrder: [
      {
        name: 'Background',
        path: 'BACKGROUNDS',
        description: 'Background attribute',
        files: [
          {
            name: 'Blue',
            path: 'Blue.png',
            weight: 25,
            description: 'Rarity 25 in 100',
          },
          {
            name: 'Dark Brown',
            path: 'Dark_Brown.png',
            weight: 15,
            description: 'Rarity 15 in 100',
          },
          {
            name: 'Dark Green',
            path: 'Dark_Green.png',
            weight: 10,
            description: 'Rarity 10 in 100',
          },
          {
            name: 'Light Brown',
            path: 'Light_Brown.png',
            weight: 20,
            description: 'Rarity 20 in 100',
          },
          {
            name: 'Light Gray',
            path: 'Light_Gray.png',
            weight: 10,
            description: 'Rarity 10 in 100',
          },
          {
            name: 'Red',
            path: 'Red.png',
            weight: 20,
            description: 'Rarity 20 in 100',
          },
        ],
      },
      {
        name: 'Shoulder',
        path: 'SHOULDER',
        description: 'Shoulder accessory attribute',
        files: [
          {
            name: 'Bo',
            path: 'BO.png',
            weight: 8,
            description: 'Rarity 8 in 100',
          },
          {
            name: 'Burrito',
            path: 'BURRITO.png',
            weight: 4,
            description: 'Rarity 4 in 100',
          },
          {
            name: 'Cosmic Spear',
            path: 'COSMIC_SPEAR.png',
            weight: 6,
            description: 'Rarity 6 in 100',
          },
          {
            name: 'Cyber Scythe',
            path: 'CYBER_SCYTHE.png',
            weight: 7,
            description: 'Rarity 7 in 100',
          },
          {
            name: 'Double Elemental',
            path: 'DOUBLE_ELEMENTAL_SWORD.png',
            weight: 6,
            description: 'Rarity 6 in 100',
          },
          {
            name: 'Double Scythe',
            path: 'DOUBLE_SCYTHE.png',
            weight: 7,
            description: 'Rarity 7 in 100',
          },
          {
            name: 'Dragon',
            path: 'DRAGON.png',
            weight: 5,
            description: 'Rarity 5 in 100',
          },
          {
            name: 'Emperor Spear',
            path: 'EMPEROR_SPEAR.png',
            weight: 6,
            description: 'Rarity 6 in 100',
          },
          {
            name: 'Hatchet',
            path: 'HATCHET.png',
            weight: 6,
            description: 'Rarity 6 in 100',
          },
          {
            name: 'Hyena',
            path: 'HYENA.png',
            weight: 2,
            description: 'Rarity special 2 in 100',
          },
          {
            name: 'Lula',
            path: 'LULA.png',
            weight: 1,
            description: 'Rarity special 1 in 100',
          },
          {
            name: 'Neon Sword',
            path: 'NEON_SWORD.png',
            weight: 7,
            description: 'Rarity 7 in 100',
          },
          {
            name: 'Nunschucks',
            path: 'NUNCHUCKS.png',
            weight: 8,
            description: 'Rarity 8 in 100',
          },
          {
            name: 'Octopus',
            path: 'OCTOPUS.png',
            weight: 3,
            description: 'Rarity special 3 in 100',
          },
          {
            name: 'Panda',
            path: 'PANDA.png',
            weight: 4,
            description: 'Rarity 4 in 100',
          },
          {
            name: 'Pentoshi',
            path: 'PENTOSHI.png',
            weight: 3,
            description: 'Rarity special 3 in 100',
          },
          {
            name: 'Possum',
            path: 'POSSUM.png',
            weight: 4,
            description: 'Rarity 4 in 100',
          },
          {
            name: 'Sky Katana',
            path: 'SKY_KATANA.png',
            weight: 5,
            description: 'Rarity 5 in 100',
          },
          {
            name: 'Sword',
            path: 'SWORD.png',
            weight: 5,
            description: 'Rarity 5 in 100',
          },
          {
            name: 'Vodoo doll',
            path: 'VODOO_DOLL.png',
            weight: 3,
            description: 'Rarity special 3 in 100',
          },
        ],
      },
      {
        name: 'Fur',
        path: 'FUR',
        description: 'Fur skin attribute',
        files: [],
        variants: [
          {
            name: blackSensei.name,
            path: blackSensei.path,
            weight: 21,
            description: 'Rarity 21 in 100',
            files: [
              {
                name: 'Black',
                path: 'BLACK_FUR.png',
              },
            ],
          },
          {
            name: whiteSensei.name,
            path: whiteSensei.path,
            weight: 21,
            description: 'Rarity 21 in 100',
            files: [
              {
                name: 'White',
                path: 'WHITE_FUR.png',
              },
            ],
          },
          {
            name: brownSensei.name,
            path: brownSensei.path,
            weight: 21,
            description: 'Rarity 21 in 100',
            files: [
              {
                name: 'Brown',
                path: 'BROWN_FUR.png',
              },
            ],
          },
          {
            name: redSensei.name,
            path: redSensei.path,
            weight: 21,
            description: 'Rarity 21 in 100',
            files: [
              {
                name: 'Red',
                path: 'RED_FUR.png',
              },
            ],
          },
          {
            name: specialEarthSensei.name,
            path: specialEarthSensei.path,
            weight: 4,
            description: 'Rarity special 4 in 100',
            files: [
              {
                name: 'Special Earth',
                path: 'EARTH_FUR.png',
              },
            ],
          },
          {
            name: specialElderSensei.name,
            path: specialElderSensei.path,
            weight: 2,
            description: 'Rarity special 2 in 100',
            files: [
              {
                name: 'Special Elder',
                path: 'ELDER_FUR.png',
              },
            ],
          },
          {
            name: specialElectricitySensei.name,
            path: specialElectricitySensei.path,
            weight: 4,
            description: 'Rarity special 4 in 100',
            files: [
              {
                name: 'Special Electricity',
                path: 'ELECTRIC_FUR.png',
              },
            ],
          },
          {
            name: specialFireSensei.name,
            path: specialFireSensei.path,
            weight: 3,
            description: 'Rarity special 3 in 100',
            files: [
              {
                name: 'Special Fire',
                path: 'FIRE_FUR.png',
              },
            ],
          },
          {
            name: specialIceSensei.name,
            path: specialIceSensei.path,
            weight: 3,
            description: 'Rarity special 3 in 100',
            files: [
              {
                name: 'Special Ice',
                path: 'ICE_FUR.png',
              },
            ],
          },
        ],
      },
      {
        name: 'Top',
        path: 'TOPS',
        description: 'Tops attribute',
        files: [
          {
            name: 'After Office',
            path: 'After_Office.png',
            weight: 3.5,
            description: 'Rarity 2.5 in 100',
          },
          {
            name: 'Banana Tux',
            path: 'Banana_Tux.png',
            weight: 1,
            description: 'Rarity 1 in 100',
          },
          // {
          //   name: 'Boxing gloves',
          //   path: 'BOXING_GLOVES.png',
          //   weight: 4,
          //   description: 'Rarity 4 in 100',
          // },
          {
            name: 'Bath Robe',
            path: 'Bath_Robe.png',
            weight: 1.5,
            description: 'Rarity 1.5 in 100',
          },
          {
            name: 'Bionic Arms',
            path: 'Bionic_Arms.png',
            weight: 0.5,
            description: 'Rarity special 0.5 in 100',
          },
          {
            name: 'Black Hoodie',
            path: 'Black_Hoodie.png',
            weight: 2.5,
            description: 'Rarity 2.5 in 100',
          },
          {
            name: 'Black Shirt',
            path: 'Black_Shirt.png',
            weight: 2.5,
            description: 'Rarity 2.5 in 100',
          },
          {
            name: 'Black Tank Top',
            path: 'Black_Tank_Top.png',
            weight: 3,
            description: 'Rarity 2 in 100',
          },
          {
            name: 'Black Turtleneck',
            path: 'Black_Turtleneck.png',
            weight: 3,
            description: 'Rarity 2 in 100',
          },
          {
            name: 'Blade Scar',
            path: 'Blade_Scar.png',
            weight: 2,
            description: 'Rarity 1.5 in 100',
          },
          {
            name: 'Blue Oxford',
            path: 'Blue_Oxford.png',
            weight: 2,
            description: 'Rarity 2 in 100',
          },
          {
            name: 'Brown Hooded Shirt',
            path: 'Brown_Hooded_Shirt.png',
            weight: 2,
            description: 'Rarity 2 in 100',
          },
          {
            name: 'Brown Turtleneck',
            path: 'Brown_Turtleneck.png',
            weight: 3,
            description: 'Rarity 3 in 100',
          },
          {
            name: 'Circle Golden Gi',
            path: 'Circle_Golden_Gi.png',
            weight: 2.5,
            description: 'Rarity 2.5 in 100',
          },
          {
            name: 'Circle Green Gi',
            path: 'Circle_Green_Gi.png',
            weight: 2.5,
            description: 'Rarity 2.5 in 100',
          },
          {
            name: 'Circle Magenta Gi',
            path: 'Circle_Magenta_Gi.png',
            weight: 2.5,
            description: 'Rarity 2.5 in 100',
          },
          {
            name: 'Circle Cyan Gi',
            path: 'Circle_Cyan_Gi.png',
            weight: 2.5,
            description: 'Rarity 2.5 in 100',
          },
          {
            name: 'Square Cyan Gi',
            path: 'Square_Cyan_Gi.png',
            weight: 2.5,
            description: 'Rarity 2.5 in 100',
          },
          {
            name: 'Square Green Gi',
            path: 'Square_Green_Gi.png',
            weight: 2.5,
            description: 'Rarity 2.5 in 100',
          },
          {
            name: 'Square Orange Gi',
            path: 'Square_Orange_Gi.png',
            weight: 2.5,
            description: 'Rarity 2.5 in 100',
          },
          {
            name: 'Square Magenta Gi',
            path: 'Square_Magenta_Gi.png',
            weight: 2.5,
            description: 'Rarity 2.5 in 100',
          },
          {
            name: 'Eastwood Poncho',
            path: 'Eastwood_Poncho.png',
            weight: 2.5,
            description: 'Rarity 1.5 in 100',
          },
          {
            name: 'Emperor',
            path: 'Emperor.png',
            weight: 1,
            description: 'Rarity 1 in 100',
          },
          {
            name: 'Fire General',
            path: 'Fire_General.png',
            weight: 1.5,
            description: 'Rarity 1.5 in 100',
          },
          {
            name: 'Frank Gi',
            path: 'Frank_Gi.png',
            weight: 0.5,
            description: 'Rarity special 0.5 in 100',
          },
          {
            name: 'Green Shirt',
            path: 'Green_Shirt.png',
            weight: 2,
            description: 'Rarity special 2 in 100',
          },
          {
            name: 'Hawaiian Shirt',
            path: 'Hawaiian_Shirt.png',
            weight: 1.5,
            description: 'Rarity special 1.5 in 100',
          },
          {
            name: 'Hoodie Over T-Shirt',
            path: 'Hoodie_Over_Tshirt.png',
            weight: 2.5,
            description: 'Rarity special 2.5 in 100',
          },
          // {
          //   name: 'Killer Threes',
          //   path: 'Killer_Threes.png',
          //   weight: 2,
          //   description: 'Rarity special 2 in 100',
          // },
          {
            name: 'Leather Jacket',
            path: 'Leather_Jacket.png',
            weight: 1.5,
            description: 'Rarity special 1.5 in 100',
          },
          {
            name: 'Muay Thai Band',
            path: 'Muay_Thai_Band.png',
            weight: 1.5,
            description: 'Rarity special 1.5 in 100',
          },
          {
            name: 'Pilot',
            path: 'Pilot.png',
            weight: 1,
            description: 'Rarity special 1 in 100',
          },
          {
            name: 'Rashguard White',
            path: 'Rash_Guard_White.png',
            weight: 3,
            description: 'Rarity special 3 in 100',
          },
          {
            name: 'Rashguard Blue',
            path: 'Rash_Guard_Blue.png',
            weight: 2.5,
            description: 'Rarity special 2.5 in 100',
          },
          {
            name: 'Rashguard Purple',
            path: 'Rash_Guard_Purple.png',
            weight: 2,
            description: 'Rarity special 2 in 100',
          },
          {
            name: 'Rashguard Brown',
            path: 'Rash_Guard_Brown.png',
            weight: 1.5,
            description: 'Rarity special 1.5 in 100',
          },
          {
            name: 'Rashguard Black',
            path: 'Rash_Guard_Black.png',
            weight: 1,
            description: 'Rarity special 1 in 100',
          },
          {
            name: 'Red Shirt',
            path: 'Red_Shirt.png',
            weight: 2,
            description: 'Rarity special 2 in 100',
          },
          {
            name: 'Sleeveless Hoodie',
            path: 'Sleeveless_Hoodie.png',
            weight: 1.5,
            description: 'Rarity special 1.5 in 100',
          },
          {
            name: 'Sports Jacket Red',
            path: 'Sports_Jacket_Red.png',
            weight: 2.5,
            description: 'Rarity special 2.5 in 100',
          },
          {
            name: 'Sports Jacket Blue',
            path: 'Sports_Jacket_Blue.png',
            weight: 2.5,
            description: 'Rarity special 2.5 in 100',
          },
          {
            name: 'Tang Suit',
            path: 'Tang_Suit.png',
            weight: 1,
            description: 'Rarity special 1 in 100',
          },
          {
            name: 'Tee Scarf',
            path: 'Tee_Scarf.png',
            weight: 1,
            description: 'Rarity special 1 in 100',
          },
          {
            name: 'Turtleneck Jacket',
            path: 'Turtleneck_Jacket.png',
            weight: 2.5,
            description: 'Rarity special 2.5 in 100',
          },
          {
            name: 'Vest',
            path: 'Vest.png',
            weight: 2,
            description: 'Rarity special 2 in 100',
          },
          {
            name: 'White Shirt',
            path: 'White_Shirt.png',
            weight: 2.5,
            description: 'Rarity special 2.5 in 100',
          },
          {
            name: 'White Tanktop',
            path: 'White_Tanktop.png',
            weight: 2,
            description: 'Rarity special 2 in 100',
          },
          {
            name: 'White Turtleneck',
            path: 'White_Turtleneck.png',
            weight: 2.5,
            description: 'Rarity special 2.5 in 100',
          },
          {
            name: 'Wrestler',
            path: 'Wrestler.png',
            weight: 1.5,
            description: 'Rarity special 1.5 in 100',
          },
          {
            name: 'Yellow Oxford',
            path: 'Yellow_Oxford.png',
            weight: 2.5,
            description: 'Rarity special 2.5 in 100',
          },
          {
            name: 'Yellow Shirt',
            path: 'Yellow_Shirt.png',
            weight: 2,
            description: 'Rarity special 2 in 100',
          },
        ],
      },
      {
        name: 'Face',
        path: 'FACE',
        description: 'Face attribute',
        files: [
          {
            name: 'Face',
            path: 'THE_FILE.png',
            weight: 100,
            description: 'Rarity 100 in 100',
          },
        ],
      },
      {
        name: 'Scar',
        path: 'SCARS',
        description: 'Scars attribute',
        files: [
          {
            name: 'None 1',
            path: '',
            weight: 14,
            isNone: true,
            description: 'Rarity 70 in 100',
          },
          {
            name: 'None 2',
            path: '',
            weight: 14,
            isNone: true,
            description: 'Rarity 70 in 100',
          },
          {
            name: 'None 3',
            path: '',
            weight: 14,
            isNone: true,
            description: 'Rarity 70 in 100',
          },
          {
            name: 'None 4',
            path: '',
            weight: 14,
            isNone: true,
            description: 'Rarity 70 in 100',
          },
          {
            name: 'None 5',
            path: '',
            weight: 14,
            isNone: true,
            description: 'Rarity 70 in 100',
          },
          {
            name: 'Cross',
            path: 'CROSS_FOREHEAD.png',
            weight: 5,
            description: 'Rarity 5 in 100',
          },
          {
            name: 'Ear',
            path: 'EAR_SCAR.png',
            weight: 5,
            description: 'Rarity 5 in 100',
          },
          {
            name: 'Knife',
            path: 'KNIFE_SCAR.png',
            weight: 5,
            description: 'Rarity 5 in 100',
          },
          {
            name: 'Chin',
            path: 'CHIN.png',
            weight: 5,
            description: 'Rarity 5 in 100',
          },
          {
            name: 'Mouth',
            path: 'SCAR_MOUTH.png',
            weight: 5,
            description: 'Rarity 5 in 100',
          },
          {
            name: 'Nose',
            path: 'SCAR_NOSE.png',
            weight: 5,
            description: 'Rarity 5 in 100',
          },
        ],
      },
      {
        name: 'Beard',
        path: 'BEARDS',
        description: 'Beards attribute',
        files: [],
        variants: [
          {
            name: blackSensei.name,
            path: blackSensei.path,
            weight: 100,
            description: 'Rarity 100 in 100',
            files: [
              {
                name: 'Afro black',
                path: 'AFRO_BEARD_BLACK.png',
              },
              {
                name: 'Macho black',
                path: 'MACHO_BLACK.png',
              },
              {
                name: 'Messy black',
                path: 'MESSY_BEARD_BLACK.png',
              },
              {
                name: 'Round black',
                path: 'ROUND_BLACK.png',
              },
              {
                name: 'Round Cheek black',
                path: 'ROUND_CHEEK_BEARD_BLACK.png',
              },
              {
                name: 'Spike black',
                path: 'SPIKE_BEARD_BLACK.png',
              },
              {
                name: 'Stone black',
                path: 'STONE_BEARD_BLACK.png',
              },
              {
                name: 'Thick black',
                path: 'THICK_BLACK.png',
              },
              {
                name: 'Triangle black',
                path: 'TRIANGLE_BEARD_BLACK.png',
              },
              {
                name: 'Wisdom black',
                path: 'WISDOM_BEARD_BLACK.png',
              },
            ],
          },
          {
            name: whiteSensei.name,
            path: whiteSensei.path,
            weight: 100,
            description: 'Rarity 100 in 100',
            files: [
              {
                name: 'Afro white',
                path: 'AFRO_BEARD_WHITE.png',
              },
              {
                name: 'Macho white',
                path: 'MACHO_WHITE.png',
              },
              {
                name: 'Messy white',
                path: 'MESSY_BEARD_WHITE.png',
              },
              {
                name: 'Round white',
                path: 'ROUND_WHITE.png',
              },
              {
                name: 'Round cheek white',
                path: 'ROUND_CHEEK_BEARD_WHITE.png',
              },
              {
                name: 'Spike white',
                path: 'SPIKE_BEARD_WHITE.png',
              },
              {
                name: 'Stone white',
                path: 'STONE_BEARD_WHITE.png',
              },
              {
                name: 'Thick white',
                path: 'THICK_WHITE.png',
              },
              {
                name: 'Triangle white',
                path: 'TRIANGLE_BEARD_WHITE.png',
              },
              {
                name: 'Wisdom white',
                path: 'WISDOM_BEARD_WHITE.png',
              },
            ],
          },
          {
            name: brownSensei.name,
            path: brownSensei.path,
            weight: 100,
            description: 'Rarity 100 in 100',
            files: [
              {
                name: 'Afro brown',
                path: 'AFRO_BEARD_BROWN.png',
              },
              {
                name: 'Macho brown',
                path: 'MACHO_BROWN.png',
              },
              {
                name: 'Messy brown',
                path: 'MESSY_BEARD_BROWN.png',
              },
              {
                name: 'Round brown',
                path: 'ROUND_BROWN.png',
              },
              {
                name: 'Round Cheek brown',
                path: 'ROUND_CHEEK_BEARD_BROWN.png',
              },
              {
                name: 'Spike brown',
                path: 'SPIKE_BEARD_BROWN.png',
              },
              {
                name: 'Stone brown',
                path: 'STONE_BEARD_BROWN.png',
              },
              {
                name: 'Thick brown',
                path: 'THICK_BROWN.png',
              },
              {
                name: 'Triangle brown',
                path: 'TRIANGLE_BEARD_BROWN.png',
              },
              {
                name: 'Wisdom brown',
                path: 'WISDOM_BEARD_BROWN.png',
              },
            ],
          },
          {
            name: redSensei.name,
            path: redSensei.path,
            weight: 100,
            description: 'Rarity 100 in 100',
            files: [
              {
                name: 'Afro red',
                path: 'AFRO_BEARD_RED.png',
              },
              {
                name: 'Macho red',
                path: 'MACHO_RED.png',
              },
              {
                name: 'Messy red',
                path: 'MESSY_BEARD_RED.png',
              },
              {
                name: 'Round red',
                path: 'ROUND_RED.png',
              },
              {
                name: 'Round Cheek red',
                path: 'ROUND_CHEEK_BEARD_RED.png',
              },
              {
                name: 'Spike red',
                path: 'SPIKE_BEARD_RED.png',
              },
              {
                name: 'Stone red',
                path: 'STONE_BEARD_RED.png',
              },
              {
                name: 'Thick red',
                path: 'THICK_RED.png',
              },
              {
                name: 'Triangle red',
                path: 'TRIANGLE_BEARD_RED.png',
              },
              {
                name: 'Wisdom red',
                path: 'WISDOM_BEARD_RED.png',
              },
            ],
          },
          {
            name: specialEarthSensei.name,
            path: specialEarthSensei.path,
            weight: 100,
            description: 'Rarity 100 in 100',
            files: [
              {
                name: 'Earth',
                path: 'EARTH_BEARD.png',
              },
            ],
          },
          {
            name: specialElderSensei.name,
            path: specialElderSensei.path,
            weight: 100,
            description: 'Rarity 100 in 100',
            files: [
              {
                name: 'Elder',
                path: 'ELDER_BEARD.png',
              },
            ],
          },
          {
            name: specialElectricitySensei.name,
            path: specialElectricitySensei.path,
            weight: 100,
            description: 'Rarity 100 in 100',
            files: [
              {
                name: 'Electricity',
                path: 'ELECTRIC_BEARD.png',
              },
            ],
          },
          {
            name: specialFireSensei.name,
            path: specialFireSensei.path,
            weight: 100,
            description: 'Rarity 100 in 100',
            files: [
              {
                name: 'Fire',
                path: 'FIRE_BEARD.png',
              },
            ],
          },
          {
            name: specialIceSensei.name,
            path: specialIceSensei.path,
            weight: 100,
            description: 'Rarity 100 in 100',
            files: [
              {
                name: 'Ice',
                path: 'ICE_BEARD.png',
              },
            ],
          },
        ],
      },
      {
        name: 'Hair',
        path: 'HAIR',
        description: 'Hair attribute',
        files: [],
        variants: [
          {
            name: blackSensei.name,
            path: blackSensei.path,
            weight: 100,
            description: 'Rarity 100 in 100',
            files: [
              {
                name: 'Afro black',
                path: 'AFRO_BLACK.png',
              },
              {
                name: 'Big afro black',
                path: 'BIG_AFRO_BLACK.png',
              },
              {
                name: 'Long black',
                path: 'LONG_HAIR_BLACK.png',
              },
              {
                name: 'Mohawk black',
                path: 'MOHAWK_BLACK.png',
              },
              {
                name: 'Short spiked black',
                path: 'SHORT_SPIKED_BLACK.png',
              },
              {
                name: 'Straight back black',
                path: 'STRAIGHT_BACK_BLACK.png',
              },
            ],
          },
          {
            name: whiteSensei.name,
            path: whiteSensei.path,
            weight: 100,
            description: 'Rarity 100 in 100',
            files: [
              {
                name: 'Afro white',
                path: 'AFRO_WHITE.png',
              },
              {
                name: 'Big afro white',
                path: 'BIG_AFRO_WHITE.png',
              },
              {
                name: 'Long white',
                path: 'LONG_HAIR_WHITE.png',
              },
              {
                name: 'Mohawk white',
                path: 'MOHAWK_WHITE.png',
              },
              {
                name: 'Short spiked white',
                path: 'SHORT_SPIKED_WHITE.png',
              },
              {
                name: 'Straight back white',
                path: 'STRAIGHT_BACK_WHITE.png',
              },
            ],
          },
          {
            name: brownSensei.name,
            path: brownSensei.path,
            weight: 100,
            description: 'Rarity 100 in 100',
            files: [
              {
                name: 'Afro brown',
                path: 'AFRO_BROWN.png',
              },
              {
                name: 'Big afro brown',
                path: 'BIG_AFRO_BROWN.png',
              },
              {
                name: 'Long brown',
                path: 'LONG_HAIR_BROWN.png',
              },
              {
                name: 'Mohawk brown',
                path: 'MOHAWK_BROWN.png',
              },
              {
                name: 'Short spiked brown',
                path: 'SHORT_SPIKED_BROWN.png',
              },
              {
                name: 'Straight back brown',
                path: 'STRAIGHT_BACK_BROWN.png',
              },
            ],
          },
          {
            name: redSensei.name,
            path: redSensei.path,
            weight: 100,
            description: 'Rarity 100 in 100',
            files: [
              {
                name: 'Afro red',
                path: 'AFRO_RED.png',
              },
              {
                name: 'Big afro red',
                path: 'BIG_AFRO_RED.png',
              },
              {
                name: 'Long red',
                path: 'LONG_HAIR_RED.png',
              },
              {
                name: 'Mohawk red',
                path: 'MOHAWK_RED.png',
              },
              {
                name: 'Short spiked red',
                path: 'SHORT_SPIKED_RED.png',
              },
              {
                name: 'Straight back red',
                path: 'STRAIGHT_BACK_RED.png',
              },
            ],
          },
          {
            name: specialEarthSensei.name,
            path: specialEarthSensei.path,
            weight: 100,
            description: 'Rarity 100 in 100',
            files: [
              {
                name: 'Earth',
                path: 'EARTH_SPECIAL.png',
              },
            ],
          },
          {
            name: specialElderSensei.name,
            path: specialElderSensei.path,
            weight: 100,
            description: 'Rarity 100 in 100',
            files: [
              {
                name: 'Elder',
                path: 'ELDER_HAIR.png',
              },
            ],
          },
          {
            name: specialElectricitySensei.name,
            path: specialElectricitySensei.path,
            weight: 100,
            description: 'Rarity 100 in 100',
            files: [
              {
                name: 'Electricity',
                path: 'ELECTRIC_SPECIAL.png',
              },
            ],
          },
          {
            name: specialFireSensei.name,
            path: specialFireSensei.path,
            weight: 100,
            description: 'Rarity 100 in 100',
            files: [
              {
                name: 'Fire',
                path: 'FIRE_HAIR.png',
              },
            ],
          },
          {
            name: specialIceSensei.name,
            path: specialIceSensei.path,
            weight: 100,
            description: 'Rarity 100 in 100',
            files: [
              {
                name: 'Ice',
                path: 'ICE_SPECIAL.png',
              },
            ],
          },
        ],
      },
      {
        name: 'Bandana',
        path: 'BANDANAS',
        description: 'Bandanas attribute',
        files: [
          {
            name: 'Blue',
            path: 'BLUE_BANDANA.png',
            weight: 20,
            description: 'Rarity 15 in 100',
          },
          // {
          //   name: 'Gray',
          //   path: 'GRAY_BANDANA.png',
          //   weight: 15,
          //   description: 'Rarity 15 in 100',
          // },
          {
            name: 'Horn',
            path: 'HORN_BANDANA.png',
            weight: 5,
            description: 'Rarity 5 in 100',
          },
          {
            name: 'Orange',
            path: 'ORANGE_BANDANA.png',
            weight: 20,
            description: 'Rarity 15 in 100',
          },
          {
            name: 'Yellow',
            path: 'YELLOW_BANDANA.png',
            weight: 20,
            description: 'Rarity 15 in 100',
          },
          {
            name: 'Karate',
            path: 'KARATE_BANDANA.png',
            weight: 5,
            description: 'Rarity 5 in 100',
          },
          {
            name: 'Shinobi',
            path: 'SHINOBI_BANDANA.png',
            weight: 5,
            description: 'Rarity 5 in 100',
          },
          {
            name: 'Tech',
            path: 'TECH_BANDANA.png',
            weight: 5,
            description: 'Rarity 5 in 100',
          },
          {
            name: 'Tiger',
            path: 'TIGER_BANDANA.png',
            weight: 10,
            description: 'Rarity 10 in 100',
          },
          {
            name: 'Zebra',
            path: 'ZEBRA_BANDANA.png',
            weight: 10,
            description: 'Rarity 10 in 100',
          },
        ],
      },
      {
        name: 'Eyes',
        path: 'EYES',
        description: 'Eyes attribute',
        files: [
          {
            name: 'Avatar',
            path: 'AVATAR_EYES.png',
            weight: 5,
            description: 'Rarity 5 in 100',
          },
          {
            name: 'Blind',
            path: 'BLIND_EYES.png',
            weight: 5,
            description: 'Rarity 5 in 100',
          },
          {
            name: 'Blue',
            path: 'NORMAL_BLUE_EYES.png',
            weight: 20,
            description: 'Rarity 20 in 100',
          },
          {
            name: 'Brown',
            path: 'NORMAL_BROWN_EYES.png',
            weight: 20,
            description: 'Rarity 20 in 100',
          },
          {
            name: 'Peaceful',
            path: 'PEACEFUL_EYES.png',
            weight: 15,
            description: 'Rarity 15 in 100',
          },
          {
            name: 'Serious fire',
            path: 'SERIOUS_FIRE_EYES.png',
            weight: 12,
            description: 'Rarity 12 in 100',
          },
          {
            name: 'Serious heterocromia',
            path: 'SERIOUS_HETEROCROMIA_EYES.png',
            weight: 11,
            description: 'Rarity 11 in 100',
          },
          {
            name: 'Serious purple eyes',
            path: 'SERIOUS_PURPLE_EYES.png',
            weight: 12,
            description: 'Rarity 12 in 100',
          },
        ],
      },
      {
        name: 'Ear accessory',
        path: 'EAR_ACCESSORIES',
        description: 'Ear accessories attribute',
        files: [
          {
            name: 'All Seeing',
            path: 'ALL_SEEING_EARRING.png',
            weight: 5,
            description: 'Rarity 5 in 100',
          },
          {
            name: 'Bone',
            path: 'BONE_EARRING.png',
            weight: 15,
            description: 'Rarity 15 in 100',
          },
          {
            name: 'Neon',
            path: 'NEON_EARRING.png',
            weight: 15,
            description: 'Rarity 15 in 100',
          },
          {
            name: 'Pearl',
            path: 'PEARL_EARRING.png',
            weight: 15,
            description: 'Rarity 15 in 100',
          },
          {
            name: 'Seeing',
            path: 'SEEING_EARRING.png',
            weight: 10,
            description: 'Rarity 10 in 100',
          },
          {
            name: 'Three golden',
            path: 'THREE_GOLDEN_EARRING.png',
            weight: 40,
            description: 'Rarity 40 in 100',
          },
        ],
      },
      {
        name: 'Mouth accessory',
        path: 'MOUTH_ACCESSORIES',
        description: 'Mouth accessories description',
        files: [
          {
            name: 'None 1',
            path: '',
            isNone: true,
            weight: 5,
            description: 'Rarity 25 in 100',
          },
          {
            name: 'None 2',
            path: '',
            isNone: true,
            weight: 5,
            description: 'Rarity 25 in 100',
          },
          {
            name: 'None 3',
            path: '',
            isNone: true,
            weight: 5,
            description: 'Rarity 25 in 100',
          },
          {
            name: 'None 4',
            path: '',
            isNone: true,
            weight: 5,
            description: 'Rarity 25 in 100',
          },
          {
            name: 'None 5',
            path: '',
            isNone: true,
            weight: 5,
            description: 'Rarity 25 in 100',
          },
          {
            name: 'Ancient dragon',
            path: 'ANCIENT_DRAGON_LONG_PIPE.png',
            weight: 5,
            description: 'Rarity 5 in 100',
          },
          {
            name: 'Ancient long',
            path: 'ANCIENT_LONG_PIPE.png',
            weight: 5,
            description: 'Rarity 5 in 100',
          },
          {
            name: 'Bamboo',
            path: 'BAMBOO.png',
            weight: 10,
            description: 'Rarity 10 in 100',
          },
          {
            name: 'Chamomile',
            path: 'CHAMOMILE.png',
            weight: 10,
            description: 'Rarity 10 in 100',
          },
          {
            name: 'Cosmic pipe',
            path: 'COSMIC_PIPE.png',
            weight: 10,
            description: 'Rarity 10 in 100',
          },
          {
            name: 'Joint',
            path: 'JOINT.png',
            weight: 15,
            description: 'Rarity 15 in 100',
          },
          {
            name: 'Weat',
            path: 'WEAT.png',
            weight: 20,
            description: 'Rarity 20 in 100',
          },
        ],
      },
      {
        name: 'Glasses',
        path: 'GLASSES',
        description: 'Glasses attribute',
        files: [
          {
            name: 'None 1',
            path: '',
            isNone: true,
            weight: 13,
            description: 'Rarity 65 in 100',
          },
          {
            name: 'None 2',
            path: '',
            isNone: true,
            weight: 13,
            description: 'Rarity 65 in 100',
          },
          {
            name: 'None 3',
            path: '',
            isNone: true,
            weight: 13,
            description: 'Rarity 65 in 100',
          },
          {
            name: 'None 4',
            path: '',
            isNone: true,
            weight: 13,
            description: 'Rarity 65 in 100',
          },
          {
            name: 'None 5',
            path: '',
            isNone: true,
            weight: 13,
            description: 'Rarity 65 in 100',
          },
          {
            name: 'Badass',
            path: 'BADASS_GLASSES.png',
            weight: 5,
            description: 'Rarity 5 in 100',
          },
          {
            name: 'Eye patch',
            path: 'EYE_PATCH.png',
            weight: 3,
            description: 'Rarity 3 in 100',
          },
          {
            name: 'Laser glasses',
            path: 'LASER_GLASSES.png',
            weight: 5,
            description: 'Rarity 5 in 100',
          },
          {
            name: 'Monocle',
            path: 'MONOCLE.png',
            weight: 2,
            description: 'Rarity 2 in 100',
          },
          {
            name: 'Modern',
            path: 'PRINCESS_GLASSES.png',
            weight: 5,
            description: 'Rarity 5 in 100',
          },
          {
            name: 'Red glasses',
            path: 'RED_GLASSES.png',
            weight: 6,
            description: 'Rarity 6 in 100',
          },
          {
            name: 'Roshis glasses',
            path: 'ROSHIS_GLASSES.png',
            weight: 5,
            description: 'Rarity 5 in 100',
          },
          {
            name: 'Round glasses',
            path: 'ROUND_GLASSES.png',
            weight: 4,
            description: 'Rarity 4 in 100',
          },
        ],
      },
      {
        name: 'Fighter accessory',
        path: 'FIGHTER_ACCESSORIES',
        description: 'Fighter accessories attribute',
        files: [
          {
            name: 'None 1',
            path: '',
            isNone: true,
            weight: 19,
            description: 'Rarity 90 in 100',
          },
          {
            name: 'None 2',
            path: '',
            isNone: true,
            weight: 19,
            description: 'Rarity 90 in 100',
          },
          {
            name: 'None 3',
            path: '',
            isNone: true,
            weight: 19,
            description: 'Rarity 90 in 100',
          },
          {
            name: 'None 4',
            path: '',
            isNone: true,
            weight: 19,
            description: 'Rarity 90 in 100',
          },
          {
            name: 'None 5',
            path: '',
            isNone: true,
            weight: 19,
            description: 'Rarity 90 in 100',
          },
          // {
          //   name: 'Boxing gloves',
          //   path: 'BOXING_GLOVES.png',
          //   weight: 4,
          //   description: 'Rarity 4 in 100',
          // },
          {
            name: 'Champion belt',
            path: 'CHAMPION_BELT.png',
            weight: 2,
            description: 'Rarity 2 in 100',
          },
          {
            name: 'MMA gloves',
            path: 'MMA_GLOVES.png',
            weight: 3,
            description: 'Rarity 4 in 100',
          },
        ],
      },
    ],
  },
};
