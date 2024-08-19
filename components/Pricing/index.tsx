"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `PRICING PLANS`,
                subtitle: `Tailored Equipment Packages for Every Event`,
                description: `Our pricing is transparent and competitive, with flexible packages to suit any budget. Contact us for a custom quote tailored to your event's needs.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                Rs.8000{" "}
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Basic Gathering
              </h4>
              <p>Essential seating and cookware for small events, ensuring everything runs smoothly without breaking the bank.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    20 Chairs
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    4 Tables
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Basic Cooking Set (Pots, Pans, Utensils)
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                popular
              </div>

              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                Rs. 15000
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Elegant Affair
              </h4>
              <p>Add a touch of class with stylish furniture, decorative elements, and premium cooking equipment for a memorable event.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    50 Cushioned Chairs
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    10 Decorated Tables
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Deluxe Cookware Set
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                Vary
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Custom Package
              </h4>
              <p>Tailor your event with a custom package designed to meet your specific needs.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                  Choose from any equipment or feature
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                  Personalized consultation
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                  Custom pricing based on selection
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
