import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";
import sword from "./sword.png";

let all_product = [
  {
    id: 1,
    name: "Crimson Glyphs of Mana Duplication paired with Skull of Mysteria",
    category: "women",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 2,
    name: "Glacial Vestments of Sylvarien to harness the power of Frostmourne",
    category: "women",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 3,
    name: "Rosewood Enchantment of the Wood Elves tribe to enhance Fire Bolts and Summon Butterflies",
    category: "women",
    image: p3_img,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 4,
    name: "Clovercrest Valkyrie Plate of the royal of the Clover Kingdom Noelle silva",
    category: "women",
    image: p4_img,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 5,
    name: "Gorefang, the Mindbreaker's Pike made by the Orcs of the Bleeding Hollow ",
    category: "women",
    image: p5_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 6,
    name: "Crimson Nexus the Red Infinity Stone of Reality Shaping",
    category: "women",
    image: p6_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 7,
    name: "The Golden Armor of Lolth, coveted by dark elves, imbues its wearer with invincibility, shadow magic mastery, and dominion over spiders",
    category: "women",
    image: p7_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 8,
    name: "The Shadowcarved Sai, etched with ancient runes, empowers the Shadar-kai with shadowy prowess and swift, deadly precision",
    category: "women",
    image: p8_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 9,
    name: "The Emberforged Armor of Naivara, crafted from the fiery scales of a dragon, bestows upon the drow elves unmatched resilience against flame and the ability to harness the scorching power of their draconic ally",
    category: "women",
    image: p9_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 10,
    name: "The Sephiric Tome of Licht, wielded by the illustrious leader of the Elf Tribe and Apostle of Sephirah, contains the most potent and ancient spells known to existence, bearing the essence of primordial magic within its pages",
    category: "women",
    image: p10_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 11,
    name: "The Zephyrstar Staff, reconstructed by the Wood Elves, houses the bound essence of Sylph , the wind goddess and celestial energies, granting its wielder mastery over air currents and the guidance of stellar forces",
    category: "women",
    image: p11_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 12,
    name: "The Umbral Yari, crafted for the Shadar-kai, possesses a blade as dark as the depths of the void, honed to pierce through shadows and souls alike with chilling precision",
    category: "women",
    image: p12_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 13,
    name: "The Hozen Warrior Spear harnesses primal fury, while the Horadric Satchel contains boundless arcane secrets for adventurous souls.",
    category: "men",
    image: p13_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 14,
    name: "The Purple Major Glyph, pulsating with arcane energy, grants wielders enhanced magical abilities and insights into the mysteries of the cosmos",
    category: "men",
    image: p14_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 15,
    name: "Skjǫldr, a shield of legendary repute, defends its bearer with unyielding strength, forged in the fires of ancient battles and blessed by the gods themselves.",
    category: "men",
    image: p15_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 16,
    name: "The Violet Infinity Stone, pulsating with boundless energy, grants its wielder unparalleled strength and the ability to manipulate the very fabric of existence with ease.",
    category: "men",
    image: p16_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 17,
    name: "The Shadowsteel Scimitar, forged in the depths of the Hollow, dances through the darkness with lethal grace, embodying the cunning and ferocity of its dark elven masters.",
    category: "men",
    image: p17_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 18,
    name: "The Sith Lord's iconic weapon, Darth Maul's Double-bladed Lightsaber, strikes fear into the hearts of foes with its crimson blades, embodying the relentless power and mastery of the dark side of the Force.",
    category: "men",
    image: p18_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 19,
    name: "The Dwarven Thunderbow, meticulously crafted by skilled artisans of the mountains, unleashes devastating force with each arrow, blending precision engineering with raw dwarven strength.",
    category: "men",
    image: p19_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 20,
    name: "The Spear of Izanagi, an ancient relic steeped in divine power, pierces through darkness with radiant purpose, embodying the will of the gods to shape the fate of the world.",
    category: "men",
    image: p20_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 21,
    name: "The Velkhana Frostblade, honed from the icy scales of the legendary dragon, slices through foes with glacial precision, leaving a trail of frozen despair in its wake.",
    category: "men",
    image: p21_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 22,
    name: "The Goblin's Sting, a crude yet surprisingly effective bow crafted from scavenged materials, delivers swift and unexpected strikes, reflecting the cunning and resourcefulness of its goblin makers.",
    category: "men",
    image: p22_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 23,
    name: "The Artemis Bow of the Minyar Elves, adorned with intricate elven craftsmanship and blessed by the goddess of the hunt, Artemis, unleashes arrows with unparalleled accuracy and deadly grace, embodying the unity of nature and elven prowess.",
    category: "men",
    image: p23_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 24,
    name: "The Flail of Darnosh, wreathed in flames and born of Orgrimmar's fiery forges, smashes through enemy defenses with relentless fury, while his Sword  cleaves through foes with brutal efficiency, both bearing the mark of orcish strength.",
    category: "men",
    image: p24_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 25,
    name: "The Jotun Puff, a rare flower that flourishes in the mistlands, emits an otherworldly glow and releases a delicate, soothing fragrance said to calm even the most troubled spirits and heal the wounds of the soul.",
    category: "Herbs",
    image: p25_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 26,
    name: "The Grimoire of Grisha Yeager, penned with the secrets and sciences of the Titans, holds the key to unlocking the transformative power that turns humans into Titans, revealing the enigmatic truths of their origin and potential.",
    category: "Herbs",
    image: p26_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 27,
    name: "The Minted Draught, infused with the refreshing essence of menthe, invigorates the senses and revitalizes the spirit, offering a rejuvenating burst of energy with every sip.",
    category: "Herbs",
    image: p27_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 28,
    name: "The Azure Bloom Draught, concocted from the petals of a rare blue flower found deep within enchanted forests, grants the drinker heightened senses and a fleeting glimpse into the ethereal realms, offering clarity and insight amidst uncertainty.",
    category: "Herbs",
    image: p28_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 29,
    name: "The Verdant Bloom Elixir, brewed from the essence of a mysterious green flower found in secluded groves, imbues the drinker with vitality and harmony, fostering growth and renewal in both body and spirit.",
    category: "Herbs",
    image: p29_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 30,
    name: "Rosemary Drops, distilled from the essence of the sacred herb, bestow upon the imbiber heightened clarity of mind and resilience, warding off maladies of body and spirit with their rejuvenating properties.",
    category: "Herbs",
    image: p30_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 31,
    name: "Vyleyna's Rejuvenation Elixir, crafted with alchemical precision and infused with the essence of life, restores vitality and vigor to the weary, granting renewed strength and resilience against the trials of the world.",
    category: "Herbs",
    image: p31_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 32,
    name: "The Arborial Elixir, brewed from the essence of ancient trees and infused with the whispers of the forest, grants the drinker a deep connection to nature, imbuing them with strength, vitality, and a profound sense of harmony with the natural world.",
    category: "Herbs",
    image: p32_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 33,
    name: "The Shadowbloom Tonic, distilled from the rare flora that thrives in the depths of the Black Forest, possesses mysterious properties that heighten perception and grant fleeting glimpses into the realm of shadows, offering both enlightenment and peril to those who dare to partake",
    category: "Herbs",
    image: p33_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 34,
    name: "The Celestial Blossom Elixir, crafted from the petals of a pristine white flower found only in the most sacred groves, bestows upon the drinker a profound regeneration, rejuvenating the body, mind, and spirit with divine purity and grace.",
    category: "Herbs",
    image: p34_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 35,
    name: "The Plagueborne Draught, distilled from the tainted waters of the plague biome's cursed rain, grants the imbiber temporary immunity to toxins and diseases, albeit with a faint aura of corruption lingering upon the soul.",
    category: "Herbs",
    image: p35_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 36,
    name: "The Shadow Veil Tonic, concocted from the essence of elusive shadow herbs, grants the drinker temporary invisibility, allowing them to move unseen through the world, slipping past enemies and obstacles with silent grace.",
    category: "Herbs",
    image: p36_img,
    new_price: 85.0,
    old_price: 120.5,
  },

  {
    id: 37,
    name: "The Blade of the Virtuoso, wielded by the master swordsman whose skill is unmatched, this legendary sword slices through the air with unmatched precision and deadly finesse, earning its name through the tales of countless victories.",
    category: "women",
    image: sword,
    new_price: 120.0,
    old_price: 250.5,
  },
];

export default all_product;
