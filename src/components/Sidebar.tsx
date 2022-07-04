import { useGetLessonsQuery } from "../graphql/generated";
import { useSidebar } from "../hooks/useSidebar";
import { Lesson } from "./Lesson";

export function Sidebar() {
  const { isOpen } = useSidebar();
  const { data } = useGetLessonsQuery();

  return (
    <aside
      className={`w-[348px] bg-gray-700 p-6 border-l border-gray-600 fixed right-0 min-h-full lg:relative
     ease-in-out duration-300 z-10 overflow-y-auto ${isOpen ? "mr-0" : "mr-[-348px] lg:mr-0"}`}
    >
      <span className="font-bold text-xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={`lesson-${lesson.id}`}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
}
