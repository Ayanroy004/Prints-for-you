import {AnimatePresence, motion} from 'motion/react';
import {ArrowUpRight, MessageCircle} from 'lucide-react';
import {
  BEST_SELLING_PRODUCTS,
  SERVICE_CATEGORIES,
  buildWhatsAppUrl,
  type ProductCategory,
} from '../data/catalog';
import {ResilientImage} from './ResilientImage';

interface ServicesAndCatalogProps {
  activeCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  onEnquireProduct: (productName: string, category: string) => void;
}

const FILTER_TABS: {label: string; value: ProductCategory}[] = [
  {label: 'All Products', value: 'All'},
  {label: 'Stickers', value: 'Stickers'},
  {label: 'Business Cards', value: 'Business Cards'},
  {label: 'Wedding Invitations', value: 'Wedding Invitations'},
  {label: 'Packaging', value: 'Packaging'},
  {label: 'Custom Prints', value: 'Custom Prints'},
];

export function ServicesAndCatalog({
  activeCategory,
  onSelectCategory,
  onEnquireProduct,
}: ServicesAndCatalogProps) {
  const filteredProducts =
    activeCategory === 'All'
      ? BEST_SELLING_PRODUCTS
      : BEST_SELLING_PRODUCTS.filter((p) => p.category === activeCategory);

  const handleCategoryCardClick = (category: Exclude<ProductCategory, 'All'>) => {
    onSelectCategory(category);
    const catalogEl = document.getElementById('best-sellers');
    if (catalogEl) {
      catalogEl.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  return (
    <section id="products" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Our Printing Services */}
        <div className="space-y-10">
          <motion.div
            initial={{opacity: 0, y: 16}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.25}}
            transition={{duration: 0.4, ease: [0.16, 1, 0.3, 1]}}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4"
          >
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-semibold tracking-wider uppercase text-[#9D174D]">
                Our Printing Services
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#0F172A] tracking-tight">
                Crafted Print Categories for Brands &amp; Celebrations
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 max-w-md">
              Select any category below to filter our signature print runs or request custom dimensions and finishes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {SERVICE_CATEGORIES.map((service, index) => {
              const isSelected = activeCategory === service.id;
              return (
                <motion.button
                  key={service.id}
                  type="button"
                  initial={{opacity: 0, y: 18}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true, amount: 0.15}}
                  transition={{
                    duration: 0.38,
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{y: -4}}
                  whileTap={{scale: 0.99}}
                  onClick={() => handleCategoryCardClick(service.id)}
                  className={`group text-left rounded-2xl overflow-hidden border transition-shadow duration-200 bg-white flex flex-col cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9D174D] ${
                    isSelected
                      ? 'border-[#9D174D] shadow-md'
                      : 'border-slate-200 hover:border-[#9D174D]/50 hover:shadow-md'
                  }`}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-slate-50">
                    <ResilientImage
                      src={service.image}
                      alt={service.title}
                      title={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between gap-3">
                    <div className="space-y-1.5">
                      <p className="text-xs text-slate-500 font-medium tabular-nums">
                        {service.index} <span aria-hidden="true">·</span> {service.turnaround}
                      </p>
                      <h3 className="text-base font-semibold text-[#0F172A] group-hover:text-[#9D174D] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {service.tagline}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#9D174D] tabular-nums">
                      <span>{service.startingAt}</span>
                      <ArrowUpRight
                        className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Best Selling Products */}
        <div id="best-sellers" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold tracking-wider uppercase text-[#9D174D]">
                Best Selling Products
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#0F172A] tracking-tight">
                Studio Favourites Ready to Customise
              </h2>
            </div>

            <div
              role="tablist"
              aria-label="Filter products by category"
              className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-xl w-fit"
            >
              {FILTER_TABS.map((tab) => {
                const active = activeCategory === tab.value;
                return (
                  <button
                    key={tab.value}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => onSelectCategory(tab.value)}
                    className={`relative px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9D174D] ${
                      active
                        ? 'text-[#9D174D] font-semibold'
                        : 'text-slate-600 hover:text-[#0F172A]'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="activeFilterBg"
                        transition={{
                          type: 'spring',
                          stiffness: 420,
                          damping: 32,
                        }}
                        className="absolute inset-0 bg-white rounded-lg shadow-sm"
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeCategory}
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -6}}
              transition={{duration: 0.24, ease: [0.16, 1, 0.3, 1]}}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
            >
              {filteredProducts.map((product, index) => {
                const whatsappUrl = buildWhatsAppUrl(
                  `Hello Prints for you! I would like to enquire about ${product.name} (${product.minQty}, ${product.specs}).`
                );

                return (
                  <motion.article
                    key={product.id}
                    initial={{opacity: 0, y: 14}}
                    animate={{opacity: 1, y: 0}}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{y: -4}}
                    className="group rounded-2xl overflow-hidden border border-slate-200/90 bg-white hover:shadow-lg transition-shadow duration-200 flex flex-col"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-[#FDF2F8]/30">
                      <ResilientImage
                        src={product.image}
                        alt={product.name}
                        title={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                      />
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between gap-5">
                      <div className="space-y-2.5">
                        <p className="text-xs text-slate-500 font-medium">
                          {product.category} <span aria-hidden="true">·</span> {product.turnaround} <span aria-hidden="true">·</span> MOQ {product.minQty}
                        </p>
                        <h3 className="text-lg font-semibold text-[#0F172A] leading-snug">
                          {product.name}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {product.description}
                        </p>
                        <p className="text-xs font-mono text-slate-500 pt-1">
                          {product.specs}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                        <div className="tabular-nums">
                          <span className="text-base font-semibold text-[#0F172A]">
                            {product.priceLabel}
                          </span>
                          <span className="block text-xs text-slate-500">
                            per {product.minQty}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Enquire on WhatsApp about ${product.name}`}
                            title="Chat on WhatsApp"
                            className="w-10 h-10 inline-flex items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:text-[#9D174D] hover:border-[#9D174D]/40 hover:bg-[#FDF2F8] transition-colors focus-visible:outline-2 focus-visible:outline-[#9D174D]"
                          >
                            <MessageCircle className="w-4 h-4" aria-hidden="true" />
                          </a>

                          <motion.button
                            type="button"
                            whileTap={{scale: 0.97}}
                            onClick={() =>
                              onEnquireProduct(product.name, product.category)
                            }
                            className="min-h-[40px] px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#9D174D] hover:bg-[#831843] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9D174D]"
                          >
                            Enquire Now
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
