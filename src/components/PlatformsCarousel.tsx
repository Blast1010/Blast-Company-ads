export function PlatformsCarousel() {
  const platforms = [
    {
      name: "Facebook Ads",
      image: "https://inpulsord.com.br/wp-content/uploads/2023/10/brand-ad01-3.png",
    },
    {
      name: "YouTube Ads",
      image: "https://inpulsord.com.br/wp-content/uploads/2023/10/4494487.png",
    },
    {
      name: "Instagram Ads",
      image: "https://inpulsord.com.br/wp-content/uploads/2023/10/brand-ad01-5.png",
    },
    {
      name: "Google Pesquisa",
      image: "https://inpulsord.com.br/wp-content/uploads/2023/10/brand-ad01-4.png",
    },
    {
      name: "Google Ads",
      image: "https://inpulsord.com.br/wp-content/uploads/2023/10/brand-ad01-1.png",
    },
    {
      name: "Google Maps",
      image: "https://inpulsord.com.br/wp-content/uploads/2024/01/agencia-de-trafego-pago-1.webp",
    },
  ];

  return (
    <section className="py-16 bg-background/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* Main platforms showcase */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {platforms.map((platform, index) => (
            <div
              key={platform.name}
              className="flex flex-col items-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-20 h-20 md:w-24 md:h-24 mb-4 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={platform.image}
                  alt={platform.name}
                  className="w-full h-full object-contain rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-sm md:text-base font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {platform.name}
              </span>
            </div>
          ))}
        </div>

        {/* Animated carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-8">
            {[...platforms, ...platforms].map((platform, index) => (
              <div key={`carousel-${index}`} className="flex-shrink-0">
                <div className="w-16 h-16 relative">
                  <img
                    src={platform.image}
                    alt={platform.name}
                    className="w-full h-full object-contain rounded-xl opacity-60 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}