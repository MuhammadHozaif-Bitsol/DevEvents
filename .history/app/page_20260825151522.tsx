import ExploreBtn from "@/components/ExploreBtn";
const page = () => {
  return (
    <>
      <h1 className="text-center">
        The Hub for Every Dev <br /> Event You Can't Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetups, and Conferences, All in One Place
      </p>

      <ExploreBtn></ExploreBtn>
      <h3>Featured Events</h3>
      <ul>{[1, 2, 3, 4, 5].map((event)=>)}</ul>
    </>
  );
};

export default page;
