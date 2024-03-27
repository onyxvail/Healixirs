import React from 'react';
import { Footer } from '../Components/Footer/Footer';
import sno from '../Components/Assets/sno.png';
import vyleyna from '../Components/Assets/vyleyna.png';


const AboutPage = () => {
  return (
    <div>
      <section className="py-16 px-4 md:px-8 lg:px-16 custom-background-color">
        <div class="sm:flex items-center max-w-screen-xl">
          <div class="sm:w-1/2 p-10">
            <div class="image object-center text-center">
              <img src={sno} alt="Developer" />
            </div>
          </div>
          <div class="sm:w-1/2 p-5">
            <div class="text">
              <h2 class="my-4 font-bold text-3xl sm:text-4xl">About <span class="text-indigo-600">Ons Hafi</span></h2>
              <p class="text-gray-700">
              I am a dedicated student of software engineering at ALX-Holberton, where I sharpen my skills to develop innovative solutions in the digital world. As the sole developer behind this portfolio project, I navigate the intricacies of full-stack development with precision and expertise. 

Motivated by a passion for technology and a commitment to excellence, I meticulously design and implement robust software solutions. I invite you to join me as I showcase my proficiency and dedication to the craft through this comprehensive portfolio endeavor.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* Project Lore section */}
<section className="py-8 px-4 md:px-8 lg:px-16 bg-gray-100">
  <div className="max-w-4xl mx-auto">
    <div className="py-8">
      <div className="text-4xl cursor-pointer relative before:absolute before:bg-customNeon before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500">
        <span className="relative inline-block mr-4">Project Lore</span>
      </div>
      <h1 className="text-lg text-customBlack mt-5">
      <span className="text-red-500">Project name: </span> Healixirs & Celestial Remedex: Vyleyna's Cosmic Codex.
      </h1>
      <p className="text-lg text-customBlack mt-5 "> <span className="text-red-500">Healixirs: </span> Represents Vyleyna's expertise in crafting potent healing potions and elixirs using rare herbs and mystical gear she gathers during her cosmic journeys. These healixirs are renowned for their miraculous properties and are sought after by those in need of healing and power across the galaxy.</p>
      <p className="text-lg text-customBlack mt-5"> <span className="text-red-500">Celestial Remedex: </span> Refers to Vyleyna's collection of cosmic remedies , each meticulously documented in her codex. These celestial remedies are not only effective in treating physical ailments but also possess mystical properties that can restore balance and harmony to the mind, body, and spirit. </p>
      <p className="text-lg text-customBlack mt-5"> <span className="text-red-500">Vyleyna's Cosmic Codex: </span>Symbolizes Vyleyna's legacy as a cosmic healer and guardian of ancient wisdom. Her codex serves as a repository of knowledge, containing centuries-old herbal remedies, mystical incantations, and cosmic insights gathered throughout her travels. It is a testament to her dedication to preserving the healing traditions of the cosmos and sharing them with those in need.</p>
      <p className="text-lg text-customBlack mt-5"> <span className="text-red-500">In summary,</span> "Healixirs & Celestial Remedex: Vyleyna's Cosmic Codex" encapsulates the essence of Vyleyna's journey as a cosmic healer and the invaluable Build and  knowledge she has accumulated along the way. It speaks to the power of healing and trade, the mysteries of the cosmos, and the enduring legacy of a shaman dedicated to serving others.</p>
    </div>
  </div>

  <div class="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-blue-400">
  <div class="relative">
    <img class="w-40 h-30 object-cover ml-20" src= {vyleyna} alt=""/>
  </div>
  <div class="px-6 py-4">
    <div class="text-xl font-semibold text-gray-800">Vyleyna</div>
    <p class="text-gray-600">the Exiled Starborn</p>
  </div>
  <div class="px-6 py-4">
    <span class="inline-block px-2 py-1 font-semibold text-teal-900 bg-teal-200 rounded-full">Eladrin Elf</span>
    <span class="inline-block px-2 py-1 font-semibold text-indigo-900 bg-indigo-200 rounded-full">Sorceress</span>
    <span class="inline-block px-2 py-1 font-semibold text-purple-900 bg-purple-200 rounded-full">Vendor</span>
    <span class="inline-block px-2 py-1 font-semibold text-yellow-900 bg-yellow-200 rounded-full">Healer</span>
    
  </div>
  <div class="px-6 py-4">
  </div>
</div>

</section>

      {/* Interactive Components section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 custom-background-color">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Vyleyna's Lore : </h2>
         <p>In the aeons before the first recorded deities, before even the forming of the prime material plane, walked Vyleyna. An Eladrin sorceress of unparalleled potential, she roamed the primordial chaos with a grace and power that none could match. Her innate connection to the nascent weave of magic flowed through her like a celestial river, granting her spells of devastating beauty.

However, Vyleyna yearned for deeper understanding, a oneness with the raw essence of creation. Drawn by a forbidden song, she delved into the abyssal depths of forbidden arcana, seeking to forge a stronger bond with the fundamental forces of the cosmos. In her ambitious pursuit, she unwittingly tapped into the very heartbeat of the universe, infusing her being with power beyond mortal comprehension.

This act, though granting her celestial abilities, came at a terrible cost. Bound to an ancient spirit awakened from its slumber, Vyleyna became its unwilling host. Feared and ostracized by the nascent beings she had hoped to protect, she was branded a harbinger of doom and cast out, cursed to wander the celestial planes for an eternity.

Yet, amidst the cold isolation of the cosmos, Vyleyna discovered a new purpose. Determined to redeem herself and use her celestial gifts for good, she embarked on a perpetual odyssey across the starlight. She gathers the very essence of celestial bodies – stardust, nebulae wisps, solar flares – forging them into potent elixirs and salves capable of healing not just physical wounds, but also the scars of the soul.

Vyleyna's journey is endless, a solitary dance amongst the constellations. Though her past is shrouded in the darkness of her transgression, her unwavering dedication to compassion shines brighter than any star. With each life she touches, with each potion she brews, she weaves a tapestry of redemption, proving that even in the vast emptiness of the cosmos, hope can blossom.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
