import { useState } from "react";
import Hero from "@/components/Hero";
import heroHome from "@/assets/hero-home.jpg";
import heroEastJava from "@/assets/bromo0-beyourtour.jpg";
import heroCentralJava from "@/assets/hero-central-java.jpg";
import heroWestJava from "@/assets/hero-west-java.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const images = [
    { src: heroHome, alt: "Java volcanic landscape with rice terraces", category: "Landscapes" },
    { src: heroEastJava, alt: "Mount Bromo sunrise", category: "East Java" },
    { src: heroCentralJava, alt: "Borobudur temple at sunrise", category: "Central Java" },
    { src: heroWestJava, alt: "West Java tea plantations", category: "West Java" },
    { src: gallery1, alt: "Rainforest trekking adventure", category: "Activities" },
    { src: gallery2, alt: "Traditional batik textiles market", category: "Culture" },
    { src: gallery3, alt: "Indonesian culinary experience", category: "Cuisine" },
    { src: gallery4, alt: "Ancient Indonesian temple architecture", category: "Culture" },
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
            {["All", "East Java", "Central Java", "West Java", "Landscapes", "Culture", "Activities", "Cuisine"].map((category) => (
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
