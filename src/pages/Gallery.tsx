import { useState } from "react";
import Hero from "@/components/Hero";
import heroHome from "@/assets/hero-home.jpg";
import heroEastJava from "@/assets/bromo0-beyourtour.jpg";
import heroCentralJava from "@/assets/hero-central-java.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import baliHoneymoon from "@/assets/bali-honeymoon-beyourtour.jpeg";
import bali1 from "@/assets/bali1-beyourtour.jpg";
import bali2 from "@/assets/bali2-beyourtour.jpeg";
import bali3 from "@/assets/bali3-beyourtour.jpg";
import bali4 from "@/assets/bali4-beyourtour.jpeg";
import bandung1 from "@/assets/bandung1-beyourtour.jpg";
import bandung2 from "@/assets/bandung2-beyourtour.jpg";
import batuAngkruk from "@/assets/batu-angkruk.jpeg";
import batuPandang from "@/assets/batu-pandang-ratapan-angin.jpg";
import borobudur from "@/assets/borobudur-beyourtour.jpg";
import bromo1 from "@/assets/bromo1-beyourtour.jpeg";
import bromo6 from "@/assets/bromo6-beyourtour.jpg";
import bromo7 from "@/assets/bromo7-beyourtour.jpg";
import bromo8 from "@/assets/bromo8-beyourtour.jpg";
import bromotour1 from "@/assets/bromotour1-beyourtour.jpg";
import kawahIjen from "@/assets/kawahijen-beyourtour.jpg";
import penanjakan from "@/assets/penanjakan-bromo.jpg";
import tamanNasional from "@/assets/taman-nasional-bromo.jpg";
import telagaWarna from "@/assets/telagawarna-beyourtour.jpg";
import tuguBromo from "@/assets/tugu-bromo.jpg";
import tumpakSewu from "@/assets/tumpak-sewu.jpg";
import jeep1 from "@/assets/jeep1.jpg";
import innovaReborn from "@/assets/innova-reborn.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const images = [
    { src: heroHome, alt: "Java volcanic landscape with rice terraces", category: "Landscapes" },
    { src: heroEastJava, alt: "Mount Bromo sunrise", category: "East Java" },
    { src: heroCentralJava, alt: "Borobudur temple at sunrise", category: "Central Java" },
    { src: gallery1, alt: "Rainforest trekking adventure", category: "Activities" },
    { src: gallery2, alt: "Traditional batik textiles market", category: "Culture" },
    { src: gallery3, alt: "Indonesian culinary experience", category: "Cuisine" },
    { src: gallery4, alt: "Ancient Indonesian temple architecture", category: "Culture" },
    { src: baliHoneymoon, alt: "Bali honeymoon destination", category: "Bali" },
    { src: bali1, alt: "Bali beach resort", category: "Bali" },
    { src: bali2, alt: "Bali rice terraces", category: "Bali" },
    { src: bali3, alt: "Bali temple ceremony", category: "Bali" },
    { src: bali4, alt: "Bali tropical paradise", category: "Bali" },
    { src: bandung1, alt: "Bandung city tour", category: "West Java" },
    { src: bandung2, alt: "Bandung highland scenery", category: "West Java" },
    { src: batuAngkruk, alt: "Batu Angkruk viewpoint", category: "East Java" },
    { src: batuPandang, alt: "Batu Pandang Ratapan Angin", category: "East Java" },
    { src: borobudur, alt: "Borobudur temple complex", category: "Central Java" },
    { src: bromo1, alt: "Mount Bromo landscape", category: "East Java" },
    { src: bromo6, alt: "Bromo crater rim", category: "East Java" },
    { src: bromo7, alt: "Bromo sunrise vista", category: "East Java" },
    { src: bromo8, alt: "Bromo morning mist", category: "East Java" },
    { src: bromotour1, alt: "Bromo tour experience", category: "East Java" },
    { src: kawahIjen, alt: "Kawah Ijen blue fire", category: "East Java" },
    { src: penanjakan, alt: "Penanjakan viewpoint Bromo", category: "East Java" },
    { src: tamanNasional, alt: "Bromo Tengger Semeru National Park", category: "East Java" },
    { src: telagaWarna, alt: "Telaga Warna colorful lake", category: "East Java" },
    { src: tuguBromo, alt: "Tugu Bromo monument", category: "East Java" },
    { src: tumpakSewu, alt: "Tumpak Sewu waterfall", category: "East Java" },
    { src: jeep1, alt: "Bromo jeep adventure", category: "Activities" },
    { src: innovaReborn, alt: "Private tour vehicle", category: "Activities" },
  ];

  return (
    <div>
      <Hero
        image={heroHome}
        title="Our Gallery"
        subtitle="Visual stories from Java's most stunning destinations"
        height="medium"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Discover Java Through Our Lens
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore captivating images from our tours across Java. From volcanic sunrises to ancient temples, 
              vibrant markets to serene tea plantations, these moments capture the essence of Indonesian adventure. 
              Each photograph tells a story of discovery, culture, and natural beauty.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["All", "East Java", "Central Java", "West Java", "Bali", "Landscapes", "Culture", "Activities", "Cuisine"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-muted text-muted-foreground hover:bg-muted/70 hover:scale-105"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images
              .filter((img) => selectedCategory === "All" || img.category === selectedCategory)
              .map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer card-shadow hover:card-shadow-hover transition-smooth"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-2">
                      {image.category}
                    </span>
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Media CTA */}
          <div className="mt-16 text-center bg-muted/30 rounded-2xl p-12">
            <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              Follow Our Journey
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Stay connected with Be Your Tour for daily inspiration, travel tips, and behind-the-scenes stories 
              from our adventures across Java. Share your own experiences with #BeYourTour!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://instagram.com/beyourtour"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-11 px-6 py-2.5 rounded-lg text-sm font-semibold bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg transition-smooth"
              >
                Follow on Instagram
              </a>
              <a
                href="https://facebook.com/beyourtour"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-11 px-6 py-2.5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-smooth"
              >
                Like on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-foreground/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-accent transition-smooth"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
