import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import classnames from "classnames";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  const isActiveLesson = slug === props.slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div className="flex flex-row relative">
        {isActiveLesson && (
          <div className="bg-yellow-500 absolute rounded-bl-sm w-[13.75px] h-[13.75px] left-[-6px] top-[calc(50%_-_13.75px/2_+_7.38px)] rotate-45 border-b border-l border-gray-500 group-hover:border-yellow-500" />
        )}
        <div
          className={classnames(
            "flex-1 rounded border border-gray-500 p-4 mt-2 group-hover:border-yellow-500",
            {
              "bg-yellow-500": isActiveLesson,
            }
          )}
        >
          <header className="flex item-center justify-between">
            {isLessonAvailable ? (
              <span
                className={classnames(
                  "flex items-center gap-2 text-sm font-medium",
                  {
                    "text-green-500": !isActiveLesson,
                    "text-gray-500": isActiveLesson,
                  }
                )}
              >
                <CheckCircle size={20} />
                Conteúdo liberado
              </span>
            ) : (
              <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
                <Lock size={20} />
                Em breve
              </span>
            )}

            <span
              className={classnames(
                "text-xs rounded py-[0.125rem] px-2 font-bold border border-gray-500",
                {
                  "text-white border-gray-500": !isActiveLesson,
                  "text-gray-500": isActiveLesson,
                }
              )}
            >
              {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
            </span>
          </header>

          <strong
            className={classnames("mt-5 block", {
              "text-gray-200": !isActiveLesson,
              "text-gray-500": isActiveLesson,
            })}
          >
            {props.title}
          </strong>
        </div>
      </div>
    </Link>
  );
}
