import Banner from "@/components/banner/banner";
import BannerContainer from "@/components/bannercontainer/bannercontainer";
import CardRow from "@/components/cardrow/cardrow";
import CardRowContainer from "@/components/cardrowcontainer/cardrowcontainer";

const Homepage = () => {
  const a = ["", "", ""];
  const b = ["", ""];
  const cardRowData = a.map((elm) => {
    return {
      category: "Stock Market",
      imageUrl: "/Asset/5.jpeg",
      content:
        " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type  ",
      title: "Technology Changed My Life. Here’s My Story  ",
      author: "irfan",
    };
  });

  const BannersData = b.map((elm) => {
    return {
      category: "Stock market",
      imageUrl: "/Asset/1.jpeg",
      title: "Stock Market Tips",
    };
  });

  return (
    <div>
      <div className="flex md:flex-row flex-col  mt-10 gap-5 ">
        <div className="md:aspect-auto aspect-video flex-1 ">
          <Banner
            category="Stock market"
            imageUrl={"/Asset/1.jpeg"}
            title="Stock Market Tips"
            date={new Date()}
          />
        </div>

        <div className="flex-1 flex flex-col  gap-5">
          <CardRow
            category="health"
            imageUrl="/Asset/2.jpeg"
            author="irfan"
            date={new Date()}
            title="Want a Career in Technology? Make This Your Secret Weapon"
          />
          <CardRow
            category="health"
            imageUrl="/Asset/2.jpeg"
            author="irfan"
            date={new Date()}
            title="Want a Career in Technology? Make This Your Secret Weapon"
          />
          <CardRow
            category="health"
            imageUrl="/Asset/2.jpeg"
            author="irfan"
            date={new Date()}
            title="Want a Career in Technology? Make This Your Secret Weapon"
          />
        </div>
      </div>
      <div className="mt-10">
        <CardRowContainer category="Stock market" cardRowData={cardRowData} />
      </div>
      <div className="mt-10">
        <BannerContainer
          BannersTitle="Latest Tecnology"
          BannersData={BannersData}
        />
      </div>
      <div className="mt-10">
        <CardRowContainer category="Stock market" cardRowData={cardRowData} />
      </div>{" "}
      <div className="mt-10">
        <CardRowContainer category="Stock market" cardRowData={cardRowData} />
      </div>
      <div className="mt-10">
        <BannerContainer
          BannersTitle="Latest Tecnology"
          BannersData={BannersData}
        />
      </div>
    </div>
  );
};

export default Homepage;
