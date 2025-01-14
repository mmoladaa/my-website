import { activitiesData } from "@/lib/data";
import Activity from "@/components/activity";

export default function Activities() {
  return (
    <section id="activities" className="scroll-mt-28 mb-28">
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        My Activities
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto px-4">
        {activitiesData.map((activity, index) => (
          <Activity key={index} {...activity} />
        ))}
      </div>
    </section>
  );
}
